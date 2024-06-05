import React from 'react'
import './style.css'
import about from "./../../img/about/photo.jpeg";

import { motion } from 'framer-motion';
import { transition1 } from '../../transitions';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <section className="about container">
      <motion.div
        initial={{ opacity: 0, x: '-50%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-50%' }}
        transition={transition1}
        className="about__left">
          <h2 className="title lng-abouttitle">{t("about.title")}</h2>

          <p className="about__text about__text--up lng-up">
          {t("about.up")}
          </p>

          <p className="about__text about__text--middle lng-middle">
          {t("about.middle")}
          </p>

          <p className="about__text lng-down">
          {t("about.down")}
          </p>
        </motion.div>

      <motion.div
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        exit={{ scale: 0}}
        transition={transition1}
        className="about__right">
          <p className="about__rotate about__rotate--left lng-rotatefirst">
          {t("about.rotatefirst")}
          </p>
        <motion.img
          whileHover={{ scale: 0.9 }}
          transition={transition1}
          className="about__img" src={about} alt="person" />
          <p className="about__rotate about__rotate--right lng-rotatesecond">
          {t("about.rotatesecond")}
          </p>
        </motion.div>
      </section>
  )
}

export default About
