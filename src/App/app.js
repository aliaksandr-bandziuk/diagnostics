import React from "react";

import './app.scss';

import Navbar from "../navbar";
import Hero from '../hero';
import Benefits from '../benefits';
import Services from '../services';
import Steps from '../steps';

const App = () => {
  return(
    <div>
      <Navbar />
      <Hero/>
      <Benefits/>
      <Benefits/>
      <Services/>
      <Steps/>
    </div>
  )
}

export default App;