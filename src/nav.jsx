import React from "react";
import './index.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Dropdown from 'react-bootstrap/Dropdown'


function Nav(){
    
        
    
    
    return(
        <div>
            
         
         <Breadcrumb>
         <Breadcrumb.Item> All Cards </Breadcrumb.Item>
         <Breadcrumb.Item> Select Card </Breadcrumb.Item>
         </Breadcrumb>
         <input id="textform"placeholder="Search"></input>
         <div className="rightoptions">
                <p>Sort by</p>
                <p>Sort 2</p>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                         Homeworld
                    </Dropdown.Toggle >

                        <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
            </div>
        </div>
         );
      
             } 
           

export default Nav;