import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
   <div className='whitebg'>
    <Header/>
    </div>
    <div className="container">
      <div className="row">
        <div className="web-container">
    <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <NavLink to="/">Back to Homepage</NavLink>
        </div>
        </div>
      </div>
      </div>
      </div>
    <Footer />
    </>
  );
};

export default Error;
