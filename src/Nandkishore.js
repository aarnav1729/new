import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Leadership01 from "./images/lead_07.webp";
import { Leaderbtn } from "./Leaderbtn";

export const Nandkishore = () => {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://premierenergies.com/nand-kishore-khandelwal"
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
                      NAND KISHORE KHANDELWAL
                    </h1>
                    <span
                      data-aos="fade-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Group Chief Financial Officer
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
                      <img src={Leadership01} alt="img" />
                    </div>
                    <p
                      data-aos="fade-right"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Nand Kishore is a Chartered Accountant with over three
                      decades of experience in multiple industrial sectors like
                      Agro Processing, FMCG, Extrusion, Iron & Steel Castings,
                      and Engineering, in diverse domains like Finance,
                      Commercial, Operations, IT, HR & Management. He is
                      recognised as “Top 10 CFOs 2022, India” by CEO Insights
                      and “Asia’s 100 Power Leaders in Finance 2022” by White
                      Page International.
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