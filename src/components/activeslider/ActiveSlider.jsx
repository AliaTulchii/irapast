import React, { useState } from 'react'
import{Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import 'swiper/css/free-mode'
import './style.css'

import { motion } from 'framer-motion'
import { transition1 } from '../../transitions'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import {  Pagination, EffectCoverflow,Navigation } from 'swiper/modules'

import { ServiceData } from '../../constants/index'


const ActiveSlider = () => {
    const [activeTitle, setActiveTitle] = useState("");


    return (
      <div>
        <motion.div
      initial={{ scale: 0.7}}
      animate={{ scale: 1}}
      exit={{ scale: 0}}
      transition={transition1}
          className='slider__box'>
          <Swiper
        //   breakpoints={{
        //           340: {
        //           slidesPerView: 2,
        //           spaceBetween: 10
        //           },
        //           1200: {
        //             slidesPerView: 2,
        //             spaceBetween: 15
        //       }
              
        //       }}
              
        //       freeMode={true}
        //       pagination={{
        //           clickable: true,
        //       }}
                    //       modules={[FreeMode, Pagination]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }
                    }
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
              className='slider_container'
          >
              {ServiceData.map((item) => (
                  <SwiperSlide key={item.id}>
                      <div className='slider__item'>
                          <div className='slider__bgrd' style={{backgroundImage: `url(${item.backgroundImage})`}}></div>
                          <div                              
                              className='slider__hover'>
                              <div className='slider__content'>               
                             
                              <h1 className='slider__title'>{item.title}</h1>
                              <p className='slider__text'>{item.content}</p>
                              
                              <button  className='slider__btn'  onClick={() => setActiveTitle(item.title)}>
                                  <item.icon className='slider__icon' />
                                  Більше фото
                              </button>
                          </div>
                          </div>
                          <div className='slider__nonhover'>
                               <h1 className='slider__title'>{item.title}</h1>
                          </div>
                         
                      </div>
                  </SwiperSlide>
                  
              ))}
                    <div className='slider-controler'>
                        <div className='swiper-pagination'></div>
                    </div>
      </Swiper>
            </motion.div>
            
            
            <ul className='collection__list'>
        {ServiceData.filter((item) => item.title === activeTitle).map(({ collection }) => (
          collection.map(({ image, id, text }) => (
            <li className='collection__item' key={id}>
              <img src={image} alt={text} />
            </li>
          ))
        ))}
      </ul>

            {/* <ul className='toggle__list'>
                {
                IndividData.map(({ image, id, text }) => {
                    return (                        
                            <li className='toggle__item' key={id}>
                                <img src={image} alt={text} />
                            </li>
                        
                    )
                })}
            </ul> */}
            
      </div>
      
  )
}

export default ActiveSlider
