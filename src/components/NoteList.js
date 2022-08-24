import Note from "./Note";

const NoteList = ({notes, deleteNote}) => {
    return(
        <div className="note-list">
            {notes.map(note => (
                <Note key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} deleteNote={deleteNote}/>
            ))}
        </div>
    )
}

export default NoteList;