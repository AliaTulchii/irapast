import React from 'react'
import './style.css'

import { motion } from 'framer-motion'
import { transition1 } from '../../transitions';


const Hero = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: '-50%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '-50%' }}
    transition={transition1}
      className="hero">
        <div className="container">
          <h1 className="hero__title lng-herotitle">
            Той хто шукає красоту, завжди її знайде
          </h1>
          <p className="hero__text lng-herotext">
            " Що мені подобається у фотографії , це те, що в ній спійманий
            момент, який пішов назавжди, який неможливо відтворити. "
          </p>

          <div className="hero__text-row">
            <p className="hero__text hero__text--author">- Karl Lagerfeld</p>
          </div>
        </div>
      </motion.section>
  )
}

export default Hero
