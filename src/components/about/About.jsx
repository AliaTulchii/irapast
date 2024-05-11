import React from 'react'
import './style.css'
import about from "./../../img/about/photo.jpeg";

import { motion } from 'framer-motion';
import { transition1 } from '../../transitions';

const About = () => {
  return (
    <section className="about container">
      <motion.div
        initial={{ opacity: 0, x: '-50%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-50%' }}
        transition={transition1}
        className="about__left">
          <h2 className="title lng-abouttitle">Привіт, мене звати Іра...</h2>

          <p className="about__text about__text--up lng-up">
            ... і я рада бачити Тебе на своїй сторінці.
          </p>

          <p className="about__text about__text--middle lng-middle">
            Я - фотограф, який зробить Тебе трішечки щасливішим. Фотографія -
            моє хоббі, яке приносить мені задоволення.
          </p>

          <p className="about__text lng-down">
            Запрошую Тебе на зйомку! Давай творити красу разом!
          </p>
        </motion.div>

      <motion.div
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        exit={{ scale: 0}}
        transition={transition1}
        className="about__right">
          <p className="about__rotate about__rotate--left lng-rotatefirst">
            Рада тебе бачити
          </p>
        <motion.img
          whileHover={{ scale: 0.9 }}
          transition={transition1}
          className="about__img" src={about} alt="person" />
          <p className="about__rotate about__rotate--right lng-rotatesecond">
            Рада тебе бачити
          </p>
        </motion.div>
      </section>
  )
}

export default About
