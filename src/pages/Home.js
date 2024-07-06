import React, { useEffect, useState } from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Slider from "react-slick";
import Banner01 from './images/banner01.jpg'
import Banner02 from './images/banner02.jpg'
import Banner03 from './images/banner03.jpg'
import Mbanner01 from './images/mbanner01.jpg'
import Mbanner02 from './images/mbanner02.jpg'
import Mbanner03 from './images/mbanner03.jpg'
import aboutbanner01 from './images/aboutbanner01.jpg'
import aboutbanner02 from './images/aboutbanner02.jpg'
import aboutbanner03 from './images/aboutbanner03.jpg'
import { Numbers } from './Number';
import Solarcell from './images/solar-cell.jpg'
import Solarmodule from './images/solar-module.jpg'
import Epcimg from './images/epc-solution.jpg'
import Diverse from './images/diverse-project.jpg'
import Rooftop from './images/roof-top.jpg'
import Ground from './images/ground-mounted.jpg'
import Water from './images/water-pump.jpg'
import Nature from './images/solar-video.gif'
import Premiervideo from './images/premier-video.mp4'
import Mpremiervideo from './images/mpremier-video.mp4'
import Leed from './images/Leed-certificate.jpg'
import Mleed from './images/mLeed-certificate.jpg'
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Popupimg from './images/pop-up.webp'

export const Home = () => {
  const [popup, setActive] = useState("false");
          
  const handleToggle = () => {
    setActive(!popup);
  };
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
    autoplaySpeed:8000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
var settings2 = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  fade:true,
  autoplay: true,
  speed: 600,
  arrows: false,
  autoplaySpeed:8000,
  cssEase: "linear",
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 680,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};
var settings3 = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  fade:true,
  autoplay: true,
  speed: 600,
  arrows: false,
  autoplaySpeed:8000,
  cssEase: "linear",
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 680,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/" />
    </Helmet>
     <Header />
      {/* Popup Start*/}
     <div className={popup ? 'popup' : 'popup active'}>
      <div className='popimg'>
     <button onClick={handleToggle} className='popdesign'>X</button>
      <img src={Popupimg}  alt="Great Place to work Premier Energies"/>    
      </div>
      </div>
     {/* Popup End */}
     <div className='jslider'>
        <div className='row'>          
    <Slider {...settings}>
   
      <div>
      <div className='homeslider slide01'>
        <div className='homcolrt'>
        <img src={Banner01} className='desktop-show'/>
          <img src={Mbanner01} className='mobile-show'/>
        </div>
        <div className='homcolft position-absolute'>
          <span className='colorborder'><em></em></span>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">For  a  Future  Tomorrow, <br/> Let's  go  Solar  Today.</h2>
        </div>
      </div>
      </div>
      <div>
      <div className='homeslider slide02'>
        <div className='homcolrt'>
          <img src={Banner02} className='desktop-show'/>
          <img src={Mbanner02} className='mobile-show'/>
        </div>
        <div className='homcolft position-absolute'>
          <span className='colorborder'><em></em></span>
          <h2>LEADING EDGE TECHNOLOGY AT WORK</h2>
        </div>
      </div>
      </div>
      <div>
      <div className='homeslider slide03'>
        <div className='homcolrt'>
        <img src={Banner03} className='desktop-show'/>
          <img src={Mbanner03} className='mobile-show'/>
        </div>
        <div className='homcolft position-absolute'>
          <span className='colorborder'><em></em></span>
          <h2>FROM NATURE. FOR NATURE.</h2>
        </div>
      </div>
      </div>
      <div>
      <div className='homeslider slide001'>
        <div className='homcolrt'>
        <img src={Leed} className='desktop-show'/>
          <img src={Mleed} className='mobile-show'/>
        </div>
      </div>
      </div>
    </Slider>
    </div>
    </div>  
       <section id='aboutus'>
        <div className='aboutus'  data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
            <div className='smallcirclerightdark'></div>
            <div className='midcircleleft'></div>
            <div className='midcircleright'></div>
            <div className='largecircleleft'></div>
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
                <div className='aboutstn mb-0'>
                  <div className='aboutcont'>
                    <div className='title'>
                    <span className='colorborder'><em></em></span>
                      <h2>About Us</h2>
                    </div>
                    <div className='aboutconsts'>
               
                    <h1><span>THE PREMIER NAME IN SUSTAINABLE ENERGY SOLUTIONS FOR<br/> OVER 25 YEARS</span></h1>
                    <p>Welcome to Premiere Energies, the largest integrated solar manufacturer in Southern India and second largest in India. With an influential presence and expertise of over 25 years in the solar industry, Premier Energies is revered for its commitment towards the development of sustainable energy solutions to build a better tomorrow for the planet and its inhabitants. </p>
                    <NavLink className="btn-4" to='/about-premier-energies'><span>Read More</span></NavLink>
                    </div>
                  </div>
                  <div className='aboutslider'>
                  <Slider {...settings2}>
      <div>
      <div className='homeslider slide01'>
          <img src={aboutbanner01} />
        </div>
      </div>
      <div>
      <div className='homeslider slide02'>
          <img src={aboutbanner02} />
        </div>
      </div>
      <div>
      <div className='homeslider slide03'>
          <img src={aboutbanner03} />
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
       <section id='news'>
        <div className='news'>
          <div className='container'>
            <div className='row'>
              <div className='newslider'>
              <div className='powerplant'>
                    <h4>News</h4>
                    <Slider {...settings3}>
                      <div>
                        <div className='newscontent'>
                          <h5>Gold-Rated under LEED by USGBC</h5>
                            <p>Premier Energies has become the first LEED Gold-rated solar cell and module manufacturing facility in India.  The company has been conferred with Gold rating under the LEED v4 Building Design and Construction: New Construction and Major Renovations by the US Green Building Council (USGBC).</p>
                        </div>
                      </div>
                      <div>
                        <div className='newscontent'>
                        <h5>Great Place to Work</h5>
                            <p>Certified by Great Place to Work, Premier Energies is building and sustaining a high-trust, high-performance culture where each employee feels valued, driven and engaged. </p>
                        </div>
                      </div>
                      <div>
                        <div className='newscontent'>
                        <h5>Tie-up with Azure Power</h5>
                            <p>Premier Energies has executed a module supply agreement with Azure Power for supply of modules upto 600 MW per year for the next four years.</p>
                        </div>
                      </div>
                    </Slider>
                    </div>
              </div>
            </div>
          </div>
        </div>
       </section>
       <section id='numbers' className='p-0 homemanage'>
        <div className='numbers pb-0'>
          <div className='container'>
              <div className='row'>
                <div className='web-container'>
                  <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Premier ENERGIES IN NUMBERS</h2>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='videostn' data-aos="fade-in" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
        <video autoPlay muted loop className='desktop-show'>
          <source src={Premiervideo} type="video/mp4"/>
    Sorry, your browser doesn't support videos.
