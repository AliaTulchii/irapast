import React from 'react'
import "./style.css"
import './../../styles/main.css'

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="nav__list">
              <li className="nav__item">
                <Link to={'/'} className="nav__link lng-home">
                  Головна
                </Link>
              </li>
              <li className="nav__item">
                <Link to={'/portfolio'} className="nav__link lng-portfolio">
                  Портфоліо
                </Link>
              </li>
              <li className="nav__item">
                <Link to={'/price'} className="nav__link lng-price">
                  Прайс
                </Link>
              </li>
              <li className="nav__item">
                <Link to={'/contacts'} className="nav__link lng-contact">
                  Контакти
                </Link>
              </li>
      </nav>
    </div>
  )
}

export default Nav
