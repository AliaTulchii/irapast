import React, { useState } from 'react'
import './style.css'
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'

import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

const menuVariants = {
    hidden: {
        x: '100%',
    },
    show: {
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        }
    }
}


const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false)


  return (
    <nav className='mbmenu'>
      <div onClick={()=> setOpenMenu(true)} className='mbmenu__btn'>
        <CgMenuRight/>
          </div>
          <motion.div variants={menuVariants}
              initial='hidden'
              animate = {openMenu ? 'show' : ''}
              className='mbmenu__menu'>
              <div onClick={()=> setOpenMenu(false)} className='mbmenu__close'>
                  <IoMdClose/>
              </div>
              <ul className="mbmenu__list">
              <li className="mbmenu__item">
                <Link to={'/'} className="mbmenu__link lng-home">
                  Головна
                </Link>
              </li>
              <li className="mbmenu__item">
                <Link to={'/portfolio'} className="mbmenu__link lng-portfolio">
                  Портфоліо
                </Link>
              </li>
              <li className="mbmenu__item">
                <Link to={'/price'} className="mbmenu__link lng-price">
                  Прайс
                </Link>
              </li>
              <li className="mbmenu__item">
                <Link to={'/contacts'} className="mbmenu__link lng-contact">
                  Контакти
                </Link>
              </li>
      </ul>
          </motion.div>
    </nav>
  )
}

export default MobileNav
