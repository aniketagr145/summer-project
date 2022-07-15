import axios from "axios";
import React,{useState} from "react";

function SignUp(props)
{
    
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        number:""
    });

    function handleChange(e){
        const {name,value} = e.target;
        setUser((prev)=>{
            return(
                {
                    ...prev,
                    [name] : value

                }
            )
        })
        }

     function something(e){
        props.handleSubmit(e,user);
     }

      
const formStyle  = {
    padding:"20px"
}
    return (

        <div className = " container col-md-6 offset-md-3 mt-5">
          <form style = {formStyle}  onSubmit={something}> 
          <h1 style={{textAlign:"center", marginBottom:"5%"}}>SignUp</h1>
          <div className="form-group h5">
            <label htmlFor="name">Name</label>
            <input 
            type= "text" 
            name="name" 
            className="form-control" 
            id="name" 
            placeholder="Enter your name" 
            required="required" 
            value={user.name} 
            onChange={handleChange}/>
            </div>

          <div className="form-group h5">
            <label htmlFor="name">Mobile Number</label>
            <input 
            type= "number" 
            name="number" 
            className="form-control" 
            id="number" 
            placeholder="Enter your phone number" 
            required="required" 
            value={user.number} 
            onChange={handleChange}/>
            </div>

            <div className="form-group h5">
            <label htmlFor="email">Email</label>
            <input 
            type= "email" 
            name="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter your email" 
            required="required"
            value={user.email} 
            onChange={handleChange}
            />
            
            </div>

            <div className="form-group h5">
            <label htmlFor="password">Password</label>
            <input 
            type= "password" 
            name="password" 
            className="form-control" 
            id="password" 
            placeholder="Create a password" 
            value={user.password || ""}
            onChange={handleChange}/>
            
            </div>
            <hr/>
            <div className="d-flex justify-content-center">
            <button className="btn btn-lg btn-dark  "
             type = "submit" >Submit</button>
            </div>
           </form>  
        </div>
    );
}
export default SignUp;