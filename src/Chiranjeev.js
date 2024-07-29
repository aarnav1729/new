import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Leadership01 from "./images/lead_02.webp";
import { Leaderbtn } from "./Leaderbtn";

export const Chiranjeev = () => {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://premierenergies.com/chiranjeev-singh"
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
                      Chiranjeev Singh
                    </h1>
                    <span
                      data-aos="fade-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Managing Director
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
                      Chiranjeev Singh is one of India’s 100 Most Influential
                      Solar Business Leaders and a visionary who transformed the
                      organisation from a solar enterprise to an integrated
                      renewable energy solutions provider. He has an engineering
                      degree from Osmania University, Hyderabad. He steered the
                      company from a 5 MW production capacity in 1995 to 500 MW
                      in 2018 and is now leading Premier Energies towards growth
                      by expanding the production capacity to 750 MW solar cells
                      and 1.2 GW solar modules. He is one of the founding
                      members of Premier Solar Power Tech and has set up over
                      650+ MW of EPC and 130 MW of IPP. Chiranjeev Singh serves
                      as a Director on board for over 10 companies in the Solar
                      Manufacturing and IPP space and All India Solar Industries
                      Association (AISIA) and also remains a member of the
                      Governing Council of the Indian Solar Manufacturers
                      Association (ISMA).
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