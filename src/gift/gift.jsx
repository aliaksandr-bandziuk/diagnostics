import React from "react";

import Download from '../download';

import './gift.scss';

const Gift = () => {
  return(
    <section className="gift">
      <div className="container">
        <div className="gift__main">
          <div className="gift__box">
            <h2 className="box__title">
              Закажите комплексное обследование и получите тепловизионную съемку <span className="title-highlight">в подарок</span>
            </h2>
          </div>
          <div className="gift__box">
            <p className="box__description">
              Мы первая в Беларуси компания в составе которой есть аккредитованная тепловизионная лаборатория. 
            </p>
            <p className="box__description">
              Наши аттестованные термографисты найдут утечки тепла, определят скрытые дефекты конструкции и подберут систему утепления, которую выдержат стены.
            </p>
          </div>
          <div className="gift__box gift__box-right">
              <Download />
              <div className="gift__content">
                <p>
                  Отправьте техзадание и получите коммерческое предложение в течении 15 минут
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gift;