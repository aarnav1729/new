import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/Surender-pal-singh.png'
import { Leaderbtn } from './Leaderbtn'

export const Leadership = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/surender-pal-singh" />
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
                                <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">SURENDER PAL SINGH</h1>
                                <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">FOUNDER & CHAIRMAN</span>
                            </div>
                            <div className='bio'>
                                <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                            <img src={Leadership01} />
                            </div>
                            <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Surender Pal Singh is a visionary, distinguished energy expert and adept business leader with over 50 years of industry experience. His achievements are found in both conventional and non-conventional power projects. Known for his resourcefulness and deep knowledge of Solar, he has been conferred with national and international awards such as the International Project of The Year from Renewable Energy World, USA 2013, National Awards for Excellence in Renewable Energy for Rural Electrification from the World Federation Of CSR Professionals, 2015, Udyog Bharti & Udyog Patra awards from the Vice President of India. Graduated from Dharwad University in mechanical engineering, he oversees operations and finance of the organization today and also mentors young leaders of our country.</p>
                            </div>
                        </div>
                        <Leaderbtn />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>    
    </>
  )
}
