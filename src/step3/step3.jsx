import React from "react";

import './step3.scss';

import StepText from "../stepText";

import listIcon from '../benefits/icon.png';
import bg from './step3-bg.png';

const Step3 = props => {
  return(
    <section className="step3">
      <div className="step3__wrapper">
        <div className="split step3__left">
          <div className="step3__content-wrapper">
            <div className="content">
              <div className="content__title-wrapper">
                <StepText>
                  <p className="step__text step__text3">Шаг №3</p>
                </StepText>
                <div className="content__title">
                  <h2 className="content__title-text">Обработка полученных данных</h2>
                </div>
              </div>
              <p className="content__description">
                Детальный отчет с результатами обследования Вы получите через 7 дней. И на его основании сможете определить судьбу объекта и прогнозировать затраты.
              </p>
              <div className="content__features">
              <div className="content__feature">
                <div className="feature__pic">
                  <img src={listIcon} alt="" />
                </div>
                <div className="feature__text">
                  <p>
                    Мы оценим техническое состояние объекта и присвоим ему категорию
                  </p>
                </div>
              </div>
              <div className="content__feature">
                <div className="feature__pic">
                  <img src={listIcon} alt="" />
                </div>
                <div className="feature__text">
                  <p>
                    Объясним причины появления дефектов и повреждений в конструкциях
                  </p>
                </div>
              </div>
              <div className="content__feature">
                <div className="feature__pic">
                  <img src={listIcon} alt="" />
                </div>
                <div className="feature__text">
                  <p>
                    Сформируем техзадание на проектирование мероприятий по восстановлению, усилению или ремонту конструкций, оборудования и сетей
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="split step3__right">
          <div className="step3__right-pic"></div>
        </div>
      </div>
    </section>
  )
}

export default Step3;