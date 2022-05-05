import React from "react";

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
            <div className="data__text">
              Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;