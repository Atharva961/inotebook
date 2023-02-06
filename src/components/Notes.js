import { React, useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NotesItem from './NotesItem';
import { useNavigate } from 'react-router-dom';

function Notes(props) {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) { 
            getNotes(); 
        }
        else {
            navigate('/login');
        }
    });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
        props.showAlert("Updated", "success");
    }

    const handleClick = (e) => {
        console.log("Updating the note");
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    const ref = useRef(null);
    const refClose = useRef(null);
    return (
        <>
            <AddNote />

            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-check-label" htmlFor="exampleCheck1">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                            <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3 container'>
                <h2>Your Notes</h2>
                {notes.length === 0 && "No notes to display"}
                {
                    notes.map((note) => {
                        return <NotesItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />;
                    })
                }
            </div>
        </>

    )
}

export default Notes
