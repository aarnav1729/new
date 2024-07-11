import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Leadership01 from "./images/Jasveen-Saluja.png";
import { Leaderbtn } from "./Leaderbtn";

export const Jasveen = () => {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://premierenergies.com/jasveen-saluja"
        />
      </Helmet>
      <div className="whitebg">
        <Header />
      </div>
      <section id="aboutleader">
        <div className="aboutleader">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="leadershipstn">
                  <div className="leadername">
                    <h1
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      JASVEEN SALUJA
                    </h1>
                    <span
                      data-aos="fade-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Director, Entrepreneur
                    </span>
                  </div>
                  <div className="bio">
                    <div
                      className="leadershipimg"
                      data-aos="fade-left"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <img src={Leadership01} alt="img"/>
                    </div>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Jasveen Saluja is a serial entrepreneur and has over a
                      decade of experience in running her own interior designing
                      company. Being business savvy, she is responsible for
                      business development, procurement, project planning and
                      government liaisoning. She holds a degree in commerce and
                      fashion design.
                    </p>
                  </div>
                </div>
                <Leaderbtn />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
