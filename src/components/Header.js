import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../images/premier-energies.png";
import Aboutmenu from "../images/aboutmenu.jpg";
import Arrow from "../images/wback-arrow.png";

export const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  const [menus, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!menus);
  };
  const [megamenu, setActive1] = useState("false");

  const handleToggle1 = () => {
    setActive1(!megamenu);
  };
  const [megamenus, setActive2] = useState("false");

  const handleToggle2 = () => {
    setActive2(!megamenus);
  };
  const [header, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const location = useLocation();
  const isDetailPage =
    location.pathname.startsWith("/investor-relations/") &&
    location.pathname !== "/investor-relations";

  return (
    <header>
      <div className={header ? "header fixed" : "header"}>
        <div className="container">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
              <div
                className="logo"
                data-aos="fade"
                data-aos-offset="200"
                data-aos-duration="600"
                data-aos-once="true"
                data-aos-easing="ease-in-sine"
              >
                <NavLink to="/">
                  <img src={Logo} alt="Premier Energies" />
                </NavLink>
              </div>
            </div>
            <div className="col-9 a-center d-flex align-items-end justify-content-end">
              <div className="navbar">
                <div className={menus ? "menus" : "menus active"}>
                  <ul className="d-flex align-items-center toplinks">
                    <li className="desktop-show">
                      <NavLink to="/" exact>
                        Home
                      </NavLink>
                    </li>
                    <li className="desktop-show">
                      <NavLink to="/about-premier-energies">About Us</NavLink>
                      <div className="submenu">
                        <div className="container">
                          <div className="submenuchild">
                            <div className="smenu">
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
                                <li>
                                  <a href="https://premierenergies.com/about-premier-energies#awards-recognitions">
                                    Awards & Recognitions
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="simg">
                              <img src={Aboutmenu} alt="Premier Product" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="desktop-show">
                      <NavLink to="/products/solar-cell">Solar Cell</NavLink>
                    </li>
                    <li className="desktop-show">
                      <NavLink to="/products/solar-module">
                        Solar Module
                      </NavLink>
                    </li>
                    <li className="desktop-show">
                      <NavLink to="/sustainbility">SUSTAINABILITY</NavLink>
                    </li>
                    <li className="desktop-show">
                      <NavLink
                        to="/investor-relations"
                        className={isDetailPage ? "investor-detail-page" : ""}
                      >
                        Investor Relations
                      </NavLink>
                    </li>
                    <li className="desktop-show">
                      <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                    
                    <li className="desktop-show">
                      <NavLink to="/solar-calculator">Solar Calculator</NavLink>
                    </li>

                    <li>
                      <button
                        onClick={handleToggle}
                        className={menus ? "hemburgur" : "hemburgur active"}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </li>
                  </ul>
                  <div className="menuslide">
                    <div className="container">
                      <div className="togmenu">
                        <ul>
                          <li>
                            <NavLink to="/certification">
                              Certifications
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/career">Career</NavLink>
                          </li>
                          <li>
                            <NavLink to="/newsroom">Newsroom</NavLink>
                          </li>
                        </ul>
                      </div>

                      <div className="mobilemene mobile-show">
                        <ul>
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li
                            onClick={handleToggle2}
                            className={
                              megamenus ? "menclicks" : "menclicks active"
                            }
                          >
                            <span>
                              About us <img src={Arrow} alt="premier arrow" />
                            </span>
                            <ul
                              className={
                                megamenus ? "megamenus" : "megamenus active"
                              }
                            >
                              <li>
                                <span className="backbtn">
                                  Back{" "}
                                  <img src={Arrow} alt="premier back arrow" />
                                </span>
                              </li>
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
                              <li>
                                <a href="https://premierenergies.com/about-premier-energies#awards-recognitions">
                                  Awards & Recognitions
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/products/solar-cell">Solar Cell</a>
                          </li>
                          <li>
                            <a href="/products/solar-module">Solar Module</a>
                          </li>
                          <li>
                            <NavLink to="/sustainbility">
                              SUSTAINABILITY
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/investor-relations">
                              Investor Relations
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/certification">
                              Certifications
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/career">Career</NavLink>
                          </li>
                          <li>
                            <NavLink to="/newsroom">Newsroom</NavLink>
                          </li>
                          <li>
                            <NavLink to="/contact-us">Contact Us</NavLink>
                          </li>
                          <li>
                            <NavLink to="/solar-calculator">Solar Calculator</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;