import React from "react";

import './steps.scss';

import step1 from './step1.png'

const Steps = () => {
  return(
    <section className="steps">
      <div className="steps__title">Мы работаем в комплексе</div>
      <div className="steps__description">
        чтобы Вы не тратили время на поиск и организацию множества подрядчиков
      </div>
      <div className="step-one">
        <div className="step-one__img">
          <img src={step1} alt="" />
        </div>
        <div className="step-one__content">
          
        </div>
      </div>
    </section>
  )
}

export default Steps;