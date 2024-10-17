import React from "react";
import { Link } from "react-router-dom";
import testSvg from '../testSvg.svg'
const NotFound = () => {
  return (
    <>
      <div className="cont-404">
        <img src={testSvg} alt="svg" />
        <Link to="/"><button>Home Page</button></Link>
      </div>
    </>
  );
};

export default NotFound;
