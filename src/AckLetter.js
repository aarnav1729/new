import React from "react";
import {
  getGrievantName,
  getCaseId,
  getFormSubmitted,
} from "./components/Utils";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { ReactSession } from "react-client-session";
import { SlideshowLightbox } from "lightbox.js-react";

const AckLetter = () => {
  const grievantName = getGrievantName();
  const caseId = getCaseId();
  const formSubmitted = getFormSubmitted();
  // console.log(formSubmitted);

  return (
    <>
      <div className="whitebg">
        <Header />
      </div>
      <div className="breadcrum pt-2">
        <div className="container">
          <div className="row">
            <div className="breadcumtab">
              <ul>
                <li>  
                  <a href="/">Home</a>
                </li>
                <li>Gravience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section id="privacy-policy">
        <div className="privacy-policy">
          <div className="container">
            <div className="row justify-content-center">
              {formSubmitted == 1 ? (
                <div className="col-md-8 col-12">
                  <div>
                    <div className="">
                      <p style={{ fontWeight: "bold" }}>Dear {grievantName},</p>
                      <p>
                        Thank you for registering your Grievance with us and
                        bringing your concern to our attention. We acknowledge
                        receipt of your grievance and assure you that it will be
                        handled with the utmost priority and seriousness.
                      </p>
                      <p>
                        Your grievance has been documented, and our team is
                        reviewing the details provided. We understand the
                        importance of resolving grievances promptly and will
                        strive to address your concerns within 35 working days.
                      </p>
                      <p>
                        To facilitate efficient tracking and resolution, we have
                        assigned your grievance a unique Case ID number:{" "}
                        <span style={{ fontWeight: "bold" }}>{caseId}</span>.
                        Please use this Case ID for any future reference or
                        inquiries related to your grievance.
                      </p>
                      <p>
                        Please be assured that we take all grievances seriously
                        and are committed to ensuring your voice is heard. We
                        will keep you updated on the progress of our
                        investigation and any actions taken to address the
                        issues raised.
                      </p>
                      <p>
                        If you have any further questions or require additional
                        information, please do not hesitate to contact us. Your
                        feedback is valuable to us, and we appreciate your
                        patience and cooperation throughout this process.
                      </p>
                      <p style={{ marginBottom: "0" }}>
                        Thank you for your understanding.
                      </p>
                      <div
                        className="flex-column flex-md-row"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "20px",
                        }}
                      >
                        <p style={{ fontWeight: "bold", margin: "0" }}>
                          Best regards,
                        </p>
                        <div>
                          <p style={{ fontWeight: "bold", margin: "0" }}>
                            Grievance Officer
                          </p>
                          <p style={{ margin: "0" }}>
                            grievance@premierenergies.com
                          </p>
                          <p style={{ margin: "0" }}>
                            Premier Energies Limited
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-center col-12">
                  <h4 className="text-center not_accpt_disc col-12">
                    You are not permitted to view the materials in this section
                    of the website.
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AckLetter;
