import styles from "./Note.module.css"
import {useState} from "react"

import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


const AddNote = (props)=>{
    const [noteText, setNoteText] = useState("")

    const handleChange=(event)=>{
        event.preventDefault();
        if(characterLimit-event.target.value.length>=0){
            setNoteText(event.target.value)
        }
        
    }

    const resetTextareaField = ()=>{
        setNoteText("")
    }

    const handleSave = ()=>{
        props.addNote(noteText)
        resetTextareaField()
    }

    const characterLimit = 200;

    return(
        <div className={styles.newNote}>
            <div className="text">
                <textarea value={noteText} onChange={handleChange}placeholder="Type here..." rows="4" cols="24" ></textarea>
             </div>
             <div className="note-footer" style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                 <small>{characterLimit-noteText.length} remaining</small>
                 <Button type="submit" variant="btn btn-outline-dark" className={styles.button} onClick={handleSave} >Save</Button>
             </div>
        </div>
        
    )
}

export default AddNote