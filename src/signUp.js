import React,{useState} from "react";
function SignUp()
{
    const [addEvent, setAddEvent ] = useState('');
//     // const [add, setAdd ] = useState("");
//     const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () =>
// setAddEvent('right-panel-active container')
// );

// signInButton.addEventListener('click', () =>

// setAddEvent('container')
// );

    return( <div>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
			integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
			crossOrigin="anonymous"/>


	<div className="container"  id="container">
    <div className = {addEvent}>
					<div className="form-container sign-up-container">
							<form action="#">
									<h1>Create Account</h1>
									<div className="social-container">
											<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
											<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
											<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
									</div>
									<span>or use your email for registration</span>
									<input type="text" placeholder="Name" />
									<input type="email" placeholder="Email" />
									<input type="password" placeholder="Password" />
									<button>Sign Up</button>
							</form>
					</div>
					<div className="form-container sign-in-container">
							<form action="#">
									<h1>Sign in</h1>
									<div className="social-container">
											<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
											<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
											<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
									</div>
									<span>or use your account</span>
									<input type="email" placeholder="Email" />
									<input type="password" placeholder="Password" />
									<a href="#">Forgot your password?</a>
									<button
                                    >Sign In</button>
							</form>
					</div>
					<div className="overlay-container">
							<div className="overlay">
									<div className="overlay-panel overlay-left">
											<h1>Welcome Back!</h1>
											<p>To keep connected with us please login with your personal info</p>
											<button className="ghost" 


                                            id="signIn">Sign In</button>
									</div>
									<div className="overlay-panel overlay-right">
											<h1>Hello, Friend!</h1>
											<p>Enter your personal details and start journey with us</p>
											<button className="ghost" 
                                            onClick = {
                                                
                                                ()=>{
                                                    setAddEvent('right-panel-active');
                                                    console.log(addEvent);
                                                      }
                                            } id="signUp">Sign Up</button>
									</div>
							</div>
					</div>
			</div>
</div>
	<div className="footer">
	<b>	Follow me on </b>
		<div className="icons">
			<a href="https://github.com/kvaibhav01" target="_blank" className="social"><i className="fab fa-github"></i></a>
			<a href="https://www.instagram.com/vaibhavkhulbe143/" target="_blank" className="social"><i className="fab fa-instagram"></i></a>
			<a href="https://medium.com/@vaibhavkhulbe" target="_blank" className="social"><i className="fab fa-medium"></i></a>
			<a href="https://twitter.com/vaibhav_khulbe" target="_blank" className="social"><i className="fab fa-twitter-square"></i></a>
			<a href="https://linkedin.com/in/vaibhav-khulbe/" target="_blank" className="social"><i className="fab fa-linkedin"></i></a>
			</div>
		</div>
    </div>
    );
    
}
export default SignUp;
// export default SignUp;