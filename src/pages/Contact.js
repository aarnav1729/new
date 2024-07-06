import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './images/contact_us.jpg'
import { Footer } from './components/Footer'
import { Helmet } from 'react-helmet'

export const Contact = () => {
  const [grievanceform, setActive] = useState("false");
          
  const handleToggle = () => {
    setActive(!grievanceform);
  };
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/contact-us" />
    </Helmet>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Go Green, Save Green</h2>
        </div>
        </div>
      </div>
        </section>
         <section className='contactus pb-0'>
        <div className='container'>
          <div className='row'>            
          <div className='web-container'>
          <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Contact Us</h2>
                  </div>
                  </div> 
                  <form>
                      <h3 className='m-0'>How can we help you?</h3>
                    <ul className="form d-flex flex-wrap justify-content-between" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                    <li><input type="text" placeholder="Name*" name="text" required /></li>
                    <li><input type="text" placeholder="Company*" name="text" required /></li>
                    <li><input type="email" placeholder="Country" name="email" required /></li>
                    <li><input type="tel" placeholder="Contact*" name="phone" required /></li>
                    <li><input type="email" placeholder="Email" name="email" required /></li>
                    <li><textarea placeholder='Message'></textarea></li>
                    <li><button type="submit" className="btn-4"><span>submit</span></button></li></ul>
                </form>
                  <div className='contactbox'>
                  <h2>Premier Energies Limited</h2>         
                  <div className='premierenergies'>
                  <div className='address'>
                    <h4>Call </h4>
                    <ul>
                    <li><a href="tel:914027744415">+91-40-2774 4415</a></li>
                    <li><a href="tel:914027744416">+91-40-27744416</a></li>
                    <li><a href="tel:919490167793">+91-9490167793</a></li>
                    <li><a href="tel:914027744417">+91-40-27744417</a></li>
                    </ul>
                  </div>
                  <div className='address social socialdesp '>
                    <h4>Email</h4>
                    <ul className="email"><li><span><strong>For any media & general queries</strong><a href="mailto:Grievance@Premierenergies.com">Grievance@Premierenergies.com</a></span></li><li><span><strong>For Sales & Marketing queries</strong><a href="mailto:sales@premierenergies.com">sales@premierenergies.com</a></span></li><li><span><strong>For Career Opportunities</strong><a href="mailto:hr@premierenergies.com">hr@premierenergies.com</a></span></li></ul>
                  </div>
                  <div className='address'>
                    <h4>Address</h4>
                    <p><strong>Corporate Office</strong> Sy.No. 54/Part, Above G.Pulla Reddy Sweets, Vikrampuri, Secunderabad – 500009, Telangana, India.</p>
                    <p>GST – 36AABCP8800D1ZP</p>
                    <p><strong>Factory Address</strong> Sy.No.53, Annaram Village, Gummadidala – Mandal, Sangareddy District – 502313, Telangana, India.</p>
                  </div>
                  </div>
                  <div className='premierenergies'>                      
                  <div className='address'>
                    <h4>PEPPL -  Premier Energies Photovoltaic Private Limited</h4>
                    <p>Plot No. 8/B/1&2, E-City, (Fab City), Maheshwaram Mandal, Raviryala Village, Ranga Reddy District, 501359, Telangana, India</p>
                   
                  </div>
                  <div className='address'>
                  <h4>PEIPL - Premier Energies International Private Limited</h4>
                    <p>5th Floor, Southern Park, D-ll, Saket Place, 110017, New Delhi, India </p>
                  </div>
                  <div className='address'>
                    <h4>PEGPL - Premier Energies Global Environment Private Limited</h4>
                    <p>Sy.No.54 part, First Floor, G.Pulla Reddy Sweets, Kakaguda, Vikrampuri Colony, 500009, Secunderabad, India</p>
                  </div>
                  </div>
                 
                </div>
          </div>
          </div>
        </div>
          </section>
          <section id='grievance' className='pb-0'>
              <div className='grievance'>
                <div className='container'>
                  <div className='web-container'>
                  <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Grievance</h2>
                  </div>
                  </div> 
                  <div className='grievancestrip'>
                    <div className='grievancebox'>
                      <h3>By Email </h3>
                      <ul>
                        <li><a href='mailto:grievance@premierenergies.com'>grievance@premierenergies.com</a></li>
                      </ul>
                    </div>
                    <div className='grievancebox'>
                      <h3><span>OR </span></h3>
                    </div>
                    <div className='grievancebox'>
                      <h3 onClick={handleToggle} className={grievanceform ? 'hemburgur' : 'hemburgur active'}>Fill the form</h3>
                    </div>
                  </div>
                  <div className={grievanceform ? 'grievanceform' : 'grievanceform active'}>
                  <form>
                   <div className='formstn'>
                    <div className='firstrow'>
                    <h3>Grievant Information</h3>
                    <ul>
                      <li><span>Date of Grievant</span><input type='date'/></li>
                      <li><span>Grievant Name</span><input type='text'/></li>
                      <li><span>Gender</span>
                        <select>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Rather Not Say</option>
                        </select>
                      </li>
                      <li><span>Age</span><input type='text'/></li>
                      <li><span>Name of village/area</span><input type='text'/></li>
                      <li><span>Subject of the issue</span><input type='text'/></li>
                    </ul>
                    </div>
                    <div className='firstrow'>
                    <h3>contact information of complainantis</h3>
                    <ul>
                      <li><span>Anonymous (Y/N)</span><input type='text'/></li>
                      <li><span>Phone</span><input type='text'/></li>
                      <li><span>Email</span><input type='text'/></li>
                      <li><span>Address</span><input type='text'/></li>
                    </ul>
                    </div>
                    <div className='firstrow'>
                    <h3>deatils of the event leading to grievance</h3>
                    <ul>
                      <li><span>Who was Involved?</span><input type='text'/></li>
                      <li><span>When did it occur?</span><input type='text'/></li>
                      <li><span>Where did it occur?</span><input type='text'/></li>
                      <li><span>What happened?</span><input type='text'/></li>
                      <li><span>why is this a grivevence?</span><input type='text'/></li>
                      <li><span>what adjustment is required?</span><input type='text'/></li>
                      <li className='width100'><span>Additional Comments</span><textarea></textarea></li>
                      <li><button type="submit" className="btn-4"><span>submit</span></button></li>
                    </ul>
                   </div>
                   </div>
                </form>
                  </div>
                  </div>
                </div>
              </div>
          </section>
          <Footer/>
    </>
  )
}
