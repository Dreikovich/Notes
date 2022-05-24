import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./DropDownMenu.module.css"
  



const RenderingItemsInSelect = (props)=>{
  
  
  

  const RenderDownItems = props.colors.map((el)=>{
    
  
      return (
        
        <div key={el.id} className={styles.menuItem} >
            <button id={el.id} className="btn btn-primary" style={{backgroundColor:"rgba(28,28,28,0)", borderColor:"rgba(28,28,28,0)",borderadius:"50%"}} onClick={(event)=>props.changeColor(event.currentTarget.id)}>
              <FontAwesomeIcon icon={faCircle} style={{color:`${el.color}`, fontSize: "20px"}}/>
            </button>
        </div>
      )
    })

    return(
      
        <div className={styles.dropDownMenu} style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr"}}>
          {RenderDownItems}
        </div>
      
    )
}

export default RenderingItemsInSelect
  

    
  

