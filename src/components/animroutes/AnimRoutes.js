import React from 'react'
import Home from './../../pages/Home'
import Portfolio from '../../pages/portfolio/Portfolio'
import Price from '../../pages/price/Price'
import Contacts from '../../pages/contacts/Contacts'

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '../Layout/Layout'
// import IndividualCol from '../collection/IndividualCol'


const AnimRoutes = () => {
  // const location = useLocation();
  // key={location.pathname} location={location}
    return (
      <AnimatePresence initial={true} mode='wait'>
        <Routes >
          <Route path='/' element={<Layout />} >
          <Route index element={<Home/>} />
            <Route path='portfolio' element={<Portfolio />} />
            {/* <Route path='portfolio/:portfolioCol' element={<IndividualCol/>} /> */}
            
          <Route path='price' element={<Price/>} />
          <Route path='contacts' element={<Contacts/>} />
          </Route>
          
        </Routes>
        </AnimatePresence>
  )
}

export default AnimRoutes
