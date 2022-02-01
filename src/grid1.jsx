import React from "react";
import Card from './card';

import {Container,Row,Col} from 'react-grid-system';


function Grid(){

    return(

      <Container>
      <Row lg={2} md={6} sm={12}> 
        <Col >
         < Card></Card>
        </Col>
        
        <Col>
        < Card></Card>
        </Col>

        <Col>
        < Card></Card>
        </Col>
        
        <Col>
        < Card></Card>
        </Col>
      </Row>

      <Row lg={2} md={6} sm={12}>
        <Col >
        < Card></Card>
        </Col>
        <Col>
        < Card></Card>
        </Col>
        <Col >
        < Card></Card>
        </Col>
        <Col>
        < Card></Card>
        </Col>
       </Row>
    </Container>
    );
 
    
    

    }
export default Grid;