</video>
<video autoPlay muted loop className='mobile-show'>
          <source src={Mpremiervideo} type="video/mp4"/>
    Sorry, your browser doesn't support videos.
</video>
<Numbers />
        </div>
       </section>
       <section id='products'>
        <div className='products'>
            <div className='midcircleleft'></div>
            <div className='smallcirclerightdarkleft'></div>
            <div className='smallcirclerightdark'></div>
            <div className='midcircleleft'></div>
            <div className='largecircleright'></div>
            <div className='container'>
            <div className='row'>
              <div className='web-container'>
              <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Products</h2>                    
                  </div>
                  </div>
                  <h3 data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Turning sunlight into energy</h3>
                  <div className='productsbox'>
                    <div className='productcont' data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='producthimg'>
                      <img src={Solarcell} />
                      </div>
                      <h4>SOLAR CELL</h4>
                      <p>We manufacture Mono PERC Cells with a conversion efficiency of upto 23.2%.</p>                      
                  <div className='webbtn'>
                  <NavLink className="btn-4" to='/solar-cell' data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span>Read More</span></NavLink>
                  </div>
                    </div>
                    <div className='productcont' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                    <div className='producthimg'>
                      <img src={Solarmodule} />
                      </div>
                      <h4>SOLAR MODULE</h4>
                      <p>Our Polycrystalline and Mono PERC Solar Modules, ranging from 60-144 Solar Cells, serve an efficiency of upto 22%. </p>                      
                  <div className='webbtn'>
                  <NavLink className="btn-4" to='/solar-module' data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><span>Read More</span></NavLink>
                  </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
       </section>
       <section id='epc-solution'>
        <div className='epc-solution'>
        <div className='smallcirclerightdarkleft'></div>
            <div className='midcircleleft'></div>
            <div className='midcircleright'></div>
            <div className='largecircleleft'></div>
          <div className='container'>
            <div className='row'>              
            <div className='web-container'>
              <div className='epcrow'>
              <div className='epc-img' data-aos="fade-in" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true'>
                <img src={Epcimg} />
              </div>
                <div className='epc-cont'>
                <div className='title'>
                  <span className='colorborder'><em></em></span>
                  <h2 data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">EPC Solution</h2>                    
                  </div>
                  <h3 data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">FROM CONCEPTION TO EXECUTION</h3>
                  <p data-aos="fade-in" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true'>Premier Energies has commissioned over 500 MW of solar power plants till date. Alongside, our EPC division has also commissioned ground-mounted, rooftop, floating, canal bank, canal top and hybrid power generation systems.</p>
                  <div className='productstn'>
                      <div className='proimg' data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true'>
                        <a href='http://premierenergies.com/our-services#rooftop'>
                        <img src={Rooftop}  />
                        <h4>Rooftop</h4>
                        </a>
                      </div>
                      <div className='proimg' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true'>
                      <a href='http://premierenergies.com/our-services#ground-mounted'>
                        <img src={Ground}  />
                        <h4>Ground Mounted</h4>
                        </a>
                      </div>
                      <div className='proimg' data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true'> 
                      <a href='http://premierenergies.com/our-services#water-pumps'>
                        <img src={Water}  />
                        <h4>Water Pumps</h4>
                        </a>
                      </div>
                      <div className='proimg' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true'>
                      <a href='http://premierenergies.com/our-services#diverse-projects'>
                        <img src={Diverse}  />
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
       <section id='ownpower'>
          <div className='ownpower'>
            <div className='container'>
              <div className='row'>
                <div className='web-container'>
                    <div className='powerplant'>
                    <h4>Independent Power Producer</h4>
                      <p data-aos="fade-in" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Premier Energies independently owns and operates 28 solar power plants across India. Each of these plants is monitored and maintained by our own in-house O&M team.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
       </section>
       <section id='technology'>
        <div className='technology'>
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
              <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                  <h2 data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">TECHNOLOGY</h2>
                  </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='technologybanner'>
            <div className='container'>
              <div className='row'>
                <div className='web-container'>
                  <h3 data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Cutting  edge  technology  at  <br/>E-City,  Hyderabad</h3>
                  <div className='quote'>
                    <div className='quotebox' data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <h4>Industry’s Best</h4>
                      <p>Automated mono PERC manufacturing line, with a cell efficiency of 23.2%.</p>
                    </div>
                    <div className='quotebox' data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <h4>Fully Automated</h4>
                      <p>State-of-the-art Module line, equipped to handle half-cut cells and bifacial modules.</p>
                    </div>
                    <div className='quotebox' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <h4>Zero-Liquid Discharge System</h4>
                      <p>For end-to-end treatment, recycling and reuse of processed water.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>
       <section id='sustainbility'>
        <div className='sustainbility'>
        <div className='midcircleleft'></div>
            <div className='smallcircleright'></div>
            <div className='smallcircleleft'></div>
            <div className='midcircleleft'></div>
            <div className='midcircleright'></div>
            <div className='largecircleleft'></div>
            <div className='container'>
              <div className='row'>
                <div className='web-container'>
                  <div className='sustainbox'>
                  <div className='sustainleft'>
                <div className='title'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">SUSTAINABILITY</h2>
                  </div>
                  <h3 data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">From Nature. FOR Nature.</h3>
                  <p data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">At Premiere Energies, sustainability is our utmost priority. Our goal is to provide new-age, energy efficient solutions and quality products to power new possibilities for the planet and its people. We believe in working in harmony with nature, evolving every single day towards making sustainable progress for a cleaner, greener tomorrow. </p>
    
                  <NavLink className="btn-4" to='/sustainbility'><span>Read More</span></NavLink>
        
                  </div>
                  <div className='sustainrght' data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
               <img src={Nature} />
                  </div>
                  </div>
                </div>
                </div>
              </div>
        </div>
       </section>
     <Footer />
    </>
  )
}
export default Home;