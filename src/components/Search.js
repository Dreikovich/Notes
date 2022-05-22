import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button  from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Search = ()=>{
    return (
        // margin auto ценнтрирует весь блок
        // можно испольщовать flex но он автоматически ументьшает размер поиска
        <div className="search" style={{width:"450px", margin:"auto"}}>
            <div className="form-group">
                <InputGroup>
                    <FormControl placeholder="Search...">     
                    </FormControl>
                    <Button type="button" className="btn btn-primary">
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </InputGroup>
            
                
            </div>
            
                
               
         
        </div>
        
    )
}

export default Search