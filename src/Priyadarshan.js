import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/Priyadarshan-Bhatewara.png'
import { Leaderbtn } from './Leaderbtn'

export const Priyadarshan = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/priyadharshan-bhatewara" />
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
                            <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">PRIYADARSHAN BHATEWARA, CFA
</h1>
                            <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Chief Financial Officer</span>
                        </div>
                        <div className='bio'>
                            <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <img src={Leadership01} />
                        </div>
                        <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Priyadarshan Bhatewara holds a Bachelor in Engineering from VJTI, Mumbai, M.Tech from IIT Delhi and has earned CFA Charterholder from CFA Institute, USA. He has 15 years of experience in Corporate Finance, Project Finance, Project Management, Business Development, and Financial Analysis of Climate Change Projects. He has worked on Hydro Power, Thermal Power, Wind Power and Solar Power projects. He has expertise in closing Investment deals, Management Information systems, Data Analysis, and Financial Modelling. He has worked with companies like Azure Power, ReNew Power, Asian Development Bank, Rattan India, SNC Lavalin and Mott MacDonald. Priyadarshan has been awarded Zee Yuva Award (2017) for best practices in water conservation, Water Crusader Award (2017) by Hindustan Unilever and Energy Conservation Award (2016) by Vigyan Bharti.</p>
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
