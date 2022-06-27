import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import './profileCss.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
function Profile()
{
    const profileImg = {
        width:"150px",
         zIndex: "1"
    }
    return(

        <section className="h-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
            <div className="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
               style = {profileImg}
                />
              {/* <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style="z-index: 1;">
                Edit profile
              </button> */}
            </div>
            <div className="ms-3" style="margin-top: 130px;">
              <h5>Andy Horwitz</h5>
              <p>New York</p>
            </div>
          </div>
          <div className="p-4 text-black" style="background-color: #f8f9fa;">
            <div className="d-flex justify-content-end text-center py-1">
              <div>
                <p className="mb-1 h5">253</p>
                <p className="small text-muted mb-0">Photos</p>
              </div>
              <div className="px-3">
                <p className="mb-1 h5">1026</p>
                <p className="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p className="mb-1 h5">478</p>
                <p className="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4" style="background-color: #f8f9fa;">
                <p className="font-italic mb-1">Web Developer</p>
                <p className="font-italic mb-1">Lives in New York</p>
                <p className="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent photos</p>
              <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
    ;
}
export default Profile;