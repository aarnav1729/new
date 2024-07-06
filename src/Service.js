import React from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/service-banner.jpg";
import Service01 from "./images/service01.jpg";
import Service02 from "./images/service02.jpg";
import Service03 from "./images/service03.jpg";
import Diverse from "./images/canal-top.jpg";
import Diverse1 from "./images/floating.jpg";
import Diverse2 from "./images/asbestos.jpg";
import Diverse3 from "./images/parking.jpg";
import Project01 from "./images/project01.jpg";
import Project02 from "./images/project02.jpg";
import Project03 from "./images/project03.jpg";
import Project04 from "./images/project04.jpg";
import Project05 from "./images/project05.jpg";
import Project06 from "./images/project06.jpg";
import Project07 from "./images/project07.jpg";
import Project08 from "./images/project08.jpg";
import Project09 from "./images/project09.webp";
import Slider from "react-slick";
import { Accordion, AccordionItem } from "react-light-accordion";
import { Helmet } from "react-helmet";
var settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 600,
  arrows: true,
  autoplaySpeed: 8000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const Service = () => {
  return (
    <>
      <Helmet>
        <title>
          PV Solar Products Manufacturer, India's Leading Solar Panel Supplier
        </title>
        <meta
          name="description"
          content="Premier Energies provides end-to-end solar services and solutions to a diversified international utility, commercial and residential roof-top, EPC projects to all over the world."
        />
        <link rel="canonical" href="https://premierenergies.com/our-services" />
        <meta
          property="og:url"
          content="https://premierenergies.com/our-services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="PV Solar Products Manufacturer, India's Leading Solar Panel Supplier"
        />
        <meta
          name="og:description"
          content="Premier Energies provides end-to-end solar services and solutions to a diversified international utility, commercial and residential roof-top, EPC projects to all over the world."
        ></meta>
      </Helmet>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={Banner} />
          <div className="container">
            <div className="homcolft position-absolute position-right">
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
                YOUR SOLAR SERVICE SPECIALISTS{" "}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id="service" className="pb-0">
        <div className="infrastructure">
          <div className="largecircleleft"></div>
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
                      OUR SERVICES
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
                  FROM CONCEPTION TO EXECUTION: <br />
                  THE Premier WAY
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  Premier Energies EPC division provides end-to-end solar
                  services for ground-mounted, rooftop, floating, canal bank,
                  canal top and hybrid power generation systems.
                </p>
              </div>
            </div>
          </div>
          <div className="infra">
            {/* <div className="infrabox" id="rooftop">
              <div className="largecircleright"></div>
              <div className="smallcirclerightdark"></div>
              <div className="container">
                <div className="web-container">
                  <div className="infracenter">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="infracont">
                          <div className="infraheading">
                            <h2
                              data-aos="fade-down"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            >
                              Rooftop
                            </h2>
                          </div>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            Premier Energies' solar rooftop solutions involve
                            the installation of solar panel on rooftops, which
                            optimize space for solar power energy conversion.
                            Suitable for commercial buildings, industrial
                            complexes and residential properties, they help
                            generate long-term savings by significantly reducing
                            electricity costs.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="infraslider"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <img src={Service01} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="infrabox" id="Ground-mounted">
              <div className="largecircleleft"></div>
              <div className="smallcirclerightdarkleft"></div>
              <div className="container">
                <div className="web-container">
                  <div className="infracenter">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="infracont">
                          <div className="infraheading">
                            <h2
                              data-aos="fade-down"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            >
                              Ground Mounted
                            </h2>
                          </div>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            Premier Energies' ground mounted solar panels are
                            ideal for greater energy conversion in areas of
                            higher consumption, basis the availability of
                            necessary space. Being on the ground, the panels can
                            be pointed in the optimal direction to maximize sun
                            exposure, thereby making them an efficient and
                            cost-effective solution.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="infraslider"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <img src={Service02} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="infrabox" id="water-pump">
              <div className="largecircleright"></div>
              <div className="smallcirclerightdark"></div>
              <div className="container">
                <div className="web-container">
                  <div className="infracenter">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="infracont">
                          <div className="infraheading">
                            <h2
                              data-aos="fade-down"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            >
                              Water Pumps
                            </h2>
                          </div>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            Solar energy powered water pumps are a boon for the
                            agriculture industry, empowering farmers to do their
                            part in India's green revolution. Premier Energies'
                            integrated water-pump solar panel systems can be
                            installed at both small-scale and larger
                            agricultural fields.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="infraslider"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <img src={Service03} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="infrabox divertpro" id="diverse-projects">
              <div className="midcircleleft"></div>
              <div className="smallcirclerightdarkleft"></div>
              <div className="container">
                <div className="web-container">
                  <div className="infracenter">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="infracont">
                          <div className="infraheading">
                            <h2
                              data-aos="fade-down"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            >
                              Diverse Projects
                            </h2>
                          </div>
                          <div
                            className="paccordians"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            <Accordion atomic={true}>
                              <AccordionItem
                                title="Hybrid Solar"
                                className="accordion-item active"
                              >
                                <div className="nricont">
                                  <p>
                                    Our hybrid solar system stores solar energy
                                    as a power backup, while also being
                                    connected to the electricity grid to ensure
                                    a continuous supply of energy as and when
                                    required.{" "}
                                  </p>
                                </div>
                              </AccordionItem>

                              <AccordionItem title="Canal Top Projects">
                                <div className="nricont">
                                  <p>
                                    Canal Top solar projects are an ingenious
                                    solution to provide renewable energy for
                                    farming activities, without consuming
                                    agricultural land. By covering the
                                    neighboring canal with PV panels, canal-top
                                    solar plants not only generate significant
                                    amounts of energy, but also reduce water
                                    loss & provide cooling as a result of
                                    evaporation.{" "}
                                  </p>
                                </div>
                              </AccordionItem>
                              <AccordionItem title="Floating Solar System">
                                <div className="nricont">
                                  <p>
                                    Suitable for water bodies such as lakes and
                                    dams, floating solar systems consist of
                                    solar panels affixed to buoyant structures
                                    that float on the water body surface. The
                                    electricity so generated is rerouted via
                                    underwater cables to a transmission tower,
                                    thereby providing an effective energy
                                    solution made possible by combining marine
                                    and solar energy technology.{" "}
                                  </p>
                                </div>
                              </AccordionItem>
                              {/* <AccordionItem title="Asbestos Shed">
 <div className='nricont'>
 <p>Installing solar panels on the asbestos rooftops adds to the strength and structure of the roof and provides an eco-friendly and cost-effective way of producing energy.</p>
 </div>
 </AccordionItem>
 <AccordionItem title="Parking Structures">
 <div className='nricont'>
 <p>Providing the dual benefit of generating green power and protecting vehicles from the sun’s heat, our solar canopies take advantage of parking structures without the need for additional space. Parking structure solar canopy installations are ideal for malls, airports, hospitals and allied facilities with large parking areas. </p>
 </div>
 </AccordionItem>
 <AccordionItem title="Tracker Systems">
 <div className='nricont'>
 <p>Our solar tracker technology works in tandem with our ground mounted and rooftop mounted solar systems to maximize energy generation and output. Connected to the racking of the solar panels, the solar tracking equipment constantly adjusts the positioning of the panels with the movement of the sun. </p>
 </div>
 </AccordionItem> */}
                            </Accordion>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="infraslider"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <Slider {...settings}>
                            <div>
                              <div className="homeslider">
                                <img src={Diverse} />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Diverse1} />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Diverse2} />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Diverse3} />
                              </div>
                            </div>
                          </Slider>
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
