import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/project-banner.jpg";
import Project01 from "./images/project01.jpg";
import Project02 from "./images/project02.jpg";
import Project03 from "./images/project03.jpg";
import Project04 from "./images/project04.jpg";
import Project05 from "./images/project05.jpg";
import Project06 from "./images/project06.jpg";
import Project07 from "./images/project07.jpg";
import Project08 from "./images/project08.jpg";
import Project09 from "./images/project09.webp";

export const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Utility Scale EPC Projects in India By Premier Energies</title>
        <meta
          name="description"
          content="Premier Energies is taking a stride towards supporting India's sustainability objectives by undertaking one of the largest solar EPC projects in Bangladesh from Rural Power Company Ltd."
        />
        <link rel="canonical" href="https://premierenergies.com/our-projects" />
        <meta
          property="og:url"
          content="https://premierenergies.com/our-projects"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Utility Scale EPC Projects in India By Premier Energies"
        />
        <meta
          name="og:description"
          content="Premier Energies is taking a stride towards supporting India's sustainability objectives by undertaking one of the largest solar EPC projects in Bangladesh from Rural Power Company Ltd."
        ></meta>
      </Helmet>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={Banner} />
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
                We promise. We deliver.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="projects">
          <div className="largecircleleft"></div>
          <div className="largecircleright"></div>
          <div className="midcircleright"></div>
          <div className="smallcirclerightdark"></div>
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
                      Our projects
                    </h1>
                  </div>
                </div>
                <h3
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  Amazing projects define <br /> our amazing decade!
                </h3>
                <div className="projectsimg">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-8"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project01} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>15 MW</h4>
                            <p>DEHRADUN UTTARAKHAND</p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project02} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>11.5 MW</h4>
                            <p>RAYACHOTI, KADAPA ANDHRA PRADESH</p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project03} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>10 MW</h4>
                            <p>TALAMANDLA, MEDAK TELANGANA</p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project04} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>8 MW</h4>
                            <p>CHEGUNTA, MEDAK TELANGANA</p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project05} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>8 MW</h4>
                            <p>RAIKOD, ZAHEERABADTELANGANA</p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project06} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>8 MW</h4>
                            <p>DIGWAL, RANGA REDDY TELANGA</p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project07} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>1 MW</h4>
                            <p>DEHRADUN UTTARAKHAND</p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project08} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>205 KW</h4>
                            <p>HYUNDAI SHOWROOM TALWAR, TELANGANA</p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <div className="projectbox">
                        <img src={Project09} />
                        <div className="projecttitle">
                          <div className="projleft">
                            <h4>70 kW AC</h4>
                            <p>
                              THE AHILYA FORT HERITAGE HOTEL, MAHESHWAR, MADHYA
                              PRADESH
                            </p>
                          </div>
                          <div className="projright">{/* <h4>2016</h4> */}</div>
                        </div>
                      </div>
                    </div>
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
