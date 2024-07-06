import React from "react";
import Follow from "../images/follow.png";
import Call from "../images/call.png";
import Email from "../images/email.png";
// import Address from '../images/location.png'
import ftrlogo from "../images/ftrlogo.png";
import Linkedin from "../images/linkedin.png";
import Twitter from "../images/twitter.png";
// import Instagram from '../images/instagram.png'
import Facebook from "../images/facebook.png";
import Youtube from "../images/youtube.png";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="pb-0">
        <div
          className="footer"
          data-aos="fade-in"
          data-aos-offset="500"
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
                    <div className="social">
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
                          {/* <li><a href='https://www.instagram.com/premier__energies/' target='_blank' rel='noreferrer'><img src={Instagram} alt='premier instagram'/>Instagram</a></li> */}
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
                          {/* <li><a href="tel:914027744417">+91-40-27744417</a></li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="social">
                      <div className="socialicon">
                        <img src={Email} alt="premier email" />
                      </div>
                      <div className="socialdesp">
                        <h5>Email</h5>
                        <ul className="email">
                          <li>
                            <span>
                              <strong>For any media & general queries</strong>
                              <a href="mailto:hello@premierenergies.com">
                                hello@premierenergies.com
                              </a>
                            </span>
                          </li>
                          <li>
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
                          <a href="mailto: secretarial@premierenergies.com">secretarial@premierenergies.com</a>
                          <a href="tel:09030994222">+91-9030994222</a>
                        </span>
                      </li>
                        </ul>
                      </div>
                    </div>
                    <div className="social full-band">
                      <div className="socialdesp">
                        <h5 className="col-12 text-center">INDIA</h5>
                        <ul className="newaddress">
                          <li>
                            <span>
                              <strong>Premier Energies Limited</strong>
                              <p>
                                <strong>Corporate Office</strong> 8<sup>th</sup>{" "}
                                floor, Orbit Tower 1, Sy. No. 83/1, Hyderabad
                                Knowledge City, TSIIC, Raidurgam, Hyderabad-
                                500081, Telangana, India.
                              </p>
                              <p>
                                <strong>Factory Address</strong> Sy.No.53,
                                Annaram Village, Gummadidala – Mandal,
                                Sangareddy District – 502313, Telangana, India.
                              </p>
                            </span>
                          </li>
                          <li>
                            <span>
                              <strong>
                                PEPPL - Premier Energies <br />
                                Photovoltaic Private Limited
                              </strong>
                              <p>
                                Plot No. 8/B/1&2, E-City, (Fab City),
                                Maheshwaram Mandal, Raviryala Village, Ranga
                                Reddy District, 501359, Telangana, India.
                              </p>
                            </span>
                          </li>
                          <li>
                            <span>
                              <strong>
                                PEIPL - Premier Energies
                                <br />
                                International Private Limited
                              </strong>
                              <p>
                                Plot No 8/B/1 and 8/B/2, E city, Raviryala
                                Village, Maheshwaram Dispensary, Maheshwaram,
                                Rangareddy, Telangana, 501359.
                              </p>
                            </span>
                          </li>
                          <li>
                            <span>
                              <strong>
                                PEGPL - Premier Energies <br /> Global
                                Environment Private Limited
                              </strong>
                              <p>
                                Plot No S-95, S-100, S-101, S-102, S-103, S-104,
                                Maheshwaram mandal, Srinagar Village, Raviryal
                                Industrial Area, FAB city, Rangareddy,
                                Telangana, 501359.
                              </p>
                            </span>
                          </li>
                        </ul>
                        <p className="cinnumber"><span>CIN: U40106TG1995PLC019909</span></p>
                      </div>
                    </div>
                    {/* <div className='social full-band'>
                  <div className='socialdesp'>
                  <h5 className='col-12 text-center'>North America</h5>
                    <ul className='newaddress'>
                      <li><span><strong>Premier Energies Limited</strong>
                      <p>Mayfair Road, Oakville, Greater Toronto Area, Canada</p></span></li>
                    </ul>
                  </div>
                </div> */}
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
                      {/* <ul>
                    <li><a href='https://premierenergies.com/products/solar-cell#types'>Types of Solar Cell</a></li>
                    <li><a href='https://premierenergies.com/products/solar-cell#certifications'>CERTIFICATIONS</a></li>
                    </ul> */}
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <a href="https://www.premierenergies.com/products/solar-module">
                          Solar Module
                        </a>
                      </h5>
                      {/* <ul>
                    <li><a href='https://premierenergies.com/products/solar-module#types'>Types of Solar Module</a></li>
                    <li><a href='https://premierenergies.com/products/solar-module#coreadvantage'>CORE ADVANTAGES</a></li>
                    <li><a href='https://premierenergies.com/products/solar-module#certifications'>CERTIFICATIONS</a></li>
                    </ul> */}
                    </div>
                    {/* <div className="sitemapbox">
                      <h5>
                        <NavLink to="/our-services">EPC</NavLink>
                      </h5>
                      
                    </div> */}
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
                      {/* <li>*1.6 GW under construction</li> */}
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
