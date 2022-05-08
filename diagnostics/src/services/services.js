import React from "react";

import Card from '../card';

import './services.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import service1 from './service-1.png';
import service2 from './service-2.png';
import service3 from './service-3.png';
import service4 from './service-4.png';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {

  useEffect(() => {

    let scroll_tl = gsap.timeline({
      scrollTrigger: {
          trigger: '.services',
          start: "top center",
          // pin: true,
          scrub: true,
          end: "+=100",
          // markers: true,
      }
    }),
    facts = [...document.querySelectorAll('.card')]
    scroll_tl.to('.services h2', {
        scale: 1.1,
        duration: 2,
        ease: "slow"
    })
    scroll_tl.to(facts, {
        xPercent: -85 * (facts.length - 1),
        scrollTrigger: {
            trigger: ".cards__track",
            start: "center center",
            pin: true,
            // horizontal: true,
            pinSpacing: true,
            // markers: true,
            scrub: 1,
            snap: 1 / (facts.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            // end: () => `+=${smallFactsContainer.offsetWidth}`
            end: () => `+=600`
        }
    });

  }, []);


  
  return(
    <>
    <section className="services">
        <p className="services__pretitle">Услуги</p>
        <h2 className="services__title">
          Выполняем как комплексное обследование, так и отдельные виды работ
        </h2>
        <div className="services__cards">
        <div className="cards__track">
            {/* <div className="marginer-left"></div> */}
            <div className="card">
              <img src={service1} alt="" className="card__img" />
              <h3 className="card__title">Общее обследование</h3>
              <p className="card__text">
                Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.
              </p>
              <div className="card__button">
                <a class="arrow-3" href="#link">Подробнее
                    <svg class="arrow-3-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#FEE040" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-3-iconcircle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-3-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={service2} alt="" className="card__img" />
              <h3 className="card__title">Тепловизионная съемка</h3>
              <p className="card__text">
                Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания
              </p>
              <div className="card__button">
                <a class="arrow-3" href="#link">Подробнее
                    <svg class="arrow-3-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#FEE040" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-3-iconcircle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-3-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={service3} alt="" className="card__img" />
              <h3 className="card__title">Телеинспекция инженерных сетей</h3>
              <p className="card__text">
                Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров
              </p>
              <div className="card__button">
                <a class="arrow-3" href="#link">Подробнее
                    <svg class="arrow-3-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#FEE040" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-3-iconcircle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-3-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={service4} alt="" className="card__img" />
              <h3 className="card__title">Тахеометрическая съемка</h3>
              <p className="card__text">
                Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве
              </p>
              <div className="card__button">
                <a class="arrow-3" href="#link">Подробнее
                    <svg class="arrow-3-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#FEE040" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-3-iconcircle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-3-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                </a>
              </div>
            </div>
            {/* <div className="marginer-right"></div> */}
          </div>
        </div>
        
        {/* <Copy /> */}
    </section>
    </>
  )
}

// export default Services;