import React from "react";
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper2.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay';

import Slide from '../slide';
import { SlideImg, SlideContent } from '../slide/slide';

import equipment1 from './equipment1.png';
import equipment2 from './equipment2.png';
import equipment3 from './equipment3.png';
import equipment4 from './equipment4.png';



export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      slidesPerView={4.5}
      spaceBetween={20}
      loop={true}
      grabCursor={true}
      autoplay={{delay: 3000}}
      breakpoints={{
        // when window width is >= 640px
        340: {
          slidesPerView: 1.5,
        },
        605: {
          slidesPerView: 1.5,
        },      
        768: {
          // width: 640,
          slidesPerView: 2.5,
        },
        1000: {
          // width: 768,
          slidesPerView: 3.5,
        },
        1300: {
          // width: 768,
          slidesPerView: 4.5,
        },
      }}
      // pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Slide>
          <SlideImg>
            <img src={equipment1} alt="" />
          </SlideImg>
          <SlideContent>
            Локатор арматуры “Profoscope”
          </SlideContent>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide>
          <SlideImg>
            <img src={equipment2} alt="" />
          </SlideImg>
          <SlideContent>
            Измеритель прочности бетона “ОНИКС-1”
          </SlideContent>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide>
          <SlideImg>
            <img src={equipment3} alt="" />
          </SlideImg>
          <SlideContent>
            Прибор ультразвукового действия “ПУЛЬСАР-2”
          </SlideContent>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide>
          <SlideImg>
            <img src={equipment4} alt="" />
          </SlideImg>
          <SlideContent>
            Измеритель прочности бетона “Молоток Шмидта”
          </SlideContent>
        </Slide>
      </SwiperSlide>
    </Swiper>
  );
};