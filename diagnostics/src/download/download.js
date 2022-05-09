import React from "react";

import './download.scss';

const Download = (props) => {
  return(
    <div className="download">
      <button className="download__button download__modal-open"
      onClick={ props.onClick }
      >
          Получить коммерческое
      </button>
    </div>
  )
}

export default Download;