import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Leaderbtn } from "./Leaderbtn";
import { Link, useParams } from "react-router-dom";
import axios, { Axios } from "axios";

// Import the JSON data
// import leadershipData from "./json/Leadership.json";

export const Leadership = () => {
  const { slug } = useParams();
  const [leader, setLeader] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.premierenergies.com/api/leadership.php"
        );
        console.log(
          "this is the data from the api in the at ledaer ship page ",
          response
        );

        // Check if the response is successful
        if (response.status === 200) {
          // Filter the leadershipData and set the leader state
          const filteredLeader = response.data.find(
            (leader) => leader.slug.toLowerCase() === slug.toLowerCase()
          );
          setLeader(filteredLeader);
          console.log("filtered Data at leadership ", filteredLeader);
        }
      } catch (error) {}
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`https://premierenergies.com/leadership/${slug}`}
        />
      </Helmet>
      <div className="whitebg">
        <Header />
      </div>
      <section id="aboutleader">
        <div className="aboutleader">
          <div className="container">
            <div className="row">
              <div className="web-container">
                {leader && (
                  <div className="leadershipstn">
                    <div className="leadername">
                      <h1
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        {leader.name}
                      </h1>
                      <span
                        data-aos="fade-in"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        {leader.designation}
                      </span>
                    </div>
                    <div className="bio">
                      <div
                        className="leadershipimg"
                        data-aos="fade-left"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}${leader.image}`}
                          alt={leader.name}
                        />
                      </div>
                      <p
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        {leader.detail}
                      </p>
                    </div>
                  </div>
                )}
                <div className="webbtn leadershipalign">
                  <Link
                    className="btn-4"
                    to="/about-premier-energies#our-leadership"
                  >
                    <span>
                      <i className="icon"></i>Premier Leadership
                    </span>
                  </Link>
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
