import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/INVESTOR-RELATIONS.webp";
import Mbanner from "./images/solarir.jpg";
import axios from "axios";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export const InvestorRealation = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [pagedata, setPagedata] = useState([]);

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get(
        "https://www.premierenergies.com/api/investor_relation.php"
      );
      if (mounted) {
        setPagedata(response.data);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Investor Relations - Premier Energies</title>
        <meta
          name="description"
          content="Explore Exciting Career Opportunities at Premier Energies - Join the Team that Illuminates the World."
        />
        <link
          rel="canonical"
          href="https://premierenergies.com/investor-relations"
        />
        <meta
          property="og:url"
          content="https://premierenergies.com/investor-relations"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Investor-Relations - Premier Energies"
        />
        <meta
          name="og:description"
          content="Explore Exciting Career Opportunities at Premier Energies - Join the Team that Illuminates the World."
        ></meta>
      </Helmet>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={Banner} className="desktop-show" alt="banner" />
          <img
            src={Mbanner}
            className="mobile-show mobilebanner"
            alt="banner"
          />
        </div>
      </section>
      <div class="breadcrum pt-2">
        <div class="container">
          <div class="row">
            <div class="breadcumtab">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="career _investor_relation">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="careerbox">
                  <div className="title centerheading">
                    <div className="centerit _investor_relation">
                      <span className="colorborder">
                        <em></em>
                      </span>
                      <h3
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        Investor Relations
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="ir-container"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  {pagedata.map((item) => {
                    if (item.icon) {
                      return (
                        <div key={item.id} className="ir-item">
                          <Link
                            to={`/investor-relations/${item.slug}`}
                            className="ir-link"
                          >
                            <div className="ir-image-container">
                              <img src={item.icon} alt="" />
                            </div>
                            <h3 className="ir-title">{item.heading}</h3>
                          </Link>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
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
