import './App.css';
import React, {createContext, useEffect, useReducer, useState} from 'react';
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
import { reducer, InitialState } from './reduxer.js';

export const UserContext = createContext();

function App() {
	const [ state, dispatch ] = useReducer(reducer, InitialState);

  useEffect(()=>{
    fetch('http://localhost:5000/auth/',{
      method:'get',
      headers:{
        'Content-Type': 'application/json',
        "Authorization":"Bearer " + localStorage.getItem('jwt')
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      if(result.error){
        console.log(result.error)
        // alert(result.error)
      }else{
        dispatch({type:'DATA',payload:result})
        dispatch({type:'LOGGED'})
      }
    }).catch(err=>console.log(err))
  },[])

  const [documentList,setDocumentList] = useState([]);
  if(documentList.length==0){
    axios.get('http://localhost:5000/getList')
    .then((res)=>{
      setDocumentList(res.data);
    })
  }

  function handleSubmit(e,user){
      e.preventDefault();
    // axios.put(`http://localhost:5000/auth/signup`,{name:user.name,email:user.email,pass:user.password,number:user.number}).catch(err=>console.log(err));
    fetch('http://localhost:5000/auth/signup',{
      method:'put',
      headers:{
        'Content-Type': 'application/json'
      },body:JSON.stringify({
        name:user.name,email:user.email,pass:user.password,number:user.number
      })
    }).then(res=>res.json())
    .then(result=>console.log(result)).catch(err=>console.log(err))
    console.log(user);
  }

  function handleLogin(e,user){
    e.preventDefault();
    // axios.get(`http://localhost:5000/`)
    // .then((res)=>console.log(res));
    fetch('http://localhost:5000/auth/login',{
      method:'put',
      headers:{
        'Content-Type': 'application/json'
      },body:JSON.stringify({
        email:user.email,pass:user.password
      })
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      localStorage.setItem('jwt',result.token)
    }).catch(err=>console.log(err))
  }




  return (
    <UserContext.Provider value={{ state, dispatch }}>
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
    </UserContext.Provider>
  );
}

export default App;