import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteList from './components/NoteList';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react'

import Search from './components/Search';

function App() {
  const [notes,  setNotes] = useState([
    {
      id: uuidv4(),
      text :"This is my first note",
      date:"15/04/2021"
    },
    {
      id: uuidv4(),
      text :"This is my second note",
      date:"15/04/2021"
    },
    {
      id: uuidv4(),
      text :"This is my third note",
      date:"15/04/2021"
    },
    ]);
  
  const addNote=(text)=>{
    const date = new Date()
    const newNote ={
      id: uuidv4(),
      text : text,
      date: date.toLocaleDateString()
    }
    const newNoteAray = [...notes,newNote]
    setNotes(newNoteAray)
  }

  const deleteNote = (id) =>{
    const newNoteList= notes.filter(el=>{
      return el.id !== id
    })
    setNotes(newNoteList)
  }
  
 


  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Notes</h1>
      <Search/>
      <NoteList notes ={notes} addNote={addNote} getId={deleteNote}/>
    </div>
  );
}

export default App;
