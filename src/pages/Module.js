import React, {useState, useEffect} from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Helmet } from 'react-helmet'
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function createMarkup(content) {
    return {__html: decodeHTML(content)};
  }

export const Module = ({ match }) => {


  // API Code Start
  const slug = match.params.slug;
  const [pagedata, setPagedata] = useState([]);

  const [enquirefrm, setActive1] = useState("false");

  const handleToggle1 = () => {
    setActive1(!enquirefrm);
  };

  let history = useHistory();

  const [data, setData] = useState([]);
  useEffect(() => {
    
      let mounted = true;

      // Aos.init({ duration: 2000 });

      const loadData = async () => {
          const response = await axios.get(`https://www.premierenergies.com/api/product_details.php?prourl=${slug}`)
        
          if (mounted) {
              setPagedata(response.data);
              // setData(response.data.products.accordions);
          }

      }

      loadData();

      return () => {
          mounted = false;
      }

  }, []);

  console.log(pagedata);
  if (pagedata.length == 0) {
      console.log('no data');
      return null;
  }
  // API Code End
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: true,
    autoplaySpeed:8000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
  return (
    <>
    <Helmet>
    <title>Solar Module Manufacturers in India | High-Efficiency Solar PV Module Manufacturing Company in India | PremierEnergies</title>
    <meta name="description" content="Premier Energies - High-Efficiency Solar Module Manufacturing Company in India. With cutting-edge technology, Premier Energies offer a wide range of products that are outstanding in quality as well as sustainable."/>
    <link rel="canonical" href={"https://premierenergies.com/" + slug} />
    </Helmet>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={pagedata.products.bannerpic} />
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2 dangerouslySetInnerHTML={createMarkup(pagedata.products.banner_head)}></h2>
        </div>
        </div>
      </div>
    </section>
    <section id='Solar' className='pb-0'>
<div className='infrastructure'>
<div className='largecircleleft'></div>
<div className='midcircleright'></div>
<div className='smallcirclerightdark'></div>
  <div className='container'>
    <div className='row'>
      <div className='web-container'>
                    <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h1 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">{pagedata.products.category}</h1>
                  </div>
                  </div>
                  <h2 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500" className='heading2' dangerouslySetInnerHTML={createMarkup(pagedata.products.ptitle)}></h2>
                  <div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"  dangerouslySetInnerHTML={createMarkup(pagedata.products.pdesc)}></div>
            </div>            
      </div>
    </div>
    {pagedata.products.sub_category ?
    <div className='infra' id='types'>
    <div className='infrabox'>
    <div className='largecircleright'></div>
    <div className='smallcirclerightdark'></div>
      <div className='container'>
        <div className='web-container'>
        <div className='title centerheading'>
                    <div className='centerit'>
                    <h4 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500" className='subhead'>Types of {pagedata.products.category}</h4>
                  </div>
                  </div>
                  <div className='typesmodule'>
          {/* Loop Start */}
          {pagedata.products.sub_category.map(subCat =>(
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='infracont gredientbox' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
              <div className={subCat.power_output ? 'row' : 'row cellalign'}>
                {subCat.power_output ?
                <div className='col-md-7'>
                  <div className='corefeature'>
                  <h5>Core Features</h5>
                      <ul>
                        {subCat.core_features.map(coreF =>(
                      <li dangerouslySetInnerHTML={createMarkup(coreF.title)}></li>
                      ))}
                      </ul>
                      </div>
                </div>
                : null}
                <div className='col-md-5'>
                  <div className='preinfo'>
                  <div className='infotitle'>                    
                  <h4 dangerouslySetInnerHTML={createMarkup(subCat.cat_head)}></h4>
                  <h5 dangerouslySetInnerHTML={createMarkup(subCat.cate_title)}></h5>
                  </div>
                  {!subCat.power_output ?
                  <div className='corefeature f-cell'>
                  <h5>Core Features</h5>
                      <ul>
                        {subCat.core_features.map(coreF =>(
                      <li dangerouslySetInnerHTML={createMarkup(coreF.title)}></li>
                      ))}
                      </ul>
                      </div>
                      : null}
                {subCat.power_output ?
                  <><div className='powerput'>
                  <span>Power Output {subCat.poweroutputtitle ? subCat.poweroutputtitle : null}</span>
                </div>
                
                <ul>
                    {subCat.power_output.map(powerO =>(
                    <li dangerouslySetInnerHTML={createMarkup(powerO.title)}></li>
                    ))}
                    </ul></>
                      : null}
                      {subCat.power_output2 ?
                  <><div className='powerput'>
                  <span>Power Output {subCat.poweroutputtitle2 ? subCat.poweroutputtitle2 : null}</span>
                </div>
                
                <ul>
                    {subCat.power_output2.map(powerO2 =>(
                    <li dangerouslySetInnerHTML={createMarkup(powerO2.title)}></li>
                    ))}
                    </ul></>
                      : null}
                      </div>
                </div>
              </div>
              </div>
              
          </div>
          <div className='col-md-4'>
          <div className='infraslider' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                  <img src={subCat.cate_img} />
                  </div>
          </div>
        </div>
        </div>
        ))}
          {/* Loop End */}
        </div>
        </div>
      </div>
    </div>
    </div>
    : null}
  </div>
    </section>
    {pagedata.products.cahead ?
    <section id='coreadvantage'>
<div className='coreadvantage'>
<div className='largecircleleft'></div>
<div className='midcircleright'></div>
<div className='smallcirclerightdark'></div>
  <div className='container'>
    <div className='row'>
      <div className='web-container'>
                    <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h1 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">CORE ADVANTAGES</h1>
                  </div>
                  </div>
                  <h2 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500" className='heading2' dangerouslySetInnerHTML={createMarkup(pagedata.products.cahead)}></h2>
                  <div className='modulesrely'>
                    <div className='row'>
                      <div className='col-md-3 col-xs-12'>
                        <div className='modulebox'>
                          {/* Loop Start */}
                          {pagedata.products.c_advantage1.map(cAdvantage => (
                          <div className='moduleinfo'>
                            <img src={cAdvantage.icon} /> 
                            <h4>{cAdvantage.title}</h4>       
                            <p dangerouslySetInnerHTML={createMarkup(cAdvantage.descp)}></p>                 
                            </div>
                            ))}
                            {/* Loop End */}
                        </div>
                      </div>
                      <div className='col-md-5 col-xs-12'>
                        <div className='modulesolr'>
                          <img src={pagedata.products.caimg} />
                        </div>
                      </div>
                      <div className='col-md-3 col-xs-12'>
                        <div className='modulebox'>
                          {/* Loop Start */}
                          {pagedata.products.c_advantage2.map(cAdvantage2 => (
                          <div className='moduleinfo'>
                            <img src={cAdvantage2.icon} /> 
                            <h4>{cAdvantage2.title}</h4>       
                            <p dangerouslySetInnerHTML={createMarkup(cAdvantage2.descp)}></p>                 
                            </div>
                            ))}
                            {/* Loop End */}
                            
                        </div>
                      </div>
                    </div>
                  </div>
            </div>            
      </div>
    </div>
  </div>
    </section>
    : null}
    {pagedata.products.certifications ?
    <section id='certifications' className='p-0'>
        <div className='certifications'>
        <div className='largecircleleft'></div>
<div className='midcircleright'></div>
<div className='smallcirclerightdark'></div>
            <div className='container'>
              <div className='web-container'>
            <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Certifications</h2>
                  </div>
                  </div>
                  <div className='certificationtick'  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                    <ul>
                    {pagedata.products.certifications.map(certificates => (
                      <li dangerouslySetInnerHTML={createMarkup(certificates.title)}></li>
                    ))}
                    </ul>
                  </div>
                  <div className='certificationimg'  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                    <img src={pagedata.products.fimg} />                  
                    </div>
                    <h5  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500" dangerouslySetInnerHTML={createMarkup(pagedata.products.fline)}></h5>
                    {/* <div className='mbtns'>
                      <ul>
                        <li><a href='#'>Warranty Manual</a></li>
                        <li><a href='#'>Installation Manual</a></li>
                        <li><a href='#'>Cleaning Manual</a></li>
                      </ul>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    : null}
        <Footer />
    </>
  )
}
