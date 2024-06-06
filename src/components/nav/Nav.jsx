import React, { useEffect } from 'react'
import "./style.css"
import './../../styles/main.css'

import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


const Nav = () => {
  const [t, i18n] = useTranslation("global")
 
  
  return (
    <div>
      

      <nav className="nav__list">
              <li className="nav__item">
                <Link to='/' className="nav__link lng-home">
                  {t("header.home")}
                </Link>
              </li>
              <li className="nav__item">
                <Link to='/portfolio' className="nav__link lng-portfolio">
                  {t("header.portfolio")}
                </Link>
              </li>
              <li className="nav__item">
                <Link to='/price' className="nav__link lng-price">
                  {t("header.price")}
                </Link>
              </li>
              <li className="nav__item">
                <Link to='/contacts' className="nav__link lng-contact">
                  {t("header.contact")}
                </Link>
              </li>
      </nav>

      {/* <button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<select
							className="nav__select"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
            >
							<option value="en">EN</option>
							<option value="pl">PL</option>
							<option value="uk">UA</option>
						</select>
          </li>
        </ul>
        </div> */}
    </div>
  )
}

export default Nav
