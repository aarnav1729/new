import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Helmet } from "react-helmet";
import CustomAcc from "./CustomAcc";
import { Link, useParams } from "react-router-dom";

export const InvestorRelationDetial = () => {
  const { slug } = useParams();
  const slugToText = (slug) => {
    let text = slug.replace(/-/g, " ");
    text = text.replace(/\b\w/g, (char) => char.toUpperCase());

    return text;
  };

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
      <div className="whitebg">
        <Header />
      </div>
      <div class="breadcrum pt-2">
        <div class="container">
          <div class="row">
            <div class="breadcumtab">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/investor-relations">Investor Relations</Link>
                </li>
                <li>{slugToText(slug)}</li>
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
                        {slugToText(slug)}
                      </h3>
                    </div>
                  </div>
                </div>
                <CustomAcc />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};