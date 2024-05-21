import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src=""
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello! My name is Batyrkhan Hudaybergenov, and I am full stack developer, I am passionate about creating beautiful and functional websites.
                I am studying at Narxoz University, in a degree Digital Engineering. 
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
