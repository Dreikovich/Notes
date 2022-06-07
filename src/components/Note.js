import React from 'react'
// import {MdDeleteForever} from 'react-icons/md'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Note.module.css"
import SelectNoteColor from './SelectNoteColor';

import RenderingItemsInSelect from './RenderDownItems.js';



const Note = (props) =>{
    // onClick={()=>props.getId(props.note.id)}
    console.log(props.note.color)
    return(
        <div  className={styles.note} style={{backgroundColor:`${props.note.color}`}} >
            <div className="select" style={{display:"flex", alignItems: "flex-start", justifyContent: "right", marginRight:"20px", maxHeight: "20px", position:"absolute", top:"5px", right:"10px"}}>
                <button style={{backgroundColor:"rgb(0,0,0,0)",borderColor:"rgb(0,0,0,0)"}} onClick={()=>props.getIdfromSettings(props.note.id)}><SelectNoteColor  icon={<FontAwesomeIcon icon={faCog} style={{color:"rgb(1,1,1)"}}/>} >
                    <RenderingItemsInSelect classname="flex-item" colors={props.colors} changeColor={props.changeColor} />
                </SelectNoteColor >
                </button>
            </div>
            <div className="nav" style={{display:"flex", alignItems: "flex-start", marginBottom:"50px", marginRight:"50px"}} >
                <div className={{overflowX:"hidden"}} style={{wordWrap: "break-word"}}>
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