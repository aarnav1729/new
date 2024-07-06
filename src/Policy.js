import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'

export const Policy = () => {
  return (
   <>
  <div className='whitebg'>
    <Header/>
    </div>
    <section id='privacy-policy'>
        <div className='privacy-policy'>
            <div className='container'>
            <div className='row'>
                <div className='web-container'>
                <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Privacy Policy</h2>
                  </div>
                  </div>
                  <div className='content text-left'>
                    <p>We at PREMIER ENERGIES respect the privacy of everyone who visits this website and are committed to maintain the privacy and security of the personal information of all visitors to this website. Our policy on the collection and use of personal information and other information is outlined below.</p>
                    <p>In case of visiting this website to read or download information, it must be known that PREMIER ENERGIES collects and stores a standard set of internet-related information, such as an Internet Protocol (IP) address, the date and time, the type of browser and operating system used, the pages(s) visited. All information is collected to help PREMIER ENERGIES for making this site more useful to its customer(s) and only used for statistical purposes.</p>
                    <p>PREMIER ENERGIES collects and uses information such as name, telephone number, email address, etc. in order to:</p>
                    <ul>                       
                    <li>Respond to queries and requests submitted by you</li>
                    <li>Process bids etc.</li>
                    </ul>
                    <p>Except as set out in this privacy policy, PREMIER ENERGIES will not disclose any personally identifiable information without permission, unless PREMIER ENERGIES is legally entitled or required to do so or if PREMIER ENERGIES believes that it is necessary to protect and/or defend it’s rights, property or personal safety etc.</p>
                    <h4>Change of Privacy Policy</h4>
                    <p>PREMIER ENERGIES reserves the full rights to change/alter/amend/modify the contents of the privacy policy from time to time without any prior notice of intimation.</p>
                    <strong>Copyright © PREMIER ENERGIES</strong>
                  </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
   </>
  )
}
