import React, { useEffect, useState } from 'react'
import Hero from "./../components/hero/Hero";
import About from "./../components/about/About";
import Loader from '../components/loader/Loader'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions';

// import { useTranslation } from 'react-i18next';


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
