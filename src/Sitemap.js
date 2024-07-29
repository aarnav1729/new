import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { NavLink } from "react-router-dom";
import Arrow from "./images/sitemaparrow.png";

export const Sitemap = () => {
  return (
    <>
      <div className="whitebg">
        <Header />
      </div>
      <section id="stemap">
        <div className="container">
          <div className="web-container">
            <div className="stemap">
              <div className="title centerheading">
                <div className="centerit">
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
                    Sitemap
                  </h2>
                </div>
              </div>
              <div className="smap">
                <div className="sitembox">
                  <ul>
                    <li className="stxmn">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="stxmn">
                      <NavLink to="/about-premier-energies">About Us</NavLink>
                      <ul className="stxbdr">
                        <li className="stxmns">
                          <a href="https://premierenergies.com/about-premier-energies#overview">
                            <img src={Arrow} alt="arrow"/>
                            Overview
                          </a>
                        </li>
                        <li className="stxmns">
                          <a href="https://premierenergies.com/about-premier-energies#infrastructure">
                            <img src={Arrow} alt="arrow" />
                            Infrastructure
                          </a>
                        </li>
                        <li className="stxmns">
                          <a href="https://premierenergies.com/about-premier-energies#our-ethos">
                            <img src={Arrow} alt="arrow"/>
                            Ethos
                          </a>
                        </li>
                        <li className="stxmns">
                          <a href="https://premierenergies.com/about-premier-energies#our-journey">
                            <img src={Arrow} alt="arrow"/>
                            Journey
                          </a>
                        </li>
                        <li className="stxmns">
                          <a href="https://premierenergies.com/about-premier-energies#our-leadership">
                            <img src={Arrow} alt="arrow"/>
                            Leadership
                          </a>
                        </li>
                        <li className="stxmns">
                          <li>
                            <a href="https://premierenergies.com/about-premier-energies#awards-recognitions">
                              <img src={Arrow} alt="arrow"/>
                              Awards & Recognitions
                            </a>
                          </li>
                        </li>
                      </ul>
                    </li>
                  </ul>{" "}
                </div>
                <div className="sitembox">
                  <ul>
                    <li className="stxmn">
                      <NavLink to="/products/solar-cell">Solar Cell</NavLink>
                    </li>
                    <li className="stxmn">
                      <NavLink to="/products/solar-module">
                        Solar Module
                      </NavLink>
                    </li>
                    <li className="stxmn">
                      <NavLink to="/our-services">EPC</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="sitembox">
                  <ul>
                    <li className="stxmn">
                      <NavLink to="/sustainbility">Sustainbility</NavLink>
                    </li>
                    <li className="stxmn">
                      <NavLink to="/contact-us">Contact us</NavLink>
                    </li>
                    <li className="stxmn">
                      <NavLink to="/career">Career</NavLink>
                    </li>
                    <li className="stxmn">
                      <NavLink to="/under-construction">Newsroom</NavLink>
                    </li>
                  </ul>
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