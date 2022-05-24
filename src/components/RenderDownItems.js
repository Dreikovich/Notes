import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./DropDownMenu.module.css"
  



const RenderingItemsInSelect = (props)=>{
  let count=0
  const RenderDownItems = props.colors.map((el)=>{
  
      return (
        
        <div key={count+=1} className={styles.menuItem} >
            <button className="btn btn-primary" style={{backgroundColor:"rgba(28,28,28,0)", borderColor:"rgba(28,28,28,0)",borderadius:"50%"}} onClick={()=>console.log("clik")}>
              <FontAwesomeIcon icon={faCircle} style={{color:`${el}`, fontSize: "20px"}}/>
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
  

    
  

