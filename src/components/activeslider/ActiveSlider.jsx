import React from 'react'
import{Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import './style.css'

import { motion } from 'framer-motion'
import { transition1 } from '../../transitions'

import { FreeMode, Pagination } from 'swiper/modules'

import {RxArrowTopRight} from 'react-icons/rx'
import { ServiceData } from '../../constants'

const ActiveSlider = () => {
  return (
      <motion.div
      initial={{ scale: 0}}
      animate={{ scale: 1}}
      exit={{ scale: 0}}
      transition={transition1}
          className='slider__box'>
          <Swiper
          breakpoints={{
                  340: {
                  slidesPerView: 2,
                  spaceBetween: 10
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 15
              }
              
              }}
              
              freeMode={true}
              pagination={{
                  clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className='slider__swiper'
          >
              {ServiceData.map((item) => (
                  <SwiperSlide key={item.title}>
                      <div className='slider__item'>
                          <div className='slider__bgrd' style={{backgroundImage: `url(${item.backgroundImage})`}}></div>
                          <div                              
                              className='slider__hover'>
                              <div className='slider__content'>               
                             
                              <h1 className='slider__title'>{item.title}</h1>
                              <p className='slider__text'>{item.content}</p>
                              
                              <button className='slider__btn'>
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
      </Swiper>
    </motion.div>
  )
}

export default ActiveSlider
