import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function card(props){
    const document = props.document;
    return(
<Card style={{"textAlign":"center"}} border="dark" >
<Card.Header style={{ "textAlign":"left"}}>
<p ><Card.Img src="logo.png"style={{"width":"3rem", "textAlign":"left"}} />
   
        Mack Mohan Verma
    </p>
</Card.Header>
<Card.Img variant="top" src="card.jpg" alt="image" className="mx-auto mt-4"  style={{"width":"15rem"} } />
<Card.Body>
  <h2 className='display-2'>{document.title}</h2>
  <Card.Text>
   {document.description}  
  </Card.Text>
  <hr/>
  <Link to= {`/video/${document.video}`} style={{"marginRight":"50px"}} className="btn btn-lg btn-dark ml-auto">View video</Link>
  <Link to= {`/pdf/${document.pdf}`} style={{"marginLight":"50px"}} className="btn btn-lg btn-dark">View the paper</Link>
</Card.Body>
</Card>
    )};

    export default card;