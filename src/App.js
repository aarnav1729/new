import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Error";
import "../src/stylesheet.css";
import "../src/responsive.css";
import "../src/font/stylesheet.css";
import ScrollToTop from "./ScrollToTop";
import { ESG } from "./ESG";
import { Leadership } from "./Leadership";
import { Contact } from "./Contact";
import { DownloadProfile } from "./DownloadProfile";
import {DownloadDataSheets} from "./DownloadDataSheets";
import { Career } from "./Career";
import { Module } from "./Module";
import { Undermaintaince } from "./Undermaintaince";
import { Sitemap } from "./Sitemap";
import { Certification } from "./Certification";
import { Policy } from "./Policy";
import { Legal } from "./Legal";
import { Terms } from "./Terms";
import { InvestorRealation } from "./InvestorRelation";
import { InvestorRelationDetial } from "./InvestorRelationDetial";
import NewsroomNew from "./NewsroomNew";
import SolarCalc from "./solar-calculator";
import AckLetter from "./AckLetter";

console.log("app.js");

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
          <Route exact path="/sustainbility" element={<ESG />}></Route>
          <Route path="/leadership/:slug" element={<Leadership />}></Route>
          <Route
            exact
            path="/under-construction"
            element={<Undermaintaince />}
          ></Route>
          <Route exact path="/products/:slug" element={<Module />}></Route>
          <Route exact path="/sitemap" element={<Sitemap />}></Route>
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
            path="/download-datasheets"
            element={<DownloadDataSheets />}
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
          {/* <Route exact path="/solar-calculator" element={<SolarCalc />}></Route> */}
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
