import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
const FormPage = () => {
 const    signuppageStyle = 
    
        {width:"30%",
        marginTop :"30px",
        padding : "50px"
        }

    
  return (
      // <div style={signuppageStyle} >
    <MDBContainer style={signuppageStyle} >
      <MDBRow >
        <MDBCol md="12" >
          <form>
            <p className="h1 text-center mb-4">Login</p>
            <div className="grey-text">
              <MDBInput
                label="User Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    // </div>
  );
};

export default FormPage;