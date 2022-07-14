import './App.css';
import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import SignUp from './components/signuppage/signUP';
import LoginPage from './components/loginPage/loginpage';
import AddPaper from './components/AddPaper';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile.js';
import Player from './components/Player';
import PdfViewer from './components/pdfViewer';
import axios from "axios";
function App() {


function handleSubmit(e,user){
  e.preventDefault();
axios.post(`http://localhost:5000/`,user);
console.log(user);
}

function handleLogin(e,user){
e.preventDefault();
axios.get(`http://localhost:5000/`)
.then((res)=>console.log(res));

}

  return (

    <BrowserRouter>

      <NavBar/>
      <Routes>
      <Route exact path="/signup" 
      element ={
      <SignUp 
        handleSubmit = {handleSubmit}
      />
      } />
      <Route exact path="/login" 
      element ={
        <LoginPage handleLogin= {handleLogin}/>
      } />
      <Route exact path="/addpaper" 
      element ={<AddPaper />
      } />

<Route exact path="/video" 
      element ={<Player />
      } />

<Route exact path="/pdf" 
      element ={<PdfViewer />
      } />
    
      </Routes>
    </BrowserRouter>

  );
}

export default App;