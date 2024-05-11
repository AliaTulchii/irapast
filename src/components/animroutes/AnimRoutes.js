import React from 'react'
import Home from './../../pages/Home'
import Portfolio from '../../pages/portfolio/Portfolio'
import Price from '../../pages/price/Price'
import Contacts from '../../pages/contacts/Contacts'

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


const AnimRoutes = () => {
  const location = useLocation();
    return (
      <AnimatePresence initial={true} mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/price' element={<Price/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
        </AnimatePresence>
  )
}

export default AnimRoutes
