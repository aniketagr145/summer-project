import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route ,Routes, useLocation} from 'react-router-dom';
import SignUp from './components/signuppage/signUP';
import LoginPage from './components/loginPage/loginpage';
import AddPaper from './components/AddPaper';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile.js';
import Player from './components/Player';
import PdfViewer from './components/pdfViewer';
import Grid from './components/Grid';
import axios from "axios";
function App() {

  

const [documentList,setDocumentList] = useState([]);
if(documentList.length==0){
  axios.get('http://localhost:5000/getList')
  .then((res)=>{
    setDocumentList(res.data);
  })
}

function handleSubmit(e,user){
  e.preventDefault();
axios.post(`http://localhost:5000/auth/signup`,user);
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

      <Route exact path="/home" 
      element ={
      <Grid 
        documentList = {documentList}
      />}
      />

<Route exact path="/profile" 
      element ={
      <Profile 
      />}
      />
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

<Route exact path="/video/:name" 
      element ={<Player 
        // name= {sadf}
      />
      } />

<Route exact path="/pdf/:name" 
      element ={<PdfViewer 
        // name= {}
      />
      } />
    
      </Routes>
    </BrowserRouter>

  );
}

export default App;