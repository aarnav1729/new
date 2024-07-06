import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/solar-banner.jpg'
import Service01 from './images/solar-cell-01.jpg'
import Service02 from './images/solar-cell-02.jpg'
import PDF1 from './PDF/Data-Sheet-PEPPL_PIRANHA_P-TYPE_M10_Bifacial_V01.pdf'


export const Solar = () => {
  return (
    <>
    <Helmet>
    <title>Solar Cell Manufacturers in India | Top Solar Cell Manufacturing Company in India | PremierEnergies</title>
    <meta name="description" content="Premier Energies is the top leading solar cell manufacturer in India. With cutting-edge technology, Premier Energies offer a broad spectrum of photovoltaic cells ranging from polycrystalline solar cells to mono PERC solar cells."/>
    <link rel="canonical" href="https://premierenergies.com/solar-cell" />
    </Helmet>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2>Illuminating the Future,<br/> One Cell at a time</h2>
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
                    <h1 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Solar Cell Manufacturers in India</h1>
                  </div>
                  </div>
                  <h2 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500" className='heading2'>Powering the Future</h2>
                  <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Premier Energies is one of the leading solar cell manufacturing companies in India. With the cutting edge technology, we offer a broad spectrum of photovoltaic cells ranging from polycrystalline solar cells to mono PERC solar cells.</p>
            </div>            
      </div>
    </div>
    <div className='infra'>
    <div className='infrabox' id='technology'>
    <div className='largecircleright'></div>
    <div className='smallcirclerightdark'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Cell Manufacturing Line</h2>
              </div>
              <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Capacity – 2 GW cell line</h3>
          <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">The line is equipped to handle various wafer sizes (M10 and G12), i.e., from 182mmX182mm to 210mmX210mm dimensions.</p>
          <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">The line comes with a Universal Texturing Machines which enable us to produce Mono Crystalline (PERC) Solar-Cells in the same line with minimal downtime</p>
          <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Automated for precision</h3>
          <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">To reduce manual intervention, assure consistent and high quality and increased throughput.</p>
          <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Future ready capability</h3>
          <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Premier Energies(Solar Cell Manufacturers) Manufacturing line is capable of handling upcoming technologies of solar cells with larger sizes like M10 and G12 and multi-busbar cells</p>
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
    <div className='infrabox' id='types'>
    <div className='midcircleleft'></div>
<div className='smallcirclerightdarkleft'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Types of Solar Cell</h2>
              </div>
              {/* <h4 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Polycrystalline Silicon Solar Cells</h4>
<p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">The Polycrystalline Silicon Solar Cells have conversion efficiency varying from 13% to 19%. These cells are perfect for wallet-friendly solar power solutions.</p> */}
<h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Mono PERC (Passivated Emitter & Rear Contact) Cells</h3>
<p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">The Mono PERC (Passivated Emitter & Rear Contact) Cells have conversion efficiency of upto 23.2%. Other than being pocket-friendly, these cells are effective in low light and high temperatures too.</p>
              </div>
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
          <img src={Service02} />
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
    <section id='techspecification' className='p-0'>
        <div className='techspecification pb-0'>
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
                        <h3 className='value1'>M10 Bifacial Solar Cell<span className='value2'>182mm</span></h3>
                        <a href={PDF1} className='download' target='_blank'></a>
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
