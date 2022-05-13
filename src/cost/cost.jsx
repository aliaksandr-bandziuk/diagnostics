import React from "react";

import './cost.scss';

const Cost = () => {
  return(
    <section className="cost">
      <div className="conainer">
        <div className="cost__wrapper">
          <p className="cost__title"><span>Узнайте точную стоимость</span> обследования Вашего объекта</p>
          <div className="cost__content">
            <p className="cost__description">
              Отправьте нам техзадание, ответив на несколько вопросов, и Вы получите коммерческое предложение в течении 10-15 минут
            </p>
          </div>
          <button className="cost__btn">
            Узнать стоимость обследования
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cost;