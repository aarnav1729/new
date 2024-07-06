import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/lead_08.webp'
import { Leaderbtn } from './Leaderbtn'

export const Sriniadapa = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/adapa-srinivas" />
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
                            <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Adapa Srinivas</h1>
                            <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Chief Growth Officer</span>
                        </div>
                        <div className='bio'>
                            <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <img src={Leadership01} />
                        </div>
                        <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Srini drives growth and international expansion for Premier Energies. He has 18 years of experience in driving sales and marketing engines and building businesses in multinational companies across India, Asia, Africa and Canada. In his previous roles as Chief Marketing Officer at Burger King, and Senior Associate Director at Kellogg’s, he built strong brands and businesses in high growth markets.</p>
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
