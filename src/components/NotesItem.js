import React from 'react'

function NotesItem(props) {
    return (
        <div className= "col-md-3 my-3">
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.note.title}</h5>
                        <p className="card-text">{props.note.description}</p>
                    </div>
            </div>
        </div>
    )
}

export default NotesItem;
