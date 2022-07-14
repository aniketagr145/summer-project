import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
function NavBar()
{
    const isLoggedIn = true;
    return (
<>
        {isLoggedIn?
  <Navbar style={{height:"80px"}} bg="dark" variant="dark">
    <Navbar.Brand href="/">
    <img
              alt="logo.png"
              src="logo.png"
              width="40"
              height="40"
              style={{"margin-right":"10px", "margin-bottom":"7px" }}
              className="brands"

            />
    <span style={{"color":"#FCF8E8", "backgroundColor":"#3F4E4F"}}>Research</span>
     <span style={{"color":"black", "backgroundColor":"#FCF8E8"}}>Hub</span>
    </Navbar.Brand>
    <Nav className="ms-auto nav-item" > 
    
      <Nav.Link   href="/">Home</Nav.Link>
      <Nav.Link  href="/signup">SignUp</Nav.Link>
      <Nav.Link  href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>:
  <Navbar style={{height:"80px"}} bg="dark" variant="dark">
    <Navbar.Brand href="#home">ResearchHub</Navbar.Brand>
    <Nav className="ms-auto  nav-item" > 
      <Nav.Link   href="/">Home</Nav.Link>
      <Nav.Link  href="/profile">Profile</Nav.Link>
      <Nav.Link  href="/">Logout</Nav.Link>
    </Nav>
  </Navbar>
        }
  
  <br />
 
</>
       
    )
    ;
}
export default NavBar;