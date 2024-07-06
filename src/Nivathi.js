import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Leadership01 from './images/Niyathi-Madhasu.png'
import { Leaderbtn } from './Leaderbtn'

export const Nivathi = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/niyathi-madasu" />
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
                            <h1 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">NIYATHI MADASU</h1>
                            <span data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Director</span>
                        </div>
                        <div className='bio'>
                            <div className='leadershipimg' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                        <img src={Leadership01} />
                        </div>
                        <p data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Niyathi Madasu has over 18 years of experience in Talent Management, Leadership Consulting & Organization Development. She is skilled in a variety of methodologies including leadership framework development, psychological profiling & assessment, and design of talent management frameworks. Niyathi holds an MBA in HR from the Symbiosis Centre for Management and Human Development, Pune and an executive certification in organisation development from ISB Hyderabad. She wears two hats by leading the People Operations for the group and as a marketing & branding team member. She recently joined the elite Business World People 40 under 40 2020 list.</p>
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
