import React from 'react'
import './Reviews.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { reviewdata } from '../Dataset'



import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
const Reviews = () => {
  return (
   <>
   <div className="reviews-main">
    <div className="reviewstop">
        <h1>Reviews</h1>
    </div>

    <div className="strtcpkrsmain">
        <Swiper
          effect="coverflow"
          grabCursor
          spaceBetween={20}
          centeredSlides
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {reviewdata.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="indicarocard">
                <div className="imgholder">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="spkrdesc">
                  <h1 className="spkrname">{item.name}</h1>
                  <h3 className="detailsspkr">{item.review}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-controler" id="controler">
            <div id="btndivholder">
              <div className="swiper-button-prev slider-arrow" id="prevbtn">
                <IoIosArrowBack className="bckarrow" />
              </div>
              <div className="swiper-button-next slider-arrow" id="nextbtn">
                <IoIosArrowForward className="nxtarrow" />
              </div>
            </div>
            <div className="swiper-pagination" id="paginationbtnsround"></div>
          </div>
        </Swiper>
      </div>
   </div>
   </>
  )
}

export default Reviews