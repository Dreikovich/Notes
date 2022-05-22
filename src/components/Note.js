import React from 'react'
// import {MdDeleteForever} from 'react-icons/md'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Note.module.css"



const Note = (props) =>{
    // onClick={()=>props.getId(props.note.id)}
    return(
        <div  className={styles.note}>
            <div style={{wordWrap: "break-word"}}>
                <p className="text" >{props.note.text}</p>
            </div>
            
            <div className="note-footer" style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                <small>{props.note.date}</small>
                <button onClick={()=>props.getId(props.note.id)} style={{borderColor:"#fbee34b1"}}className="btn btn-outline-dark"><FontAwesomeIcon icon={faTrash} > </FontAwesomeIcon></button>
            </div>
        </div>
    )
}

export default Note