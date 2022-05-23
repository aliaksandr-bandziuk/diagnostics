import React from "react";

import './app.scss';

import Navbar from "../navbar";
import Hero from '../hero';
import Benefits from '../benefits';
import Services from '../services';
import Steps from '../steps';
import Step2 from "../step2";
import Step3 from "../step3";
import Gift from "../gift";
import Review from "../review";
import Cost from "../cost";
import Footer from "../footer";
import Form from '../form';

const App = () => {
  return(
    <div>
      <Navbar />
      <Hero/>
      <Benefits/>
      {/* <Services/> */}
      <Steps/>
      <Step2 />
      <Step3 />
      <Gift />
      <Review />
      <Cost />
      <Footer />
      <Form />
    </div>
  )
}

export default App;