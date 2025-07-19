import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Slide1, Slide2 } from './HeroComponents';



const Hero = () => {
  

    const slides = [Slide1, Slide2];

  return (
    <>
         <div className="w-full h-full flex items-center justify-center ">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((Component, index) => (
          <SwiperSlide key={index}>
  <div className="flex justify-center items-center h-[70vh]">
    <div className="w-[80vw] h-full">
      <Component />
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </div>
       
    </>
  );
};


export default Hero



