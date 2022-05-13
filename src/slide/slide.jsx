import React from "react";

import './slide.scss';

const Slide = props => {
  return(
    <div className="slide">
      {props.children}
    </div>
  )
}
export default Slide;

export const SlideImg = props => {
  return(
    <div className="slider__pic">
      {props.children}
    </div>
  )
}

export const SlideContent = props => {
  return(
    <div className="slide__content">
      <p className="slide__content-text">
        {props.children}
      </p>
    </div>
  )
}