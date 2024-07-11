import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Banner from "./images/about-banner.jpg";
import { Link } from "react-scroll";
import Slider from "react-slick";
import Cell01 from "./images/cell01.jpg";
import Cell02 from "./images/cell02.jpg";
import Cell03 from "./images/cell03.jpg";
import Module01 from "./images/module01.jpg";
import Module02 from "./images/module02.jpg";
import Module03 from "./images/module03.jpg";
import Module04 from "./images/module04.png";
import Gallery01 from "./images/gallery01.jpg";
import Gallery02 from "./images/gallery02.jpg";
import Gallery03 from "./images/gallery03.jpg";
import Gallery04 from "./images/gallery04.jpg";
import Gallery05 from "./images/gallery05.jpg";
import PEVEL from "./images/PEVEL.jpg";
import Awards01 from "./images/awards01.jpg";
import Awards02 from "./images/awards02.jpg";
import Awards03 from "./images/awards03.jpg";
import Awards04 from "./images/awards04.jpg";
import Zero01 from "./images/zero-liquid-01.jpg";
import Zero02 from "./images/zero-liquid-02.jpg";
import Solarimg from "./images/hand-video2.mp4";
import JourneySvg from "./components/Svg/JourneySvg";
import { NavLink } from "react-router-dom";
import asp from "./images/asp.mp4";
import award01 from "./images/award_01.webp";
import award02 from "./images/award_02.webp";
import award03 from "./images/award_03.webp";
import award04 from "./images/award_04.webp";
import award05 from "./images/award_05.webp";
import award06 from "./images/award_06.webp";
import award07 from "./images/award_07_new.webp";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Helmet } from "react-helmet";
import axios from "axios";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import cert12 from "./certifications/2024KiwaPVELTP.pdf";

