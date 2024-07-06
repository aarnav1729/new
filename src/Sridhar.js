import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/lead_04.webp'
import { Leaderbtn } from './Leaderbtn'
import { Leadership } from './Leadership'

export const Sridhar = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/sridhar-narayan" />
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
                            <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">SRIDHAR NARAYAN</h1>
                            {/* <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Director</span> */}
                        </div>
                        <div className='bio'>
                            <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <img src={Leadership01} />
                        </div>
                        <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Sridhar Narayan is the founding partner of GEF Capital Partners and co-head of the South Asia investment practice. He has over 23 years of experience investing in Indian public and private markets.</p>
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
