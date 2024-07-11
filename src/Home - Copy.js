import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Slider from "react-slick";
import Banner01 from "./images/banner01.jpg";
import Banner02 from "./images/banner02.jpg";
import Banner03 from "./images/banner03.jpg";
import Mbanner01 from "./images/mbanner01.jpg";
import Mbanner02 from "./images/mbanner02.jpg";
import Mbanner03 from "./images/mbanner03.jpg";
import aboutbanner01 from "./images/aboutbanner01.jpg";
import aboutbanner02 from "./images/aboutbanner02.jpg";
import aboutbanner03 from "./images/aboutbanner03.jpg";
import { Numbers } from "./Number";
import Solarcell from "./images/solar-cell.jpg";
import Solarmodule from "./images/solar-module.jpg";
import Epcimg from "./images/epc-solution.jpg";
import Diverse from "./images/diverse-project.jpg";
import Rooftop from "./images/roof-top.jpg";
import Ground from "./images/ground-mounted.jpg";
import Water from "./images/water-pump.jpg";
import Nature from "./images/solar-video.gif";
import Premiervideo from "./images/premier-video.mp4";
import Mpremiervideo from "./images/mpremier-video.mp4";
import Leed from "./images/Leed-certificate.jpg";
import Mleed from "./images/mLeed-certificate.jpg";
import { NavLink } from "react-router-dom";

