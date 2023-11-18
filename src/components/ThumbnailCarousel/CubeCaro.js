/** @format */

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThumbsCarousel } from "../Dataset";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper";
import "./CubeCaro.css";
const CubeCaro = () => {
  const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
  };
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);
    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 0,
          shadowScale: 0,
        }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {ThumbsCarousel.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="imgdiccaro">
                <img
                  src={""}
                  data-src={item.img}
                  className={loaded ? "loaded" : "loading"}
                  onLoad={() => setIsLoaded(true)}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CubeCaro;
