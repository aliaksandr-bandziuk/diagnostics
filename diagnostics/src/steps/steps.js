import React from "react";

import './steps.scss';

import bg from './slider-bg.png';
import hero from '../hero/photo.png';

const Steps = () => {
  return(
    <section className="steps">
      <div className="steps__title">Мы работаем в комплексе</div>
      <div className="steps__description">
        чтобы Вы не тратили время на поиск и организацию множества подрядчиков
      </div>
      <div className="step-one">
        <div className="step-one__img">
          <img src={bg} alt="" />
        </div>
        <div className="step-one__content">
          <div className="step-one__content-wrapper">
            <div className="step-one__header">
              <div className="step">
                <p className="step__text">Шаг №1</p>
              </div>
              <div className="header">
                <h2 className="header__title">Подготовительные работы</h2>
              </div>
            </div>
            <p className="step-one__content-text">
              Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д. 
            </p>
            <div className="quote">
              <div className="quote__pic">
                <img src={hero} alt="" />
              </div>
              <div className="quote__content">
                <p className="quote__content-text">
                  <i>“Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“</i>
                </p>
                <p className="quote__content-author">
                  Алексей, обследователь и главный инженер проектов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps;