import React from "react";
import IdeaCards from "./components/NewsCard";
import newsData from "./json/NewsData.json";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import banner from "./images/news-room-banner.webp";

const NewsroomNew = () => {
  console.log(newsData.articles);
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={banner} />
          <div className="container">
            <div className="homcolft position-absolute position-right left">
              <span className="colorborder">
                <em></em>
              </span>
              <h2
                data-aos="fade-down"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-once="true"
                data-aos-duration="500"
              >
                Transition to a brighter tomorrow
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id="privacy-policy">
        <div className="privacy-policy">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title centerheading">
                  <div className="centerit">
                    <span className="colorborder">
                      <em></em>
                    </span>
                    <h2
                      data-aos="fade-down"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      OUR NEWSROOM
                    </h2>
                  </div>
                </div>

                <IdeaCards articles={newsData.articles} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewsroomNew;
