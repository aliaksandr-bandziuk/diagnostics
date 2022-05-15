import { Switch } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { HeaderForm } from './HeaderForm';

const StepOne = () => <>Step 1</>
const StepTwo = () => <>Step 2</>
const StepThree = () => <>Step 3</>
const Result = () => <>Result</>

// const HeaderForm = () => <h2>React Form</h2>

const Form = () => {
  return (
    <>
      <HeaderForm />
      <Router>
        <Switch>
          <Route exact path="/" compotent={StepOne} />
          <Link>
          <Route path="/steptwo" to="/steptwo" compotent={StepTwo} />
          </Link>
          <Route path="/stepthree" compotent={StepThree} />
          <Route path="/result" compotent={Result} />
        </Switch>
      </Router>
    </>
  )
}

export default Form;