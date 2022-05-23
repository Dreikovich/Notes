import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
    
    ]);
  
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
      
      setSearchInput(searchValue)
      console.log(searchValue)
      console.log(searchInput)
      if (searchInput !== ''){
        const filteredData = notes.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
        })
        console.log(filteredData)
        setFilteredResults(filteredData)
      }
      else{
        setFilteredResults(notes)
      }
    }
  

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

    setNotes((prevNotes) => {
      return prevNotes.filter(el=>el.id !== id)
    })

    setFilteredResults((prevNotes)=>{
      return prevNotes.filter(el=>el.id !== id)
    })
  }
  
  return (
    <div className="App">     
        <h1 style={{textAlign: 'center'}}>Notes</h1>
        <Search notes={notes} searchItems={searchItems}/> 
        <NoteList notes={searchInput.length < 1 ? notes:filteredResults} addNote={addNote} getId={deleteNote}/>
    </div>
  );
}

export default App;
