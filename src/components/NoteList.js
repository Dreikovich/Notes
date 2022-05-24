import React from 'react'
import Note from './Note'

import styles from "./gridNote.module.css"
import AddNote from './AddNote'
// import uuidv4 from "./uuidv4"

const NoteList = (props) =>{
    
    const renderNotes = props.notes.map((note)=>{
    return(
        <div key={note.id}>
            <Note note={note} getId={props.getId} colors={props.colors}/>
        </div>
    )
    })
    return(
        <div className={styles.container} >
            {renderNotes}
            <AddNote addNote={props.addNote}/>
           
        </div>
    )
}

export default NoteList