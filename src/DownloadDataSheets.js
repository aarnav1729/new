import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Datasheets from "./json/DataSheets.json";
import DownloadIcon from "./components/Svg/DownloadIcon";

export const DownloadDataSheets = () => {
  const renderDataSheets = (category) => {
    return (
      <>
        <div className="col-12">
          <div className="centerit _investor_relation dataSheets">
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
              {Datasheets.downloadData[category].Heading}
            </h3>
          </div>
          <div
            className="col-lg-8 col-md-10 col-12 pt-md-3 pt-2 mx-auto download_dataSheet_ "
            data-aos="fade-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-duration="700"
          >
            {Datasheets.downloadData[category].Data.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 col-12"
              >
                <div className="pdf__card">
                  <div className="cnt">
                    <div
                      className="pdf_text"
                      title={item.text}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></div>
                    <div className="pdf_download_btn">
                      <DownloadIcon />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>Download Datasheets - Premier Energies</title>
      </Helmet>
      <div className="whitebg">
        <Header />
      </div>

      <section className="pt-2">
        <div className="career pt-3 _investor_relation">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className=" mx-auto ">
                  <div className="title centerheading">
                    <div className="centerit">
                      {/* <span className="colorborder">
                        <em></em>
                      </span> */}
                      <h1
                        data-aos="fade-down"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        Download Datasheets
                      </h1>
                    </div>
                  </div>
                  <div className="d-flex gap-4 col-12  flex-column">
                    {renderDataSheets("SolarModule")}
                    {renderDataSheets("SolarCells")}
                  </div>
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
