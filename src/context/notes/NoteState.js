import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "63b30d91742db49fc3d4d467",
            "user": "63aab750907dc9ea6ac24bc2",
            "title": "Silicon Valley",
            "description": "Richard, Jared, Dinesh, Gilfoyle, Erlich",
            "tag": "TV Show",
            "date": "2023-01-02T17:00:01.945Z",
            "__v": 0
        },
        {
            "_id": "63b30d92742db49fc3d4d469",
            "user": "63aab750907dc9ea6ac24bc2",
            "title": "Silicon Valley",
            "description": "Richard, Jared, Dinesh, Gilfoyle, Erlich",
            "tag": "TV Show",
            "date": "2023-01-02T17:00:02.597Z",
            "__v": 0
        },
        {
            "_id": "63b30d91742db49fc3d4d467",
            "user": "63aab750907dc9ea6ac24bc2",
            "title": "Silicon Valley",
            "description": "Richard, Jared, Dinesh, Gilfoyle, Erlich",
            "tag": "TV Show",
            "date": "2023-01-02T17:00:01.945Z",
            "__v": 0
        },
        {
            "_id": "63b30d92742db49fc3d4d469",
            "user": "63aab750907dc9ea6ac24bc2",
            "title": "Silicon Valley",
            "description": "Richard, Jared, Dinesh, Gilfoyle, Erlich",
            "tag": "TV Show",
            "date": "2023-01-02T17:00:02.597Z",
            "__v": 0
        },
        {
            "_id": "63b30d91742db49fc3d4d467",
            "user": "63aab750907dc9ea6ac24bc2",
            "title": "Silicon Valley",
            "description": "Richard, Jared, Dinesh, Gilfoyle, Erlich",
            "tag": "TV Show",
            "date": "2023-01-02T17:00:01.945Z",
            "__v": 0
        },
        {
            "_id": "63b30d92742db49fc3d4d469",
            "user": "63aab750907dc9ea6ac24bc2",
            "title": "Silicon Valley",
            "description": "Richard, Jared, Dinesh, Gilfoyle, Erlich",
            "tag": "TV Show",
            "date": "2023-01-02T17:00:02.597Z",
            "__v": 0
        },
        {
            "_id": "63b30d91742db49fc3d4d467",
            "user": "63aab750907dc9ea6ac24bc2",
            "title": "Silicon Valley",
            "description": "Richard, Jared, Dinesh, Gilfoyle, Erlich",
            "tag": "TV Show",
            "date": "2023-01-02T17:00:01.945Z",
            "__v": 0
        },
        {
            "_id": "63b30d92742db49fc3d4d469",
            "user": "63aab750907dc9ea6ac24bc2",
            "title": "Silicon Valley",
            "description": "Richard, Jared, Dinesh, Gilfoyle, Erlich",
            "tag": "TV Show",
            "date": "2023-01-02T17:00:02.597Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;