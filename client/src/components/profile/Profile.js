import React from "react";
import './profileCss.css';

function Profile(props) {
  return (
    <div className="profilecard">
      <div className="top">
        <h2 className="name">Maxime</h2>
        <img className="circle-img" src="logo1.png" alt="logo.png" />
      </div>
      <div className="bottom">
        <p className="info">777777</p>
        <p className="info">hy54yhhthrhr</p>
      </div>
    </div>
  );
}

export default Profile;
