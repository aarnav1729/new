import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Error";
import "../src/stylesheet.css";
import "../src/responsive.css";
import "../src/font/stylesheet.css";
import ScrollToTop from "./ScrollToTop";
import { Service } from "./Service";
// import { Projects } from "./Projects";
import { ESG } from "./ESG";
import { Leadership } from "./Leadership";
import { Contact } from "./Contact";
import { DownloadProfile } from "./DownloadProfile";
import { Career } from "./Career";
import { Solar } from "./Solar";
import { Module } from "./Module";
import { Chiranjeev } from "./Chiranjeev";
import { Revathi } from "./Revathi";
import { Sudhir } from "./Sudhir";
import { Jasveen } from "./Jasveen";
import { Sridhar } from "./Sridhar";
import { Vishnu } from "./Vishnu";
import { Abhishek } from "./Abhishek";
import { Nivathi } from "./Nivathi";
import { Priyadarshan } from "./Priyadarshan";
import { Chandra } from "./Chandra";
import { Nandkishore } from "./Nandkishore";
import { Sriniadapa } from "./Sriniadapa";
import { Undermaintaince } from "./Undermaintaince";
import { Sitemap } from "./Sitemap";
// import { Clientle } from "./Clientle";
import { Certification } from "./Certification";
import { Policy } from "./Policy";
import { Legal } from "./Legal";
import { Terms } from "./Terms";
import { InvestorRealation } from "./InvestorRelation";
import { InvestorRelationDetial } from "./InvestorRelationDetial";
import NewsroomNew from "./NewsroomNew";
import AckLetter from "./AckLetter";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/about-premier-energies"
            element={<About />}
          ></Route>
          {/* <Route exact path="/our-services" element={<Service />}></Route> */}
          {/* <Route exact path="/our-projects" element={<Projects />}></Route> */}
          <Route exact path="/sustainbility" element={<ESG />}></Route>
          <Route path="/leadership/:slug" element={<Leadership />}></Route>
          <Route
            exact
            path="/under-construction"
            element={<Undermaintaince />}
          ></Route>
          <Route exact path="/products/:slug" element={<Module />}></Route>
          <Route exact path="/sitemap" element={<Sitemap />}></Route>
          {/* <Route exact path="/clientele" element={<Clientle />}></Route> */}
          <Route
            exact
            path="/certification"
            element={<Certification />}
          ></Route>
          <Route
            exact
            path="/grievance-submitted"
            element={<AckLetter />}
          ></Route>
          <Route exact path="/privacy-policy" element={<Policy />}></Route>
          <Route exact path="/legal-disclaimer" element={<Legal />}></Route>
          <Route exact path="/terms-conditions" element={<Terms />}></Route>
          <Route exact path="/contact-us" element={<Contact />}></Route>
          <Route
            exact
            path="/downloadprofile"
            element={<DownloadProfile />}
          ></Route>
          <Route
            exact
            path="/investor-relations"
            element={<InvestorRealation />}
          ></Route>
          <Route
            exact
            path="/investor-relations/:slug/"
            element={<InvestorRelationDetial />}
          ></Route>
          <Route exact path="/career" element={<Career />}></Route>
          <Route exact path="/newsroom" element={<NewsroomNew />}></Route>
          <Route path="*" element={<Error />}></Route>
          {/* <Route exact path="/leader-ship-dtail/{slug}" element={<Leadership />} > */}
          {/* <Route exact path="/revathi-rohini-b" element={<Revathi />}></Route>
          <Route exact path="/sudhir-moola" element={<Sudhir />}></Route>
          <Route exact path="/jasveen-saluja" element={<Jasveen />}></Route>
          <Route exact path="/sridhar-narayan" element={<Sridhar />}></Route>
          <Route exact path="/vishnu-hazari" element={<Vishnu />}></Route>
          <Route exact path="/abhishek-loonker" element={<Abhishek />}></Route>
          <Route exact path="/niyathi-madasu" element={<Nivathi />}></Route>
          <Route
            exact
            path="/priyadharshan-bhatewara"
            element={<Priyadarshan />}
          ></Route>
          <Route
            exact
            path="/chandra-mauli-kumar"
            element={<Chandra />}
          ></Route>
          <Route
            exacts
            path="/nand-kishore-khandelwal"
            element={<Nandkishore />}
          ></Route>
          <Route exact path="/adapa-srinivas" element={<Sriniadapa />}></Route> */}
          {/* <Route
            exact
            path="/investor-relations"
            element={InvestorRealation}
          ></Route> */}
          {/* <Route exact path="/solar-cell" element={Solar}></Route>
        <Route exact path="/solar-module" element={Module}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
