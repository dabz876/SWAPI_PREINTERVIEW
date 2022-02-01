import React from "react";
import './index.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Starship from './svg/Starship.svg'
import Deck from './svg/Deck.svg'

function Header(){
    
        
    
    
    return(
        <div>
            
        <Button className="cards" variant="light" size="md"> All Cards
        <img src={Starship} alt="Card"/>  </Button> {' '} 

        <Button variant ="secondary" size="md">  Decks<img src={Deck} alt="Card"/></Button>{' '} 

        <Button className="rsidebutton" variant ="outline-secondary" size="md" > Bavin Edwards</Button>
        <h4 className ="heading">SW-API DECK BUILDER</h4>
        <hr></hr>
        </div>
         );
      
             } 
           

export default Header;