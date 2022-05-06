import React from "react";

import './app.scss';

// fonts
import '../fonts/Gilroy/Gilroy-Semibold.eot';

import Header from '../header';
import Hero from '../hero';
import Benefits from '../benefits';
import Services from '../services';
import Steps from '../steps';

const App = () => {
  return(
    <div>
      <Header/>
      <Hero/>
      <Benefits/>
      <Services/>
      <Steps/>
    </div>
  )
}

export default App;