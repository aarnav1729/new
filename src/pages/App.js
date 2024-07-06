import React from "react";
import Home from "./Home";
import About from "./About";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "./Error";
import '../src/stylesheet.css';
import '../src/responsive.css';
import '../src/font/stylesheet.css'
import ScrollToTop from "./ScrollToTop";
import { Service } from "./Service";
import { Projects } from "./Projects";
import { ESG } from "./ESG";
import { Leadership } from "./Leadership";
import { Contact } from "./Contact";
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
import { Undermaintaince } from "./Undermaintaince";
import { Sitemap } from "./Sitemap";
import { Clientle } from "./Clientle";
import { Certification } from "./Certification";
import { Policy } from "./Policy";
import { Legal } from "./Legal";
import { Terms } from "./Terms";

const App = () => {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Home}></Route>      
        <Route exact path="/about-premier-energies" component={About}></Route>
        <Route exact path="/our-services" component={Service}></Route>
        <Route exact path="/our-projects" component={Projects}></Route>      
        <Route exact path="/sustainbility" component={ESG}></Route>    
        <Route exact path="/surender-pal-singh" component={Leadership}></Route>
        <Route exact path="/chiranjeev-saluja" component={Chiranjeev}></Route>
        <Route exact path="/revathi-rohini-b" component={Revathi}></Route>
        <Route exact path="/sudhir-moola" component={Sudhir}></Route>    
        <Route exact path="/jasveen-saluja" component={Jasveen}></Route>
        <Route exact path="/sridhar-narayan" component={Sridhar}></Route>
        <Route exact path="/vishnu-hazari" component={Vishnu}></Route>
        <Route exact path="/abhishek-loonker" component={Abhishek}></Route> 
        <Route exact path="/niyathi-madasu" component={Nivathi}></Route>   
        <Route exact path="/priyadharshan-bhatewara" component={Priyadarshan}></Route> 
        <Route exact path="/chandra-mauli-kumar" component={Chandra}></Route>     
        <Route exact path="/contact-us" component={Contact}></Route>
        <Route exact path="/career" component={Career}></Route>
        <Route exact path="/products/:slug" component={Module}></Route>
        <Route exact path="/under-construction" component={Undermaintaince}></Route>
        <Route exact path="/sitemap" component={Sitemap}></Route>
        <Route exact path="/clientele" component={Clientle}></Route>
        <Route exact path="/certification" component={Certification}></Route>
        <Route exact path="/privacy-policy" component={Policy}></Route>
        <Route exact path="/legal-disclaimer" component={Legal}></Route>
        <Route exact path="/terms-conditions" component={Terms}></Route>
        <Route component={Error}></Route>
      </Switch>
      </Router>
    </>
  );
};

export default App;