export const Home = () => {
  const [state, setState] = useState({
    wf1: 1,
    wf2: 1,
    wf3: 1,
    wf4: 1,
    wf5: 1,
    wf6: 1,
    wf7: 1,
    wf8: 1,
  });
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
  var settings2 = {
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
  var settings3 = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    speed: 600,
    arrows: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
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
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  const [tabs, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 700) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const [leadershipData, setLeadershipData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.premierenergies.com/api/leadership.php"
        );
        setLeadershipData(response.data);
      } catch (error) {}
    };

    fetchData();
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollRef = useRef(0);
  const wrapperWidthRef = useRef(0);
  const svgWidthRef = useRef(0);

  useEffect(() => {
    const wrapper = document.querySelector(".journey_wrapper");
    const svg = document.querySelector(".journey_wrapper svg");

    if (wrapper && svg) {
      const wrapperWidth = wrapper.clientWidth;
      const svgWidth = svg.clientWidth;
      const max = svgWidth - wrapperWidth;

      wrapperWidthRef.current = wrapperWidth;
      svgWidthRef.current = svgWidth;
      maxScrollRef.current = Math.max(0, max);
    }
  }, [scrollPosition]);

  const handleMoveLeft = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - 150, 0));
  };

  const handleMoveRight = () => {
    setScrollPosition((prevPosition) =>
      Math.min(prevPosition + 150, maxScrollRef.current)
    );
  };
  return (
    <>
      <Helmet>
        <title>
          India's leading manufacturer and supplier of PV Solar Cells and
          Modules
        </title>
        <meta
          name="description"
          content="Premier Energies is India's second largest fully integrated Solar Cell and Solar Module manufacturer. It is LEED Gold Certified Solar Manufacturing Company."
        />
        <link
          rel="canonical"
          href="https://premierenergies.com/about-premier-energies"
        />
        <meta
          property="og:url"
          content="https://premierenergies.com/about-premier-energies"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="India's leading manufacturer and supplier of PV Solar Cells and Modules"
        />
        <meta
          name="og:description"
          content="Premier Energies is India's second largest fully integrated Solar Cell and Solar Module manufacturer. It is LEED Gold Certified Solar Manufacturing Company."
        ></meta>
      </Helmet>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={Banner} alt="award" />
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
                Transition to a brighter tomorrow
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id="scrollingsection" className="pb-0">
        <div className="scrollingsection">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="tabmain">
                  <div className={tabs ? "tabs fixed" : "tabs"}>
                    <ul>
                      <li>
                        <Link
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          duration={500}
                          to="overview"
                        >
                          OVERVIEW
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          duration={500}
                          to="infrastructure"
                        >
                          INFRASTRUCTURE
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          duration={500}
                          to="our-ethos"
                        >
                          {" "}
                          Ethos
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          duration={500}
                          to="our-journey"
                        >
                          {" "}
                          Journey
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          duration={500}
                          to="our-leadership"
                        >
                          {" "}
                          Leadership
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          duration={500}
                          to="awards-recognitions"
                        >
                          {" "}
                          Awards & Recognitions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="overview">
            <div className="container">
              <div className="row">
                <div className="web-conainer">
                  <div className="overview">
                    <div className="largecircleleft"></div>
                    <div className="midcircleright down"></div>
                    <div className="midcircleright"></div>
                    <div className="smallcirclerightdark"></div>
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
                          About Us
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
                      FOR A FUTURE TOMORROW,
                      <br />
                      LET’S GO SOLAR, TODAY.
                    </h3>

                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-6">
                          <p
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            Established in 1995, Premier Energies has risen to
                            become India's second-largest integrated solar cell
                            and solar module manufacturing company as of March
                            31, 2023 (Report from F&S). Backed by GEF Capital, a
                            Washington DC based Private Equity Investor, Premier
                            Energies is at the forefront of innovative
                            technology, crafting photovoltaic products and
                            solutions.
                          </p>

                          <p
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            Premier Energies' cutting-edge manufacturing units
                            are spread across three locations in Telangana,
                            totaling an aggregate land area of over 44.91 acres.
                            As of March 31st, 2024, the company boasts an annual
                            production capacity of 2 GW for solar cells and 3.36
                            GW for solar modules. Additionally, another Topcon
                            Cell line and module line, covering a combined land
                            area of 75 acres, are currently under development.
                            These new facilities are projected to have Cell and
                            Module Facility.
                          </p>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            Equipped with fully automated mono perc cell line
                            with an annual production capacity of 2 GW, along
                            with module lines capable of producing 3.36 GW,
                            Premier Energies manufactures solar cells of M10
                            wafer size, achieving an average cell efficiency of
                            23.2%.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            Furthermore, in line with technological
                            advancements, Premier Energies is introducing a new
                            TOPCon cell manufacturing line in the Fiscal Year
                            2024-25.
                          </p>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            Premier Energies Photovoltaic Pvt Ltd facility spans
                            25 acres and is a LEED Gold Certified manufacturing
                            facility.
                          </p>

                          <p
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            Our solar modules are also subjected to reliability
                            testing by PVEL to ensure that they meet
                            international quality standards and performance
                            benchmarks. 12 of our modules were recognized as
                            “top performers” in the 2023 Module Reliability
                            Scorecard released by PVEL, an annual assessment of
                            solar modules from manufacturers globally.
                          </p>
                          <p>
                            While making earth a great place to live, Premier
                            Energies also provides its employees a great
                            environment, and has been certified 'GREAT PLACE TO
                            WORK' a third year in a row, for 2024-2025.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="numbers pb-0">
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
                    Premier ENERGIES IN NUMBERS
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="videostn"
              data-aos="fade-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-duration="500"
            >
              <video
                loop=""
                autoplay=""
                controls=""
                muted="muted"
                webkit-playsinline=""
                playsinline=""
                className="desktop-show"
              >
                <source src={asp} type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              <video
                loop=""
                autoplay=""
                controls=""
                muted="muted"
                webkit-playsinline=""
                playsinline=""
                className="mobile-show"
              >
                <source src={asp} type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div className="numberbanner innernew">
                    <div className="container">
                      <div className="web-container">
                        <div className="count">
                          <div className="App">
                            <div className="countnum">
                              {isVisible ? (
                                <CountUp
                                  start={state.wf1 === 1 ? 1 : 2}
                                  end={2}
                                  duration={2}
                                  onEnd={() => setState({ wf1: 2 })}
                                />
                              ) : (
                                <CountUp start={1} end={2} duration={0} />
                              )}{" "}
                              GW
                              <div className="labelcont">
                                ANNUAL MANUFACTURING CAPACITY OF SOLAR CELLS
                              </div>
                            </div>
                          </div>

                          <div className="App">
                            <div className="countnum">
                              {/* {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 1.4} end={1.4} duration={2} separator=" " decimals={1}  decimal="."  onEnd={()=> setState({ workforce:1.4 })} /> : <CountUp start={1} end={1.4} duration={0} />} GW                 */}
                              3.36 GW
                              <div className="labelcont">
                                ANNUAL MANUFACTURING CAPACITY OF SOLAR MODULES
                              </div>
                            </div>
                          </div>

                          <div className="App">
                            <div className="countnum">
                              {isVisible ? (
                                <CountUp
                                  start={state.wf3 === 1 ? 1 : 1}
                                  end={1}
                                  duration={2}
                                  onEnd={() => setState({ wf3: 1 })}
                                />
                              ) : (
                                <CountUp start={1} end={15} duration={0} />
                              )}{" "}
                              GW
                              <div className="labelcont">
                                MODULE LINE UNDER CONSTRUCTION
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="count">
                          <div className="App">
                            <div className="countnum">
                              {isVisible ? (
                                <CountUp
                                  start={state.wf3 === 1 ? 1 : 1}
                                  end={1}
                                  duration={2}
                                  onEnd={() => setState({ wf3: 1 })}
                                />
                              ) : (
                                <CountUp start={1} end={15} duration={0} />
                              )}{" "}
                              GW
                              <div className="labelcont">
                                TOPCON CELL LINE UNDER CONSTRUCTION
                              </div>
                            </div>
                          </div>
                          <div className="App">
                            <div className="countnum">
                              {isVisible ? (
                                <CountUp
                                  start={state.wf5 === 1 ? 1 : 12}
                                  end={12}
                                  duration={2}
                                  onEnd={() => setState({ wf5: 12 })}
                                />
                              ) : (
                                <CountUp start={1} end={12} duration={0} />
                              )}
                              <div className="labelcont">
                                YEARS OF SOLAR EPC EXPERIENCE
                              </div>
                            </div>
                          </div>
                          <div className="App">
                            <div className="countnum">
                              266.26 MW
                              <div className="labelcont">
                                GROUND MOUNT SOLAR PROJECTS EXECUTED
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="numberDisclaimer">
                      Disclaimer: As on 31st March 2024
                    </span>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
          <div id="infrastructure">
            <div className="infrastructure abtinfra">
              <div className="largecircleleft"></div>
              <div className="midcircleright"></div>
              <div className="container">
                <div className="row">
                  <div className="web-container">
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
                          infrastructure
                        </h2>
                      </div>
                    </div>
                    <h3
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      44.91 ACRE STATE-OF-THE-ART
                      <br />
                      MANUFACTURING UNIT IN Telangana - India
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Premier Energies deploys the latest technology for all its
                      projects, be it in manufacturing or EPC. Our new
                      cutting-edge facilities in Telangana - India are testament
                      to it.
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <br />
                      Additionally, another Topcon Cell line and module line,
                      covering a combined land area of 75 acres, are currently
                      under development. These new facilities are projected to
                      have Cell and Module Facility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="infra">
                <div className="infrabox">
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
                                  Cell Manufacturing Line
                                </h2>
                              </div>
                              <p
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                <strong>
                                  Automated Mono PERC manufacturing line with
                                  average cell efficiency of 23.2% and above.
                                </strong>
                              </p>
                              <p
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                The line is equipped to handle M10 wafer size.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div
                              className="infraslider"
                              data-aos="fade-right"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            >
                              <Slider {...settings}>
                                <div>
                                  <div className="homeslider">
                                    <img src={Cell01} alt="award" />
                                  </div>
                                </div>
                                <div>
                                  <div className="homeslider">
                                    <img src={Cell03} alt="award" />
                                  </div>
                                </div>
                                <div>
                                  <div className="homeslider">
                                    <img src={Cell02} alt="award" />
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
                <div className="infrabox">
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
                                  Module Manufacturing Line
                                </h2>
                              </div>
                              <p
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                <strong>
                                  Fully automated, state-of-the-art module line
                                  for half-cut cells and bifacial modules.
                                </strong>
                              </p>
                              <p
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                The line is equipped to handle M10 wafer size.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div
                              className="infraslider"
                              data-aos="fade-left"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            >
                              <Slider {...settings}>
                                <div>
                                  <div className="homeslider">
                                    <img src={Module02} alt="award" />
                                  </div>
                                </div>
                                <div>
                                  <div className="homeslider">
                                    <img src={Module03} alt="award" />
                                  </div>
                                </div>
                                <div>
                                  <div className="homeslider">
                                    <img src={Module04} alt="award" />
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
                <div className="infrabox">
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
                                  Zero Liquid Discharge System
                                </h2>
                              </div>
                              <p
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                {/* <strong>Best-in-Class MVRE Technology</strong> */}
                              </p>
                              <p
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                Zero liquid discharge system to recycle 100% of
                                the water is used in Premier Energies
                                manufacturing processes - 91% of such water is
                                recovered for reuse while 9% is lost through
                                evaporation. This helps in achieving sustainable
                                water management practices and minimizing
                                environmental impact.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div
                              className="infraslider"
                              data-aos="fade-right"
                              data-aos-offset="100"
                              data-aos-easing="ease-in-sine"
                              data-aos-once="true"
                              data-aos-duration="500"
                            >
                              <Slider {...settings}>
                                <div>
                                  <div className="homeslider">
                                    <img src={Zero01} alt="award" />
                                  </div>
                                </div>
                                <div>
                                  <div className="homeslider">
                                    <img src={Zero02} alt="award" />
                                  </div>
                                </div>
                                <div>
                                  <div className="homeslider">
                                    <img src={Module01} alt="award" />
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
              <div className="infragallery pb-0">
                <div className="container">
                  <div className="row">
                    <Tabs
                      defaultIndex={0}
                      onSelect={(index) => console.log(index)}
                    >
                      <TabList>
                        <Tab>Gallery</Tab>
                        <Tab>Video</Tab>
                      </TabList>
                      <TabPanel>
                        <div
                          className="gallery"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <Slider {...settings2}>
                            <div>
                              <div className="homeslider">
                                <img src={Gallery01} alt="award" />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Gallery02} alt="award" />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Gallery03} alt="award" />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Gallery04} alt="award" />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Gallery05} alt="award" />
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div
                          className="gallery"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/vGE_r7K2rSc?si=TvaV2aLG-ABRYLMN"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="our-ethos">
            <div className="our-ethos">
              <div className="largecircleleft"></div>
              <div className="midcircleright down"></div>
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
                        <h2
                          data-aos="fade-down"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          Our Ethos
                        </h2>
                      </div>
                    </div>
                    <div className="mdquote text-center purpose">
                      <h3
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        Purpose
                      </h3>
                      <p>
                        One Planet. One mission. <br />
                        Let’s make it carbon-free. <br />
                        <strong>Let’s go solar.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-video">
                <video autoPlay muted>
                  <source src={Solarimg} type="video/mp4" />
                  Sorry, your browser doesn't support videos.
                </video>
              </div>
            </div>
            <div className="ethosbanner">
              <div className="container">
                <div className="row">
                  <div className="web-container">
                    <div className="col-md-12 ethoscont">
                      <div className="row">
                        <div
                          className="col-md-6"
                          data-aos="fade-left"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <h3>vision</h3>
                          <p>
                            <strong>
                              To be an organization of high admiration.
                            </strong>
                          </p>
                          <p>
                            Recognized for delivering significant value within
                            the solar energy industry.
                          </p>
                          <p>
                            While doing so, we must become an amiable company to
                            work for and also an ethical company to work with.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="value"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            <h3>VALUES</h3>
                            <ul>
                              <li>Culture of Safety</li>
                              <li>Sustainable Practices</li>
                              <li>Client Focus</li>
                              <li>Open, Honest and Clear Communication</li>
                              <li>Professional and Ethical</li>
                              <li>Regulatory Integrity</li>
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
          <div id="our-journey">
            <div className="our-journey">
              <div className="largecircleright"></div>
              <div className="midcircleleft down"></div>
              <div className="midcircleleft"></div>
              <div className="midcircleright"></div>
              <div className="smallcircleleftdark"></div>
              <div className="container">
                <div className="row">
                  <div className="web-container">
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
                          Our Journey
                        </h2>
                      </div>
                    </div>
                    <div className="infrastructure">
                      <h3
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        FROM MEGA WATT TO GIGA WATT
                      </h3>
                      <p
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        At Premier Energies, we value learning above everything
                        else. This attitude has enabled us to not only overcome
                        the numerous challenges faced along the way, but also to
                        grow at an accelerated pace by finding ethical solutions
                        and incorporating them into our endeavors.
                      </p>
                    </div>
                    <div className="journey_slider positon-relative">
                      <div
                        className="journey_wrapper"
                        style={{
                          width: "100%",
                        }}
                      >
                        <div className="Journey_svg_container">
                          <JourneySvg />
                        </div>
                      </div>
                      <span className="journeyDisclaimer">
                        Disclaimer: As on 31st March 2024
                      </span>
                      <div className="button_wrapper">
                        <button
                          className="slider_button"
                          onClick={handleMoveLeft}
                        >
                          <PiCaretLeftThin />
                        </button>
                        <button
                          className="slider_button"
                          onClick={handleMoveRight}
                        >
                          <PiCaretRightThin />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="our-leadership">
            <div className="leadership pb-0">
              <div className="largecircleleft"></div>
              <div className="midcircleleft"></div>
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
                        <h2
                          data-aos="fade-down"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          Our Leadership
                        </h2>
                      </div>
                    </div>
                    <h3
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Meet the Captains of Premier Energies
                    </h3>
                    <div className="leaderships mb-0">
                      {leadershipData.map((leader, index) => (
                        <div
                          key={index}
                          className="leadershipbox"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <div className="leadershipimg">
                            <img
                              src={leader.image}
                              alt={leader.name}
                              className={leader.classname}
                            />
                          </div>
                          <div className="leadershipcont">
                            <h2>{leader.name}</h2>
                            {leader.designation && (
                              <span>{leader.designation}</span>
                            )}
                            {leader.detail && leader.detail.length > 0 && (
                              <div className="webbtn">
                                <NavLink className="btn-4" to={leader.bioLink}>
                                  <span>Read Bio</span>
                                </NavLink>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="awards-recognitions">
            <div className="awards">
              <div className="container">
                <div className="row">
                  <div className="infragallery pb-0">
                    <div className="container">
                      <div className="row">
                        <div className="web-container">
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
                                Awards & Recognitions
                              </h2>
                            </div>
                          </div>
                          <h3 className="m-0">It’s good to be recognized</h3>
                          <p>
                            As an organisation, we are united in our purpose to
                            build a carbon-free world. In our pursuit of
                            manufacturing and operational excellence, we have
                            been bestowed with an array of awards over the
                            years, which recognize us over and again for our
                            sustainable products & services, innovation and
                            employee engagement policies.{" "}
                          </p>
                          <div className="pevel_cert">
                            <li>
                              <a
                                href={cert12}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src={PEVEL} alt="img1" />
                              </a>
                            </li>
                          </div>

                          <div
                            className="awardslogo"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                            data-aos-once="true"
                            data-aos-duration="500"
                          >
                            <div className="awardsbox">
                              <img src={award01} alt="award" />
                            </div>
                            <div className="awardsbox">
                              <img src={award02} alt="award" />
                            </div>
                            <div className="awardsbox">
                              <img src={award03} alt="award" />
                            </div>
                            <div className="awardsbox">
                              <img src={award04} alt="award" />
                            </div>
                            <div className="awardsbox">
                              <img src={award05} alt="award" />
                            </div>
                            <div className="awardsbox">
                              <img src={award07} alt="award" />
                            </div>
                            <div className="awardsbox">
                              <img src={award06} alt="award" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="gallery awards-recon"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <Slider {...settings2}>
                            <div>
                              <div className="homeslider">
                                <img src={Awards01} alt="award1" />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Awards02} alt="award" />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Awards03} alt="award" />
                              </div>
                            </div>
                            <div>
                              <div className="homeslider">
                                <img src={Awards04} alt="award" />
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
      <Footer />
    </>
  );
};
export default Home;
