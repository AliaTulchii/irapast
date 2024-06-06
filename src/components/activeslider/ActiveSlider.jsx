import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";

import { ServiceData } from "../../constants/index.js";
import { useTranslation } from "react-i18next";

const ActiveSlider = () => {
  const [activeTitle, setActiveTitle] = useState("");
  const {  t } = useTranslation(["global"]);

  return (
    <div>
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={transition1}
        className="slider__box"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="slider__container"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slider__item">
                <div
                  className="slider__bgrd"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                ></div>
                <div className="slider__hover">
                  <div className="slider__content">
                    <h1 className="slider__title">
                      {t(`title_key.${item.title_key}`)}
                    </h1>
                    <p className="slider__text">
                      {t(`content_key.${item.content_key}`)}
                    </p>

                    <button
                      className="slider__btn"
                      onClick={() => setActiveTitle(item.id)}
                    >
                      <item.icon className="slider__icon" />
                      {t("slider_button")}
                    </button>
                  </div>
                </div>
                <div className="slider__nonhover">
                  <h1 className="slider__title">
                    {t(`title_key.${item.title_key}`)}
                  </h1>
                  <button
                    className="slider__btn"
                    onClick={() => setActiveTitle(item.id)}
                  >
                    <item.icon className="slider__icon" />
                    {t("slider_button")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </motion.div>

      <ul className="collection__list">
        {ServiceData.filter((item) => item.id === activeTitle).map(
          ({ collection }) =>
            collection.map(({ image, id, text }) => (
              <li className="collection__item" key={id}>
                <img src={image} alt={text} />
              </li>
            ))
        )}
      </ul>
    </div>
  );
};

export default ActiveSlider;
