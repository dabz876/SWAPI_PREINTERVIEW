import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Starship from './svg/Starship.svg'
import Vehicle from './svg/Vehicle.svg'
import Homeworld from './svg/Homeworld.svg'
import Gender from './svg/Gender-Male.svg'
import Container from 'react-bootstrap/Container'


function CardC(){

    return(

        <div className="cardbody">
         
           
               
                    <Card style={{ width: '13rem' }} >
                     <Card.Header style={{height:'98px'}}>Name </Card.Header>
                        <Card.Body>
                         <Card.Text><img src={Gender} alt="Card"/>19BBY {''} <p>Species </p>  </Card.Text> 
                            <hr/>
                        </Card.Body>
                            <Button className="peopleatt" variant="secondary"><img src={Homeworld} alt="Card"/>Homeworld</Button>
                            <Button className="peopleatt" variant="secondary"><img src={Vehicle} alt="Card"/>Vehicles</Button>
                            <Button className="peopleatt" variant="secondary"><img src={Starship} alt="Card"/>Starships</Button>
                         </Card>
                
            
        </div>

    );
 
    
    

    }
export default CardC;