import React from 'react';
import ProfileImage from '../assets/profile-image.png';

const AboutMe = () => {
  return (
    <div className="row">
      <div className="col-md-3 mx-auto">
        <img src={ProfileImage} className="img-fluid ps-5" alt="Profile"  />
      </div>
      <div className="col-md-9 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">About Me</h5>
            <p className="card-text">Hello there, my name is Armand Araujo, and this is my portfolio. I am curently 28 years of age,
        and endeavoring to become a fullstack web developer. This page is where I will share all pertinent details about
        myself as they come about. Thanks for visiting!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;