import React, { useState } from "react";
import Follow from "../images/follow.png";
import Call from "../images/call.png";
import Email from "../images/email.png";
import ftrlogo from "../images/ftrlogo.png";
import Linkedin from "../images/linkedin.png";
import Twitter from "../images/twitter.png";
import Facebook from "../images/facebook.png";
import Youtube from "../images/youtube.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const [showAddress1, setShowAddress1] = useState(true);
  const [showAddress2, setShowAddress2] = useState(false);
  const [showAddress3, setShowAddress3] = useState(false);
  const [showAddress4, setShowAddress4] = useState(false);

  const toggleAddress1 = () => setShowAddress1(!showAddress1);
  const toggleAddress2 = () => setShowAddress2(!showAddress2);
  const toggleAddress3 = () => setShowAddress3(!showAddress3);
  const toggleAddress4 = () => setShowAddress4(!showAddress4);

  return (
    <>
      <footer className="pb-0 downloadDataSheets">
        <div
          className="footer"
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div className="container">
            <div className="row">
              <div className="footerrow">
                <div className="ftrlogo">
                  <img src={ftrlogo} alt="premier energies" />
                </div>
                <div className="ftrdescp">
                  <div className="sftrrow">
                    {/* <div className="social">
                      <div className="socialicon">
                        <img src={Follow} alt="premier social media" />
                      </div>
                      <div className="socialdesp">
                        <ul className="socialmedia">
                          <li>
                            <a
                              href="https://www.linkedin.com/company/premierenergies/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Linkedin} alt="premier linkedin" />
                              Linkedin
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/PremierEnergies/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Twitter} alt="premier twitter" />
                              Twitter
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/premierenergies/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Facebook} alt="premier facebook" />
                              Facebook
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/channel/UCCeUifwpZ_OTqqggsw1notA"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Youtube} alt="premier youtube" />
                              Youtube
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="social">
                      <div className="socialicon">
                        <img src={Call} alt="premier call" />
                      </div>
                      <div className="socialdesp">
                        <h5>Call</h5>
                        <ul>
                          <li>
                            <a href="tel:04027744415">+91-40-2774 4415</a>,
                          </li>
                          <li>
                            <a href="tel:04027744416">+91-40-27744416</a>,
                          </li>
                          <li>
                            <a href="tel:09490167793">+91-9490167793</a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    <div className="social">
                      <div className="socialicon">
                        <img src={Email} alt="premier email" />
                      </div>
                      <div className="socialdesp">
                        <h5>Email</h5>
                        <ul className="email">
                          <li>
                            <span>
                              <strong>For Sales Queries</strong>
                              <a href="mailto: srini@premierenergies.com">
                                srini@premierenergies.com
                              </a>
                              <br />
                              <br />
                              <br />
                              <a href="mailto:  shashikanth.r@premierenergies.com">
                                shashikanth.r@premierenergies.com
                              </a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <strong>For Marketing Queries</strong>
                              <a href="mailto:mohit.chawla@premierenergies.com">
                                mohit.chawla@premierenergies.com
                              </a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <strong>For any media & general queries</strong>
                              <a href="mailto:hello@premierenergies.com">
                                hello@premierenergies.com
                              </a>
                            </span>
                          </li>
                          {/* <li>
                            <span>
                              <strong>For Sales & Marketing queries</strong>
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
                            <span className="d-grid">
                              <strong>For Legal queries</strong>
                              <a href="mailto: secretarial@premierenergies.com">
                                secretarial@premierenergies.com
                              </a>
                              <a href="tel:09030994222">+91-9030994222</a>
                            </span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                   
                    <div className="social full-band">
                      <div className="socialdesp">
                        <h5 className="col-12 text-center">INDIA</h5>
                        <ul className="newaddress">
                          <li>
                            <span
                              onClick={toggleAddress1}
                              style={{ cursor: "pointer" }}
                            >
                              <strong>
                                Premier Energies Limited{" "}
                                <i className="fas fa-chevron-down"></i>
                              </strong>
                              {showAddress1 && (
                                <p>
                                  <strong>Corporate Office</strong> 8
                                  <sup>th</sup> floor, Orbit Tower 1, Sy. No.
                                  83/1, Hyderabad Knowledge City, TSIIC,
                                  Raidurgam, Hyderabad- 500081, Telangana,
                                  India.
                                </p>
                              )}
                              {showAddress1 && (
                                <p>
                                  <strong>Factory Address</strong> Sy.No.53,
                                  Annaram Village, Gummadidala – Mandal,
                                  Sangareddy District – 502313, Telangana,
                                  India.
                                </p>
                              )}
                            </span>
                            <p className="cinnumber">
                              <span>CIN: U40106TG1995PLC019909</span>
                            </p>
                          </li>
                          {/* <li>
                            <span onClick={toggleAddress2} style={{ cursor: "pointer" }}>
                              <strong>
                                PEPPL - Premier Energies <br />
                                Photovoltaic Private Limited <i className="fas fa-chevron-down"></i></strong>
                              {showAddress2 && (
                                <p>
                                  Plot No. 8/B/1&2, E-City, (Fab City),
                                  Maheshwaram Mandal, Raviryala Village, Ranga
                                  Reddy District, 501359, Telangana, India.
                                </p>
                              )}
                            </span>
                          </li>
                          <li>
                            <span onClick={toggleAddress3} style={{ cursor: "pointer" }}>
                              <strong>
                                PEIPL - Premier Energies
                                <br />
                                International Private Limited <i className="fas fa-chevron-down"></i></strong>
                              {showAddress3 && (
                                <p>
                                  Plot No 8/B/1 and 8/B/2, E city, Raviryala
                                  Village, Maheshwaram Dispensary, Maheshwaram,
                                  Rangareddy, Telangana, 501359.
                                </p>
                              )}
                            </span>
                          </li>
                          <li>
                            <span onClick={toggleAddress4} style={{ cursor: "pointer" }}>
                              <strong>
                                PEGPL - Premier Energies <br /> Global
                                Environment Private Limited <i className="fas fa-chevron-down"></i></strong>
                              {showAddress4 && (
                                <p>
                                  Plot No S-95, S-100, S-101, S-102, S-103, S-104,
                                  Maheshwaram mandal, Srinagar Village, Raviryal
                                  Industrial Area, FAB city, Rangareddy,
                                  Telangana, 501359.
                                </p>
                              )}
                            </span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sftrrow justify-content-between">
                    <div className="sitemapbox">
                      <h5>
                        <NavLink to="/about-premier-energies">
                          About US{" "}
                        </NavLink>
                      </h5>
                      <ul>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#overview">
                            OVERVIEW
                          </a>
                        </li>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#infrastructure">
                            INFRASTRUCTURE
                          </a>
                        </li>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#our-ethos">
                            Ethos
                          </a>
                        </li>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#our-journey">
                            Journey
                          </a>
                        </li>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#our-leadership">
                            Leadership
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <a href="https://www.premierenergies.com/products/solar-cell">
                          Solar Cell
                        </a>
                      </h5>
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <a href="https://www.premierenergies.com/products/solar-module">
                          Solar Module
                        </a>
                      </h5>
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <NavLink to="/sustainbility">Sustainbility</NavLink>
                      </h5>
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <NavLink to="/contact-us">Contact</NavLink>
                      </h5>
                    </div>
                  </div>
                  <div className="copyrights d-flex justify-content-between col-12">
                    <ul className="pull-left">
                      <li>
                        &copy; 2024 | All Rights Reserved |{" "}
                        <NavLink to="/privacy-policy">
                          Privacy & Cookies Policy
                        </NavLink>{" "}
                        | <NavLink to="/sitemap">Sitemap</NavLink> |{" "}
                        <NavLink to="/legal-disclaimer">
                          Legal Disclaimer
                        </NavLink>{" "}
                        |{" "}
                        <NavLink to="/terms-conditions">
                          Terms & Conditions
                        </NavLink>
                      </li>
                    </ul>
                    <ul className="pull-right">
                      <li>
                        <a
                          href="https://www.triverseadvertising.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          design : triverse
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
