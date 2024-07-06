import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/module.jpg'
import Service01 from './images/solar01.jpg'
import Slider from "react-slick"
import Facial from './images/mono-facial.jpg'
import Facial2 from './images/Bi-facial.jpg'
import PDF4 from './PDF/PDF4_new.pdf'
import PDF5 from './PDF/pdf5.PDF'
import PDF6 from './PDF/pdf6.PDF'
import PDF7 from './PDF/pdf7.PDF'
import PDF8 from './PDF/PDF8_new.pdf'
import PDF9 from './PDF/PDF9.pdf'
import { Helmet } from 'react-helmet'

export const Module = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: true,
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
    <title>Solar Module Manufacturers in India | High-Efficiency Solar PV Module Manufacturing Company in India | PremierEnergies</title>
    <meta name="description" content="Premier Energies - High-Efficiency Solar Module Manufacturing Company in India. With cutting-edge technology, Premier Energies offer a wide range of products that are outstanding in quality as well as sustainable."/>
    <link rel="canonical" href="https://premierenergies.com/solar-module" />
    </Helmet>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2>Consistency in everything</h2>
        </div>
        </div>
      </div>
    </section>
    <section id='Solar' className='pb-0'>
<div className='infrastructure'>
<div className='largecircleleft'></div>
<div className='midcircleright'></div>
<div className='smallcirclerightdark'></div>
  <div className='container'>
    <div className='row'>
      <div className='web-container'>
                    <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h1 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Solar Module Manufacturers in India
</h1>
                  </div>
                  </div>
                  <h2 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500" className='heading2'>Carefully Curated <br/>for optimum performance</h2>
                  <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Our carefully curated products come with the promise of years of performance, higher conversion and efficiency rates. We offer a wide range of products that are outstanding in quality as well as sustainable.</p>
            </div>            
      </div>
    </div>
    <div className='infra'>
    <div className='infrabox'>
    <div className='largecircleright'></div>
<div className='smallcirclerightdark'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Module Manufacturing Line
 </h2>
              </div>
              <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">State-of-the-art Module Line</h3>
<p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Premier Energies Solar Module Manufacturing line has a capacity of 3 GW<sup>*</sup> of module manufacturing. The line is equipped with the latest technology producing reliable, long-lasting, cost-effective, and energy-saving modules for a sustainable future.</p>
<h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">3 GW<sup>*</sup> - Solar Module Line</h3>
<p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">The line is equipped to handle various cell sizes (M2, G1, M4, M6, M9, M10 and G12), i.e., from 156.75mm X 156.75mm to 210mm X 210mm dimensions and can produce Industry Leading 660+W Solar-Panels.
</p>
<h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Automated for precision</h3>
<p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">A fully automated, state-of-the-art Module line is equipped to handle half-cut cells and bifacial modules.</p>
              </div>
              
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                  <img src={Service01} />
                  </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div className='infrabox'>
    <div className='midcircleleft'></div>
<div className='smallcirclerightdarkleft'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Types of Solar Modules</h2>
              </div>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Assembled with high-efficiency Multi-busbar PERC cells, the half-cell configuration of the modules offers the advantage of higher power output, better temperature-dependent performance, reduced shading effect on the energy generation, lower risk of hot spot, as well as enhanced tolerance for mechanical loading.</p>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">We offer a broad range of polycrystalline silicon and monocrystalline silicon solar modules, ranging from 60 cells to 144 cells.</p>
              <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Mono facial</h3>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">The conventional type of solar modules with solar cells on one side. The half cut cell improves the performance and durability of solar modules.</p>
              <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Bi facial</h3>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">With a transparent back sheet, Bi Facial solar modules generate power from both the sides. It has high power density, high energy yield, better low light performance and lower temperature coefficient.</p>
              </div>
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
          <Slider {...settings}>
      <div>
      <div className='homeslider'>
          <img src={Facial} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Facial2} />
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
    <section id='techspecification'>
        <div className='techspecification p-0'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                    <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Tech Specifications</h2>
                  </div>
                  </div>
                  <div className='specification' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                  <div className='specifibox'>
                        <h3 className='value1'>72 Poly Crystalline <span className='value2'>157mm</span></h3>
                        <a href={PDF9} className='download' target='_blank'></a>
                    </div>
                    <div className='specifibox'>
                        <h3 className='value1'>120 Half-cut Mono Perc <span className='value2'>420-450 W</span></h3>
                        <a href={PDF7} className='download' target='_blank'></a>
                    </div>
                    <div className='specifibox'>
                        <h3 className='value1'>132 Half-Cut Mono Perc Cell Bifacial Dual Glass <span className='value2'>640-670 W</span></h3>
                        <a href={PDF8} className='download' target='_blank'></a>
                    </div>  
                    <div className='specifibox'>
                        <h3 className='value1'>144 Half-Cut Mono Perc Cell Bifacial Dual Glass <span className='value2'>525-555 W</span></h3>
                        <a href={PDF4} className='download' target='_blank'></a>
                    </div>
                    <div className='specifibox'>
                        <h3 className='value1'>144 Solar Bifacial Transparent <span className='value2'>525-555 W</span></h3>
                        <a href={PDF5} className='download' target='_blank'></a>
                    </div>
                    <div className='specifibox'>
                        <h3 className='value1'>144 Half-cut Mono Perc <span className='value2'>515-555 W</span></h3>
                        <a href={PDF6} className='download' target='_blank'></a>
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
