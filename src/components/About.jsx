import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-4 mt-4">About Us</h1>
            <p className="lead mb-4 fw-100">
              At TrendBazaar we believe that shopping should be simple,
              enjoyable, and accessible to everyone. That's why we have created
              a platform where you can explore and buy the products you love,
              all from the convenience of your home.
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/public/assets/images/aboutt.jpg"
              alt="About Us"
              height="500px"
              width="500px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