export const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: false,
    Default: true,
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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    autoplay: true,
    speed: 600,
    arrows: false,
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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    autoplay: true,
    speed: 600,
    arrows: false,
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
  return (
    <>
      <Header />
      <div className="jslider">
        <div className="row">
          <Slider {...settings}>
            <div>
              <div className="homeslider slide01">
                <div className="homcolrt">
                  <img src={Banner01} className="desktop-show" alt="img"/>
                  <img src={Mbanner01} className="mobile-show" alt="img"/>
                </div>
                <div className="homcolft position-absolute">
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
                    For a Future Tomorrow, <br />
                    Let's go Solar Today.
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="homeslider slide02">
                <div className="homcolrt">
                  <img src={Banner02} className="desktop-show" alt="img"/>
                  <img src={Mbanner02} className="mobile-show" alt="img"/>
                </div>
                <div className="homcolft position-absolute">
                  <span className="colorborder">
                    <em></em>
                  </span>
                  <h2>LEADING EDGE TECHNOLOGY AT WORK</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="homeslider slide03">
                <div className="homcolrt">
                  <img src={Banner03} className="desktop-show" alt="img"/>
                  <img src={Mbanner03} className="mobile-show" alt="img"/>
                </div>
                <div className="homcolft position-absolute">
                  <span className="colorborder">
                    <em></em>
                  </span>
                  <h2>FROM NATURE. FOR NATURE.</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="homeslider slide001">
                <div className="homcolrt">
                  <img src={Leed} className="desktop-show" alt="img"/>
                  <img src={Mleed} className="mobile-show" alt="img"/>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <section id="aboutus">
        <div
          className="aboutus"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="smallcirclerightdark"></div>
          <div className="midcircleleft"></div>
          <div className="midcircleright"></div>
          <div className="largecircleleft"></div>
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="aboutstn mb-0">
                  <div className="aboutcont">
                    <div className="title">
                      <span className="colorborder">
                        <em></em>
                      </span>
                      <h2>About Us</h2>
                    </div>
                    <div className="aboutconsts">
                      <h1>
                        <span>OFFERING</span>
                        <span>SUSTAINABLE ENERGY</span>
                        <span>SOLUTIONS FOR</span>
                        <span>OVER 25 YEARS</span>
                      </h1>
                      <p>
                        Premier Energies is the largest integrated solar cell
                        and module manufacturer in Southern India and the second
                        largest in India with 25+ years of influential presence
                        in the solar industry. Premier Energies is known and
                        admired for its commitment to creating sustainable
                        energy solutions and building a better tomorrow for the
                        planet and its inhabitants.
                      </p>
                      <NavLink className="btn-4" to="/about-premier-energies">
                        <span>Read More</span>
                      </NavLink>
                    </div>
                  </div>
                  <div className="aboutslider">
                    <Slider {...settings2}>
                      <div>
                        <div className="homeslider slide01">
                          <img src={aboutbanner01} alt="img"/>
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide02">
                          <img src={aboutbanner02} alt="img"/>
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide03">
                          <img src={aboutbanner03} alt="img"/>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="news">
        <div className="news">
          <div className="container">
            <div className="row">
              <div className="newslider">
                <div className="powerplant">
                  <h4>News</h4>
                  <Slider {...settings3}>
                    <div>
                      <div className="newscontent">
                        <h5>Gold-Rated under LEED by USGBC</h5>
                        <p>
                          Premier Energies has become the first LEED Gold-rated
                          solar cell and module manufacturing facility in India.
                          The company has been conferred with Gold rating under
                          the LEED v4 Building Design and Construction: New
                          Construction and Major Renovations by the US Green
                          Building Council (USGBC).
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="newscontent">
                        <h5>Great Place to Work</h5>
                        <p>
                          Certified by Great Place to Work, Premier Energies is
                          building and sustaining a high-trust, high-performance
                          culture where each employee feels valued,
                          accomplished, and engaged.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="newscontent">
                        <h5>Tie-up with Azure Power</h5>
                        <p>
                          Premier Energies has executed a module supply
                          agreement with Azure Power for supply of modules upto
                          600 MW per year for the next four years.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="numbers" className="p-0 homemanage">
        <div className="numbers pb-0">
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
                      Premier ENERGIES IN NUMBERS
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="videostn"
          data-aos="fade-in"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <video autoPlay muted loop className="desktop-show">
            <source src={Premiervideo} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
          <video autoPlay muted loop className="mobile-show">
            <source src={Mpremiervideo} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
          <Numbers />
        </div>
      </section>
      <section id="products">
        <div className="products">
          <div className="midcircleleft"></div>
          <div className="smallcirclerightdarkleft"></div>
          <div className="smallcirclerightdark"></div>
          <div className="midcircleleft"></div>
          <div className="largecircleright"></div>
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
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Products
                    </h2>
                  </div>
                </div>
                <h3
                  data-aos="fade-up"
                  data-aos-offset="500"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  Turning sunlight into energy
                </h3>
                <div className="productsbox">
                  <div
                    className="productcont"
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="producthimg">
                      <img src={Solarcell} alt="img"/>
                    </div>
                    <h4>SOLAR CELL</h4>
                    <p>
                      We manufacture Mono PERC Cells with a conversion
                      efficiency of upto 23.2%.
                    </p>
                    <div className="webbtn">
                      <NavLink
                        className="btn-4"
                        to="/solar-cell"
                        data-aos="fade-up"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        <span>Read More</span>
                      </NavLink>
                    </div>
                  </div>
                  <div
                    className="productcont"
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="producthimg">
                      <img src={Solarmodule} alt="img"/>
                    </div>
                    <h4>SOLAR MODULE</h4>
                    <p>
                      Our polycrystalline and Mono PERC solar modules ranging
                      from 60-144 solar cells, serves an efficiency of upto 22%.
                    </p>
                    <div className="webbtn">
                      <NavLink
                        className="btn-4"
                        to="/solar-module"
                        data-aos="fade-up"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        <span>Read More</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="epc-solution">
        <div className="epc-solution">
          <div className="smallcirclerightdarkleft"></div>
          <div className="midcircleleft"></div>
          <div className="midcircleright"></div>
          <div className="largecircleleft"></div>
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="epcrow">
                  <div
                    className="epc-img"
                    data-aos="fade-in"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                  >
                    <img src={Epcimg} alt="img"/>
                  </div>
                  <div className="epc-cont">
                    <div className="title">
                      <span className="colorborder">
                        <em></em>
                      </span>
                      <h2
                        data-aos="fade-down"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        EPC Solution
                      </h2>
                    </div>
                    <h3
                      data-aos="fade-up"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      FROM CONCEPTION TO EXECUTION
                    </h3>
                    <p
                      data-aos="fade-in"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                    >
                      Premier Energies has commissioned over 500 MW of solar
                      power plants. Our EPC division has commissioned
                      ground-mounted, rooftop, floating, canal bank, canal top
                      and hybrid power generation systems.
                    </p>
                    <div className="productstn">
                      <div
                        className="proimg"
                        data-aos="fade-left"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                      >
                        <a href="http://premier.triverseadvertising.com/our-services#rooftop">
                          <img src={Rooftop} alt="img"/>
                          <h4>Rooftop</h4>
                        </a>
                      </div>
                      <div
                        className="proimg"
                        data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                      >
                        <a href="http://premier.triverseadvertising.com/our-services#ground-mounted">
                          <img src={Ground} alt="img"/>
                          <h4>Ground Mounted</h4>
                        </a>
                      </div>
                      <div
                        className="proimg"
                        data-aos="fade-left"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                      >
                        <a href="http://premier.triverseadvertising.com/our-services#water-pumps">
                          <img src={Water} alt="img"/>
                          <h4>Water Pumps</h4>
                        </a>
                      </div>
                      <div
                        className="proimg"
                        data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                      >
                        <a href="http://premier.triverseadvertising.com/our-services#diverse-projects">
                          <img src={Diverse} alt="img"/>
                          <h4>Diverse Projects</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ownpower">
        <div className="ownpower">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="powerplant">
                  <h4>Own Power Plant</h4>
                  <p
                    data-aos="fade-in"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Independent Power Producer - Premier Energies owns and
                    operates more than 28 MW solar power plants across India.
                    These plants are monitored and maintained by an in-house O&M
                    team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="technology">
        <div className="technology">
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
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      TECHNOLOGY
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="technologybanner">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <h3
                    data-aos="fade-up"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    Cutting edge technology at <br />
                    E-City, Hyderabad
                  </h3>
                  <div className="quote">
                    <div
                      className="quotebox"
                      data-aos="fade-left"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <h4>Industry's best</h4>
                      <p>
                        automated mono PERC manufacturing line with cell
                        efficiency of 23.2%
                      </p>
                    </div>
                    <div
                      className="quotebox"
                      data-aos="fade-down"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <h4>Fully automated,</h4>
                      <p>
                        state of the art Module line is equipped to handle half
                        cut cells and bifacial modules.
                      </p>
                    </div>
                    <div
                      className="quotebox"
                      data-aos="fade-right"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <h4>Zero Liquid Discharge System</h4>
                      <p>
                        where processed water is treated, recycled and reused
                        completely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sustainbility">
        <div className="sustainbility">
          <div className="midcircleleft"></div>
          <div className="smallcircleright"></div>
          <div className="smallcircleleft"></div>
          <div className="midcircleleft"></div>
          <div className="midcircleright"></div>
          <div className="largecircleleft"></div>
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="sustainbox">
                  <div className="sustainleft">
                    <div className="title">
                      <span className="colorborder">
                        <em></em>
                      </span>
                      <h2
                        data-aos="fade-down"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        SUSTAINABILITY
                      </h2>
                    </div>
                    <h3
                      data-aos="fade-up"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      From Nature. FOR Nature.
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Sustainability as a priority is an integral part of our
                      organization. Our goal is to provide quality products and
                      energy-efficient solutions to power new possibilities for
                      the people and the planet. We are evolving every day to
                      make sustainable progress and create a new tomorrow.
                    </p>

                    <NavLink className="btn-4" to="/sustainbility">
                      <span>Read More</span>
                    </NavLink>
                  </div>
                  <div
                    className="sustainrght"
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <img src={Nature} alt="img"/>
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