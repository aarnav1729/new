import React, { useState } from "react";
import VerticalTimeline from "./VerticalTimeLine";
import GravienceForm from "./GravienceForm";

const Gravience = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeTab, setActiveTab] = useState(null);

  const handleAccClick = (tabId) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };

  const tabData = [
    {
      id: 0,
      title: "Reporting Guide & Resolution Process",
      content: <VerticalTimeline />,
    },
    { id: 1, title: "Report a Grievance", content: <GravienceForm /> },
  ];
  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  return (
    <section id="grievance" className="pb-0">
      <div className="grievance">
        <div className="container">
          <div className="web-container">
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
                  Grievance
                </h2>
              </div>
            </div>
            <div>
              <div className="grievance-container">
                <h2 className="grievance-heading">
                  Grievance redressal mechanism
                </h2>
                <p className="grievance-description">
                  The Grievance Redressal Mechanism (GRM) serves as a platform for
                  individuals and communities to directly lodge complaints with
                  Premier Energies Limited. It offers a channel to address
                  concerns arising from Premier Energies Operations activities
                  that are perceived to have, or may potentially have, negative
                  impacts on individuals, communities, or the environment. By
                  facilitating timely review and resolution of grievances, the
                  GRM strengthens Premier Energies' commitment to responsiveness
                  and accountability towards its stakeholders.
                </p>
                <div className="filling-heading">FILLING GRIEVANCE</div>
                <div className="grievance-notice">
                  <p>
                    Any individual or community who believes that a Premier
                    Energies Operation has or is likely to, adversely affect
                    them can submit a complaint.
                  </p>
                </div>
                <div>
                  <div className="d-flex flex-column gap-lg-5 gap-3 mt-3 d-tabs">
                    <div className="gravience_tabs">
                      <button
                        className={
                          selectedTab === 0
                            ? "gravience_active btn-4"
                            : " btn-4"
                        }
                        onClick={() => handleTabClick(0)}
                      >
                        <span>Reporting Guide & Resolution Process</span>
                      </button>
                      <button
                        className={
                          selectedTab === 1
                            ? "gravience_active btn-4"
                            : " btn-4"
                        }
                        onClick={() => handleTabClick(1)}
                      >
                        <span>Report a Grievance</span>
                      </button>
                    </div>
                    <div className="tab-content">
                      {selectedTab === 0 && (
                        <div className="fade-in">
                          <VerticalTimeline />
                        </div>
                      )}

                      {selectedTab === 1 && (
                        <div className="fade-in">
                          <GravienceForm />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-lg-5 gap-2 mt-1 d-acc">
                    {tabData.map((item) => (
                      <div className="col-12" key={item.id}>
                        <button
                          className={`btn-4 ${
                            item.id === activeTab
                              ? "fade-in gravience_active"
                              : " fade-in"
                          }`}
                          onClick={() => handleAccClick(item.id)}
                        >
                          <span>{item.title}</span>
                        </button>
                        {item.id === activeTab && (
                          <div className="accordion-content">
                            {item.content}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gravience;