import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
function NavBar()
{
    const isLoggedIn = false;
    return (
<>
        {isLoggedIn?
  <Navbar style={{height:"80px"}} bg="dark" variant="dark">
    <Navbar.Brand  href="#home">XYZ</Navbar.Brand>
    <Nav className="ms-auto nav-item" > 
    
      <Nav.Link   href="#home">Home</Nav.Link>
      <Nav.Link  href="#features">SignUp</Nav.Link>
      <Nav.Link  href="#pricing">Login</Nav.Link>
    </Nav>
  </Navbar>:
  <Navbar style={{height:"80px"}} bg="dark" variant="dark">
    <Navbar.Brand href="#home">XYZ</Navbar.Brand>
    <Nav className="ms-auto  nav-item" > 
      <Nav.Link   href="#home">Home</Nav.Link>
      <Nav.Link  href="#features">Profile</Nav.Link>
      <Nav.Link  href="#pricing">Logout</Nav.Link>
    </Nav>
  </Navbar>
        }
  
  <br />
 
</>
       
    )
    ;
}
export default NavBar;