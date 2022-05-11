import React from "react";
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper1.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay';

import slide1 from './slider-bg1.png';
import slide2 from './slider-bg2.png';
import slide3 from './slider-bg3.png';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      autoplay={{delay: 3000}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};