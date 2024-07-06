import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/lead_05.webp'
import { Leaderbtn } from './Leaderbtn'

export const Abhishek = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/abhishek-loonker" />
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
                            <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">ABHISHEK LOONKER</h1>
                            {/* <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Director</span> */}
                        </div>
                        <div className='bio'>
                            <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <img src={Leadership01} />
                        </div>
                        <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Abhishek Loonker has over 16 years of experience in handling private equity, corporate strategy and treasury. He is a gold medalist in MBA and a CFA Charter Holder. He was featured in ‘40 under 40’ in the Alternative Investment space in India in 2018.</p>
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
