import React from 'react'
// import {MdDeleteForever} from 'react-icons/md'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Note.module.css"
import SelectNoteColor from './SelectNoteColor';

import RenderingItemsInSelect from './RenderDownItems.js';



const Note = (props) =>{
    // onClick={()=>props.getId(props.note.id)}
    return(
        <div  className={styles.note} >
            <div className="select" style={{display:"flex", alignItems: "flex-start", justifyContent: "right", marginRight:"20px", maxHeight: "20px", position:"absolute", top:"5px", right:"10px"}}>
                <SelectNoteColor icon={<FontAwesomeIcon icon={faCog} style={{color:"rgb(1,1,1)"}}/>} >
                    <RenderingItemsInSelect classname="flex-item" colors={props.colors}/>
                </SelectNoteColor >
            </div>
            <div className="nav" style={{display:"flex", alignItems: "flex-start", marginBottom:"50px", marginRight:"50px"}} >
                <div style={{wordWrap: "break-word"}}>
                    <p className="text" >{props.note.text}</p>
                </div>
                
            </div>
            
            
            <div className="note-footer" style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                <small>{props.note.date}</small>
                <button onClick={()=>props.getId(props.note.id)} style={{borderColor:"#fbee34b1"}}className="btn btn-outline-dark">
                    <FontAwesomeIcon icon={faTrash} > </FontAwesomeIcon>
                </button>
            </div>
        </div>
    )
}

export default Note