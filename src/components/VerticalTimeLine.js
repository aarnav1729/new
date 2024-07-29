import React from "react";
import image1 from "../images/icn1.png";
import image2 from "../images/icn2.png";
import image3 from "../images/icn3.png";
import image4 from "../images/icn4.png";
import image5 from "../images/icn5.png";
import image6 from "../images/icn6.png";

const VerticalTimeline = () => {
  const grievanceReportingGuide = [
    {
      step: 1,
      color: "#fcb91d",
      logo: image1,
      title: "Grievance Admissibility Criteria",
      steps: [
        "Individuals or communities affected by Premier Energies Operation, active for less than 15 months, can lodge complaints.",
        "They must assert negative impacts experienced or anticipated.",
      ],
    },
    {
      step: 2,
      color: "#81c070",
      logo: image2,
      title: "Reporting Channel",
      steps: [
        "Access the online form at <a href='https://www.premierenergies.com/contact-us' target='_blank'>www.premierenergies.com/contact-us</a> or click the link provided.",
        "Complete all fields marked as mandatory.",
      ],
    },
    {
      step: 3,
      color: "#10a8c7",
      logo: image3,
      title: "Grievance Content Requirements",
      steps: [
        "Clearly identify the Operation under complaint and state its adverse impacts.",
        "Specify the individuals submitting the complaint and if they are represented by a designated authority, provide the representative's name.",
      ],
    },
  ];

  const grievanceResolutionProcess = [
    {
      step: 1,
      title: "Acknowledgement of Complaint",
      color: "#fcb91d",
      logo: image4,
      steps: [
        "Notify the complainant of receipt.",
        "Assess if the complaint qualifies for processing.",
      ],
    },
    {
      step: 2,
      title: "Review of the Issue",
      color: "#81c070",
      logo: image5,
      steps: [
        "Update the complainant on the case status.",
        "Request further details if necessary.",
      ],
    },
    {
      step: 3,
      title: "Resolution of Grievance",
      color: "#10a8c7",
      logo: image6,
      steps: [
        "Present a proposed solution and timeline. Upon consent, Grievance Redressal Committee initiates implementation, overseen by Grievance Redressal Officer until resolution.",
        "Close the complaint when the solution is fully implemented, communicated, and officially resolved.",
      ],
    },
  ];

  return (
    <div className="vertical-timeline">
      <div className="timeline-container">
        <div className="heading2">Grievance Reporting</div>
        {grievanceReportingGuide.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <div className="timeline-icon">
                <img src={item.logo} alt={item.title} />
              </div>
              <div className="timeline-data">
                <h5>{item.title}</h5>
                <ol>
                  {item.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      dangerouslySetInnerHTML={{ __html: step }}
                    />
                  ))}
                </ol>
              </div>
              <div
                className="timeline-step"
                style={{ backgroundColor: item.color }}
              >
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="timeline-container">
        <div className="heading2">Grievance Resolution</div>
        {grievanceResolutionProcess.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content ">
              <div className="timeline-icon">
                <img src={item.logo} alt={item.title} />
              </div>
              <div className="timeline-data">
                <h5>{item.title}</h5>
                <ol>
                  {item.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              <div
                className="timeline-step"
                style={{ backgroundColor: item.color }}
              >
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;