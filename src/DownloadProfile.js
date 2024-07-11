import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";

export const DownloadProfile = () => {
  const [grievanceform, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!grievanceform);
  };
  return (
    <>
      <Helmet>
        <title>Premier Energies | Offices Across India & North America</title>
        <meta
          name="description"
          content="Contact Premier Energies - Solar Cell & Solar Module Requirements - Call@ +91-40-2774 4415, +91-40-27744416, +91-9490167793, +91-40-27744417 - Email # grievance@premierenergies.com"
        />
        <link rel="canonical" href="https://premierenergies.com/contact-us" />
        <meta
          property="og:url"
          content="https://premierenergies.com/contact-us"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Premier Energies | Offices Across India & North America"
        />
        <meta
          name="og:description"
          content="Contact Premier Energies - Solar Cell & Solar Module Requirements - Call@ +91-40-2774 4415, +91-40-27744416, +91-9490167793, +91-40-27744417 - Email # grievance@premierenergies.com"
        ></meta>
      </Helmet>
      <div className="whitebg">
        <Header />
      </div>
      <section className="contactus pb-0">
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="title centerheading">
                <div className="centerit">
                  <span className="colorborder">
                    <em></em>
                  </span>
                  <h1
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Contact Us
                  </h1>
                </div>
              </div>
              <form>
                <ul
                  className="form d-flex flex-wrap justify-content-between"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <li>
                    <a
                      href="https://www.premierenergies.com/static/media/Premier_Energies_Brochure_International_Market.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn-4">
                        <span>Download Profile</span>
                      </button>
                    </a>
                  </li>
                </ul>
              </form>
              <div className="contactbox ">
                <div className="premierenergies justify-content-start ">
                  <h3>Contact Us</h3>
                  <div className="address ">
                    <h4>Toronto, North America</h4>
                    <p>
                      <strong>SRINI ADAPA</strong>
                    </p>
                    <p>
                      <strong>CHIEF GROWTH OFFICER</strong>
                    </p>
                    <p>
                      <strong>
                        <a href="tel:+12898852676">M: +1 (289) 885-2676</a>
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <a href="mailto:srini@premierenergies.com">
                          E: srini@premierenergies.com
                        </a>
                      </strong>
                    </p>
                  </div>
                  <div className="address ">
                    <h4>Hyderabad, India</h4>
                    <p>
                      <strong>SHASHIKANTH</strong>
                    </p>
                    <p>
                      <strong>SENIOR MANAGER - INTERNATIONAL SALES</strong>
                    </p>
                    <p>
                      <strong>
                        <a href="tel:+919916936884">M: +91 9916936884</a>
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <a href="mailto:shashikanth.r@premierenergies.com">
                          E: shashikanth.r@premierenergies.com
                        </a>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};