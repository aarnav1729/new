import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/Sudhir-Moola.png'
import { Leaderbtn } from './Leaderbtn'

export const Sudhir = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/sudhir-moola" />
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
                                <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">SUDHIR MOOLA</h1>
                                <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Director</span>
                            </div>
                            <div className='bio'>
                                <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                            <img src={Leadership01} />
                            </div>
                            <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">With an engineering degree from JNTU, Hyderabad; an MS from Colorado University and an MBA from ISB, Sudhir worked with PwC, USA before taking on a directorial mantle at Premier Energies. He heads the EPC business and the construction of our new state-of-the-art manufacturing facility. Sudhir is actively involved in all day-to-day operations of the organization from managing external relations to defining policies, and supervising department heads to working on strategies for growth and business expansion.</p>
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
