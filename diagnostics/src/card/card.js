import React from "react";

import './card.scss';

const Card = (props) => {
  return(
    <div className="card">
      <div className="card__image">
        {/* <img src="@img" alt="" /> */}
      </div>
      <div className="card__content"></div>
    </div>
  )
}

export default Card;