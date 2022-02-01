import React from 'react';
import Reactdom from 'react-dom';
import CardC from './card';
import Header from './header';
import Nav from './nav';

import Grid from './grid1';





Reactdom.render(
<div> 
   
       <Header></Header>
       <Nav></Nav>
       <Grid></Grid>
   
    
</div>,
document.getElementById("root")
);