import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/awards-banner.jpg";
import PEVEL from "./images/PEVEL.jpg";
import Img01 from "./images/certificate01.png";
import Img25 from "./images/25.png";
import Img03 from "./images/certificate03.png";
import Img04 from "./images/certificate04.png";
import Img05 from "./images/certificate05.png";
import Img08 from "./images/certificate08.png";
import Img10 from "./images/certificate10.png";
import Img11 from "./images/certificate11.png";
import Img15 from "./images/certificate15.png";
import Img17 from "./images/certificate17.png";
import Img18 from "./images/certificate18.png";
import Img20 from "./images/certificate20.png";
import cert3 from "./certifications/cTUVus.pdf";
import cert4 from "./certifications/IEC61215_61730.pdf";
import cert6 from "./certifications/IEC62716.pdf";
import cert8 from "./certifications/IECMonofacial-TUVNORD.pdf";
import cert9 from "./certifications/ISO9001.pdf";
import cert10 from "./certifications/ISO14001.pdf";
import cert11 from "./certifications/ISO45001.pdf";
import cert12 from "./certifications/2024KiwaPVELTP.pdf";

const bannerStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  objectPosition: "center top",
};

const sectionStyle = {
  padding: 0,
  backgroundColor: "#121212",
};

export const Certification = () => {
  return (
    <>
      <Helmet>
        <title>Certifications of Excellence | Premier Energies</title>
        <meta
          name="description"
          content="Premier Energies Solar Modules have won 'Top performer' in PV Evolution Labs (PVEL)' 2023 PV module reliability scorecard."
        />
        <link
          rel="canonical"
          href="https://premierenergies.com/certification"
        />
        <meta
          property="og:url"
          content="https://premierenergies.com/certification"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Certifications of Excellence | Premier Energies"
        />
        <meta
          name="og:description"
          content="Premier Energies Solar Modules have won 'Top performer' in PV Evolution Labs (PVEL)' 2023 PV module reliability scorecard."
        ></meta>
        <style>{`
          .banner img {
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center top;
            margin-top: 50px; 
          }
        `}</style>
      </Helmet>
      <Header />
      <section id="banner" style={sectionStyle}>
        <div className="banner">
          <img src={Banner} alt="Certifications Banner" style={bannerStyle} />
        </div>
      </section>
      <section id="certification">
        <div className="certification">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="title centerheading">
                  <div className="centerit">
                    <span className="colorborder">
                      <em></em>
                    </span>
                    <h1
                      data-aos="fade-down"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Certifications
                    </h1>
                  </div>
                </div>
                <div className="content">
                  <p>
                    Premier Energy takes pride in holding several prestigious
                    certifications that speak for the quality of our offerings
                    and our management. We value our clients & employees
                    immensely, continuously working in their favour by meeting
                    and often even surpassing their expectations. Our
                    certifications thus serve as formal recognitions of the
                    standards we uphold for our products and services.{" "}
                  </p>
                  <p>
                    Here are some of the numerous certifications received by
                    Premier Energies over the years.
                  </p>
                </div>
                <div className="pevel_cert">
                  <li>
                    <a href={cert12} target="_blank" rel="noopener noreferrer">
                      <img src={PEVEL} alt="img1" />
                    </a>
                  </li>
                </div>
                <div className="certificates">
                  <ul>
                    <li>
                      <a href={cert4} target="_blank" rel="noopener noreferrer">
                        <img src={Img01} alt="img1" />
                      </a>
                    </li>
                    <li>
                      <a href={cert4} target="_blank" rel="noopener noreferrer">
                        <img src={Img03} alt="img3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={cert4}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img04} alt="img4" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iafcertsearch.org/certification/tchJrf4XTc66YmrNG6VlR09z"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img05} alt="img5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={cert3}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img08} alt="img8" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={cert8}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img10} alt="img10" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cdnbbsr.s3waas.gov.in/s3716e1b8c6cd17b771da77391355749f3/uploads/2024/04/202404291993936092.pdf#page=17"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img11} alt="img11" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={cert6}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img15} alt="img15" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={cert9}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img25} alt="img25" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={cert10}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img17} alt="img17" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={cert11}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img18} alt="img18" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={cert12}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Img20} alt="img20" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};