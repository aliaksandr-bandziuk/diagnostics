import React from "react";

import './stepText.scss';

const StepText = props => {
  return(
    <div className="step">
      {props.children}
    </div>
  )
}

export default StepText;