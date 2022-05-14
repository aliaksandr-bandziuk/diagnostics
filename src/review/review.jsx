import React from "react";

import './review.scss';

const Review = () => {
  return(
    <section className="review">
      <div className="container">
        <div className="review__content">
        <p className="review__pretitle">Отзывы</p>
        <h2 className="review__title">Каждый второй клиент приходит к нам по рекомендации</h2>
        <p className="review__description">
          За прошлый год мы обследовали более 100 антенн, 800 труб и 500 зданий. Мы работали для БОТ, Бэст, Huawei, МТС, фабрики “Алеся” и многих других требовательных клиентов. И вот, что они пишут о нас:
        </p>
        </div>
      </div>
    </section>
  )
}

export default Review;