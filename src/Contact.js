import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./images/contact_us.jpg";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";
import Gravience from "./components/Gravience";
import ContactFrom from "./components/ContactFrom";

export const Contact = () => {
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
          content="Contact Premier Energies - Solar Cell & Solar Module Requirements - Call@ +91-9490167793 - Email # grievance@premierenergies.com"
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
          content="Contact Premier Energies - Solar Cell & Solar Module Requirements - Call@ +91-9490167793 - Email # grievance@premierenergies.com"
        ></meta>
      </Helmet>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={Banner} alt="img"/>
          <div className="container">
            <div className="homcolft position-absolute position-right left">
              <span className="colorborder">
                <em></em>
              </span>
              <h2
                data-aos="fade-down"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-once="true"
                data-aos-duration="500"
              >
                Go Green, Save Green
              </h2>
            </div>
          </div>
        </div>
      </section>
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
              <ContactFrom/>
              <div className="contactbox ">
                <h2>Premier Energies Limited</h2>
                <div className="premierenergies gap-80  ">
                  <div className="address">
                    <h4>Call </h4>
                    <ul>
                      <li>
                        <a href="tel:914027744415">+91-40-2774 4415</a>
                      </li>
                      <li>
                        <a href="tel:914027744416">+91-40-27744416</a>
                      </li>
                      <li>
                        <a href="tel:919490167793">+91-9490167793</a>
                      </li>
                      {/* <li>
                        <a href="tel:914027744417">+91-40-27744417</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="address social socialdesp  ">
                    <h4>Email</h4>
                    <ul class="email">
                      <li>
                        <span>
                          <strong>For any media &amp; general queries</strong>
                          <a href="mailto:hello@premierenergies.com">
                            hello@premierenergies.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>For Sales &amp; Marketing queries</strong>
                          <a href="mailto:sales@premierenergies.com">
                            sales@premierenergies.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>For Career Opportunities</strong>
                          <a href="mailto:hr@premierenergies.com">
                            hr@premierenergies.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>For Investor Relations</strong>
                          <a href="mailto: investors@premierenergies.com">
                            investors@premierenergies.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>For Legal queries</strong>
                          <a href="mailto: secretarial@premierenergies.com">
                            secretarial@premierenergies.com
                          </a>
                          <a href="tel:09030994222">+91-9030994222</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="premierenergies justify-content-start ">
                  <h3>India</h3>
                  <div className="address ">
                    <h4>Premier Energies Limited</h4>
                    <p>
                      <strong>Corporate Office</strong> 8<sup>th</sup> floor,
                      Orbit Tower 1, Sy. No. 83/1, Hyderabad Knowledge City,
                      TSIIC, Raidurgam, Hyderabad- 500081, Telangana, India.
                    </p>
                    <p>GST – 36AABCP8800D1ZP</p>
                    <p>
                      <strong>Factory Address</strong> Sy.No.53, Annaram
                      Village, Gummadidala – Mandal, Sangareddy District –
                      502313, Telangana, India.
                    </p>
                  </div>
                  <div className="address">
                    <h4>
                      PEPPL - Premier Energies Photovoltaic Private Limited
                    </h4>
                    <p>
                      Plot No. 8/B/1&2, E-City, (Fab City), Maheshwaram Mandal,
                      Raviryala Village, Ranga Reddy District, 501359,
                      Telangana, India
                    </p>
                  </div>
                  <div className="address">
                    <h4>
                      PEIPL - Premier Energies International Private Limited
                    </h4>
                    <p>
                      Plot No 8/B/1 and 8/B/2, E city, Raviryala Village,
                      Maheshwaram Dispensary, Maheshwaram, Rangareddy,
                      Telangana, 501359.
                    </p>
                  </div>
                  <div className="address">
                    <h4>
                      PEGPL - Premier Energies Global Environment Private
                      Limited
                    </h4>
                    <p>
                      Plot No S-95, S-100, S-101, S-102, S-103, S-104,
                      Maheshwaram mandal, Srinagar Village, Raviryal Industrial
                      Area, FAB city, Rangareddy, Telangana, 501359.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Gravience />
      <Footer />
    </>
  );
};