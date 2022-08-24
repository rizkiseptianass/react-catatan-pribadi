const Note = ({id, title, body, createdAt, deleteNote}) => {
    return(
        <div className="note">
            <h4>{title}</h4>
            <small>{createdAt}</small>
            <p>{body}</p>
            <button className="btn" onClick={() => deleteNote(id)}>Delete</button>
        </div>
    )
}

export default Note;