import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Lazy, EffectCube } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

import CarouselPic1 from "../../images/hydrefs/DundrumCo-Ord 03.JPG";
import CarouselPic2 from "../../images/hydrefs/Picture1.jpg";
import CarouselPic3 from "../../images/hydrefs/Resim01.png";
import CarouselPic4 from "../../images/hydrefs/Resim02.jpg";
import CarouselPic5 from "../../images/hydrefs/Resim03.jpg";
import CarouselPic6 from "../../images/hydrefs/Resim04.jpg";
import CarouselPic7 from "../../images/hydrefs/Resim05.png";
import CarouselPic8 from "../../images/hydrefs/Resim06.png";
import CarouselPic9 from "../../images/hydrefs/Resim07.jpg";
import CarouselPic10 from "../../images/hydrefs/Resim08.jpg";
import CarouselPic11 from "../../images/hydrefs/Resim09.jpg";
import CarouselPic12 from "../../images/hydrefs/Resim10.jpg";
import CarouselPic13 from "../../images/hydrefs/T20170508_094652.jpg";
import CarouselPic14 from "../../images/hydrefs/TDSCN0805.JPG";
const HydrefsCarousel = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        lazy={true}
        navigation={true}
        modules={[Lazy, Pagination, Navigation, EffectCube]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={CarouselPic1} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic2} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic3} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic4} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic5} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic6} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic7} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic8} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic9} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic10} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic11} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic12} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic13} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouselPic14} className="swiper-lazy" alt="" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HydrefsCarousel;
