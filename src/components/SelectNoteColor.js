import React,{useState} from 'react'


const SelectNoteColor = (props)=>{
    
    const [open,setOpen] = useState(false)
    return (
        <div style={{maxHeight:"100px", maxWidth:"10px"}}> 
            
            <a href="#" onClick={()=>setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
            
        </div>
    )
}

export default SelectNoteColor