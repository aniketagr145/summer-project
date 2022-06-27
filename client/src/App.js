import './App.css';
import SignUp from './components/signuppage/signUP';
import LoginPage from './components/loginPage/loginpage';
import AddPaper from './components/AddPaper';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile.js';
import axios from "axios";
function App() {


function handleSubmit(e,user){
axios.post(`http://localhost:5000/`,user);
console.log(user);
}

function handleLogin(e,user){
e.preventDefault();
axios.get(`http://localhost:5000/`)
.then((res)=>console.log(res));

}




  return (
    <div className="App">
    <NavBar/>
    {/* <SignUp 
      handleSubmit = {handleSubmit}
    /> */}
     <LoginPage handleLogin= {handleLogin}/>
    {/* <Profile /> */}
    {/* <AddPaper /> */}
    </div>
  );
}

export default App;