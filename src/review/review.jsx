import React from "react";

import LightboxBody from "../lightbox";

import './review.scss';

import rev1 from '../lightbox/rev1.jpg';
import rev2 from '../lightbox/rev2.jpg';
import rev3 from '../lightbox/rev3.jpg';
import rev4 from '../lightbox/rev4.jpg';
import rev5 from '../lightbox/rev5.jpg';

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
        <div className="review__pictures">
          <div className="picture">
            <figure>
              <img src={rev1} alt="" />
              <figcaption>ООО "Лидахлебпродукт"</figcaption>
            </figure>
          </div>
          <div className="picture">
          <figure>
              <img src={rev5} alt="" />
              <figcaption>ООО "Альпиндустрия"</figcaption>
            </figure>
          </div>
          <div className="picture">
          <figure>
              <img src={rev3} alt="" />
              <figcaption>Вагоноремонтный завод</figcaption>
            </figure>
          </div>
          <div className="picture">
          <figure>
              <img src={rev4} alt="" />
              <figcaption>Life :)</figcaption>
            </figure>
          </div>
        </div>
        <div className="lightbox__container">
          <LightboxBody />
        </div>
      </div>
    </section>
  )
}

export default Review;