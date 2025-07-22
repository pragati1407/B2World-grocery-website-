import React, { useState } from "react";
import notecontext from "./notecontext";

const NoteState = (props) => {
    const noteInitial = [
        {
            "_id": "1",
            "user": "68153d66161a37cc26541434",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2025-05-08T10:15:37.881Z",
            "__v": 0
        },
        {
            "_id": "2",
            "user": "68153d66161a37cc26541434",
            "title": "Another Title",
            "description": "Get some rest",
            "tag": "personal",
            "date": "2025-05-08T10:22:55.690Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(noteInitial);

    // Add a Note
    const addNote = (title, description, tag) => {
        const note = {
            _id: Date.now().toString(),
            user: "68153d66161a37cc26541434",
            title,
            description,
            tag,
            date: new Date().toISOString(),
            __v: 0
        };
        setNotes(notes.concat(note));
    };

    // Delete a Note
    const deleteNote = (id) => {
        console.log("Deleting the note with id: " + id);
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
    };

    // Edit Note placeholder
    const editNote = () => {};

    return (
        <notecontext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </notecontext.Provider>
    );
};

export default NoteState;
