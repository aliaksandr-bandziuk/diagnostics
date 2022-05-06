import React from "react";

import Download from '../download';

import './hero.scss';



const Hero = () => {
  return(
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__content-text">
            <h1 className="hero__title">Независимое обследование зданий и сооружений</h1>
            <p className="hero__text">антенн, труб, теплосетей, катализаций и других объектов</p>
          </div>
          <div className="hero__content-data">
            <Download/>
            <div className="data__text">
              Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер
            </div>
          </div>
        </div>
        <div className="hero__description">
          <div className="points">
            <div className="point">
              <div className="point__number">
                <p className="number">01</p>
              </div>
              <div className="point__text">
                <p className="text">Начинаем работать без аванса</p>
              </div>
            </div>
            <div className="point">
              <div className="point__number">
                <p className="number">02</p>
              </div>
              <div className="point__text">
                <p className="text">Предоставляем отсрочку платежа</p>
              </div>
            </div>
            <div className="point">
              <div className="point__number">
                <p className="number">03</p>
              </div>
              <div className="point__text">
                <p className="text">Всегда называем справедливую цену</p>
              </div>
            </div>
          </div>
          <div className="avatar"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;