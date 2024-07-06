import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/Chandra-Mauli-Kumar.png'
import { Leaderbtn } from './Leaderbtn'

export const Chandra = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/chandra-mauli-kumar" />
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
                            <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">CHANDRA MAULI KUMAR    </h1>
                            <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Head- Manufacturing and Technology</span>
                        </div>
                        <div className='bio'>
                            <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <img src={Leadership01} />
                        </div>
                        <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Chandra Mauli Kumar is a Semiconductor and PV professional with 24 years of experience in the area of Production, PPC, Process & Equipment Engineering, Projects, and R&D. He is a hard-working person, an ambitious leader and a great motivator.</p>
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
