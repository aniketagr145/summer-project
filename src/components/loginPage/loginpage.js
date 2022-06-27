import React,{useState} from "react";

function Login(props)
{
      
const [user, setUser] = useState({
    email: "",
    password: ""
});

function handleChange(e){
    const {name, value} = e.target

    setUser((prev)=>{
        return({
            ...prev,
            [name]: value
         })
    });

    console.log(user);

}

const formStyle  = {
    padding:"20px"
}
    return (
        <div className = " container col-md-6 offset-md-3 mt-5">
          <form style = {formStyle} onSubmit={(e)=>{
            props.handleLogin(e,user)
          }}> 
          <h1 style={{textAlign:"center", marginBottom:"5%"}}>Login</h1>

            <div className="form-group h5">
            <label htmlFor="email">Email</label>
            <input  
            type= "email" 
            name="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter your email" 
            required="required"
            value = {user.email}
            onChange= {handleChange} />
            </div>

            <div className="form-group h5">
            <label htmlFor="password">Password</label>
            <input 
            type= "password" 
            name="password" 
            className="form-control" 
            id="password" 
            placeholder="Enter your password"
            value = {user.password} 
            onChange= {handleChange}  />
            </div>
            <hr/>
            <div className="d-flex justify-content-center">
            <button className="btn btn-lg btn-dark  "
             type = "submit" >login</button>
            </div>
           </form>  
        </div>
    );
}
export default Login;