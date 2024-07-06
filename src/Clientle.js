import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/Clintelle.jpg'
import Client01 from './images/client01.png'
import Client02 from './images/client02.png'
import Client03 from './images/client03.png'
import Client04 from './images/client04.png'
import Client05 from './images/client05.png'
import Client06 from './images/client06.png'
import Client07 from './images/client07.png'
import Client08 from './images/client08.png'
import Client09 from './images/client09.png'
import Client10 from './images/client10.png'
import Client11 from './images/client11.png'
import Client12 from './images/client12.png'
import Client13 from './images/client13.png'
import Client14 from './images/client14.png'
import Client15 from './images/client15.png'
import Client16 from './images/client16.png'
import Client17 from './images/client17.png'
import Client18 from './images/client18.png'
import Client19 from './images/client19.png'
import Client20 from './images/client20.png'
import Client21 from './images/client21.png'
import Client22 from './images/client22.png'
import Client23 from './images/client23.png'
import Client24 from './images/client24.png'
import { Helmet } from 'react-helmet'


export const Clientle = () => {
  return (
    <>
    <Helmet>
    <title>Clients | Premier Energies</title>
    <meta name="description" content="Find Out Clientele Base of Premier Energies |  Top Solar Panel Manufacturing Company in India" />
    <link rel="canonical" href="https://premierenergies.com/clientele" />
    <meta property="og:url" content="https://premierenergies.com/clientele" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Clients | Premier Energies" />
    <meta name="og:description" content="Find Out Clientele Base of Premier Energies |  Top Solar Panel Manufacturing Company in India"></meta>
    </Helmet>
    <Header />
     <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Our Select Clients </h2>
        </div>
        </div>
      </div>
    </section>
    <section id='clintelle'>
        <div className='clintelle'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                    <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h1 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Clientele</h1>
                  </div>
                  </div>
                  <div className='content'>
                    <p>Premier Energies values each client relationship with passion, integrity and commitment. Since our beginning in 1995, we have built long-lasting relationships with clients by understanding their specific business needs and catering to them.</p>
                    <p>We believe that the most valuable and productive relationships are those that are built on a solid foundation of trust and respect for one-another's expertise, pursuing defined goals and promoting the free flow of ideas and innovation.</p>
                  </div>
                  <div className='clintellestn'>
                    <div className='clintelbox'>
                        <ul>
                            <li><img src={Client01}/></li>
                            <li><img src={Client02}/></li>
                            <li><img src={Client03}/></li>
                            <li><img src={Client04}/></li>
                            <li><img src={Client05}/></li>
                            <li><img src={Client06}/></li>
                            <li><img src={Client07}/></li>
                            <li><img src={Client08}/></li>
                            <li><img src={Client09}/></li>
                            <li><img src={Client10}/></li>
                            <li><img src={Client11}/></li>
                            <li><img src={Client12}/></li>
                            <li><img src={Client13}/></li>
                            <li><img src={Client14}/></li>
                            <li><img src={Client15}/></li>
                            <li><img src={Client16}/></li>
                            <li><img src={Client17}/></li>
                            <li><img src={Client18}/></li>
                            <li><img src={Client19}/></li>
                            <li><img src={Client20}/></li>
                            <li><img src={Client21}/></li>
                            <li><img src={Client22}/></li>
                            <li><img src={Client23}/></li>
                            <li><img src={Client24}/></li>
                        </ul>
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
