import { useState } from "react";

const AddNewNote = ({addNote}) => {

    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');

    const sisaKarakter = 200;

    const changeTitle = (e) => {
        setNoteTitle(e.target.value);
    }

    const changeBody = (e) => {
        setNoteBody(e.target.value);
    }

    const saveClick = () => {
        if(noteTitle.trim().length > 0 && noteBody.trim().length > 0){
            addNote(noteTitle, noteBody);
        }
    }

    return(
        <div className="note new">
            <input placeholder="type to add a new title...." value={noteTitle} onChange={changeTitle}></input>
            <textarea cols={8} rows={10} placeholder="type to add a note...." value={noteBody} onChange={changeBody}></textarea>
            <small>Sisa Karakter : {sisaKarakter - noteBody.length}</small>
            <button className="btn" onClick={saveClick}>Add</button>
        </div>
    )
}

export default AddNewNote;