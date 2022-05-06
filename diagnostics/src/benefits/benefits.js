import React from "react";

import './benefits.scss';

import listIcon from './icon.png';
import tv from './tv.png';

const Benefits = () => {
  return(
    <section className="benetits">
    <img className="device" src={tv} alt="" />
      <div className="container">
        <div className="benefits__wrapper">
          <div className="benetits__about">
            <h2 className="benefits__title">
              Мы работаем быстро и наши отчеты проходят согласование с первого раза
            </h2>
            <p className="benefits__text">
              Над вашим объектом работает целая команда: 3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для камеральных работ
            </p>
          </div>
          <div className="gain">
            <h3 className="gain__title">Вы и Ваши архитекторы получаете:</h3>
            <div className="gain__content">
              <div className="gain__img">
                <img src={listIcon} alt="" />
              </div>
              <div className="gain__txt">Отчет на который на 100% можно положиться </div>
            </div>
            <div className="gain__content">
              <div className="gain__img">
                <img src={listIcon} alt="" />
              </div>
              <div className="gain__txt">Экономию времени и прогнозируемость сроков</div>
            </div>
            <div className="gain__content">
              <div className="gain__img">
                <img src={listIcon} alt="" />
              </div>
              <div className="gain__txt">Предварительные результаты сразу на месте</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits;