import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/Vishnu-Hazari.png'
import { Leaderbtn } from './Leaderbtn'

export const Vishnu = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/vishnu-hazari" />
    </Helmet>
    <div className='whitebg'>
<Header/>
</div>
<section id='aboutleader'>
    <div className='aboutleader'>
        <div className='container'>
            <div className='row'>
                <div className='web-container'>
                    <div className='leadershipstn'>
                        <div className='leadername'>
                            <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">VISHNU HAZARI</h1>
                            <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Chief Operating Officer
</span>
                        </div>
                        <div className='bio'>
                            <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <img src={Leadership01} />
                        </div>
                        <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Vishnu Hazari holds an MS in Mechanical Engineering from Western Michigan University and has over 14 years of consulting experience in the BFSI, Pharma and Healthcare sectors, having worked at JP Morgan Chase, Anthem, Infosys, Cognizant and Deloitte. At Premier Energies, Vishnu is responsible for managing the entire spectrum of operations of the manufacturing division.</p>
                        </div>
                    </div>
                    <Leaderbtn />
                </div>
            </div>
        </div>
    </div>
</section>
<Footer />
</>
  )
}
