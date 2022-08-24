import React, {useState} from "react";
import { getInitialData } from "./utils";
import NoteList from "./components/NoteList";
import AddNewNote from "./components/AddNewNote";
import Message from "./components/Message";

function App() {

  const [notes, setNotes] = useState(getInitialData());

  const addNote = (title, body) => {
      const date = new Date();
      const noteItem = {
        id: +new Date(),
        title: title,
        body: body,
        createdAt: date.toLocaleDateString(),
      }
      setNotes([...notes, noteItem]);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <AddNewNote addNote={addNote}/>
      <NoteList notes={notes} deleteNote={deleteNote}/>
      <Message notes={notes}/>
    </div>
  );
}

export default App;
