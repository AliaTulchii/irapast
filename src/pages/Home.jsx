import React from 'react'
import Hero from "./../components/hero/Hero";
import About from "./../components/about/About";

import { motion } from 'framer-motion'
import { transition1 } from '../transitions';


const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <Hero/>
      <About />
    </motion.section>
  )
}

export default Home
