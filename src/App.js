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
      date:"15/04/2021",
      color: "#99CCFF"
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
      date: date.toLocaleDateString(),
      color:"#99CCFF"
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
  const colors=[{
    id: uuidv4(),
    color:"#FFFF99"
  },
  {
    id: uuidv4(),
    color:"#FF99CC"
  },
  {
    id: uuidv4(),
    color:"#99CCFF"
  },
  {
    id: uuidv4(),
    color:"#CC99FF"
  },
  {
    id: uuidv4(),
    color:"#CCFFCC"
  },
  {
    id: uuidv4(),
    color:"#FF6633"
  },
]
  
  // const [color, setColor] = useState()

  // const changeColor=(id) =>{
  //   // const id = event.currentTarget.id;
    
  //   const find = colors.filter(element=>element.id===id)
  //   // console.log(find)
  //   setColor(find[0].color)
  
  // }
  

  const [idOfComponent, setIdOfComponent]  = useState()
  const  getIdComponent = (id)=>{ 
    setIdOfComponent(id)
  }


  const changeColorComponent=(idCol)=>{
    
    // console.log(idOfComponent)
    const find = colors.filter(element=>element.id===idCol)

    let index = ""
    const copyNotes = [...notes]
    console.log("id component " ,idOfComponent)
    const newArray = copyNotes.filter(note =>{
      if(note.id===idOfComponent){
        console.log(note.id)
        note.color = find[0].color
        return note
      }})
    console.log(newArray)
    copyNotes.map((note,idx)=>{
      if(note.id===idOfComponent){
          index=idx
      }
      console.log(index)
    })
    let array = [...notes]
    if (index > -1) {
      array.splice(index, 1, ...newArray);
    }
    setNotes(array)
    
  }
 
  return (
    <div className="App" >     
        <h1 style={{textAlign: 'center'}}>Notes</h1>
        <Search notes={notes} searchItems={searchItems}/> 
        <NoteList notes={searchInput.length < 1 ? notes:filteredResults} 
            addNote={addNote} 
            getId={deleteNote}
            getIdfromSettings = {getIdComponent}
            colors={colors} 
            changeColor={changeColorComponent} 
            />
        
        
    </div>
  
  );
}

export default App;
