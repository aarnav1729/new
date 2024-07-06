import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/B.Revathi-Rohini.png'
import { Leaderbtn } from './Leaderbtn'

export const Revathi = () => {
  return (
   <>
   <Helmet>
   <link rel="canonical" href="https://premierenergies.com/revathi-rohini-b" />
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
                                <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">REVATHI ROHINI B</h1>
                                <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Director</span>
                            </div>
                            <div className='bio'>
                                <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                            <img src={Leadership01} />
                            </div>
                            <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">After serving the Government of Telangana for over 30 years, Revathi Rohini B retired as an Additional Commissioner of Commercial Taxes. As an Agricultural Sciences graduate, she brings rich, on-ground expertise in indirect taxation and government regulatory affairs. A trailblazer and an expert in legal and commercial taxes, she now leads all financial and government-related matters of the organization.</p>
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
