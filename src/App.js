import './App.css';

import SignUp from './components/signuppage/signUP';
import LoginPage from './components/loginPage/loginpage';
import AddPaper from './components/AddPaper';
import NavBar from './components/navbar/NavBar';
function App() {
  return (
    <div className="App">
    <NavBar/>
    {/* <SignUp/> */}
     <LoginPage/>
    {/* <Profile /> */}
    {/* <AddPaper /> */}
    </div>
  );
}

export default App;
