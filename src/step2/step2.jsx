import React from "react";

import './step2.scss';

import Swiper from '../swiper2';

import StepText from "../stepText";

const Step2 = props => {
  return(
    <section className="step2">
      <StepText>
        <p className="step__text step__text-center">Шаг №2</p>
      </StepText>
      <div className="step2__content">
        <h2 className="step2__title">Детальное инструментальное обследование</h2>
        <p className="step2__description">
        Мы понимаем насколько важны сроки и сколько может стоить день задержки. Поэтому Вы никогда не услышите от нас слов “надо подождать пару дней, пока освободится арендное оборудование” - мы укомплектованы всем необходимым
        </p>
      </div>
      <div className="slider__wrapper">
        <Swiper />
      </div>
    </section>
  )
}

export default Step2;