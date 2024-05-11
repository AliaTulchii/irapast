import './style.css'
import React from 'react'
import Nav from '../nav/Nav'
import logo from "./../../img/logo/logo.png";

import { Link } from 'react-router-dom';
import MobileNav from '../mobilenav/MobileNav';

import { motion } from 'framer-motion';
import { transition1 } from '../../transitions';


const Header = () => {
  return (
    
    <motion.header
    initial={{ opacity: 0, y: '-50%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '-50%' }}
    transition={transition1}
      className="header">
        <div className="container">
          <div className="header__row">
            <div className="logo">
              <Link to={'/'} className="logo__link">
                <img src={logo} alt="logo" className="logo__img" />
              </Link>
            </div>

            <Nav/>


            <MobileNav/>
          </div>
        </div>
      </motion.header>
    
  )
}

export default Header
