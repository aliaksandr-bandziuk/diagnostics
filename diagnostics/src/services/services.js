import React from "react";

import Card from '../card';

import './services.scss';

const Services = () => {
  return(
    <section className="services">
        <p className="services__pretitle">Услуги</p>
        <h2 className="services__title">
          Выполняем как комплексное обследование, так и отдельные виды работ
        </h2>
        <div className="services__cards"></div>
    </section>
  )
}

export default Services;