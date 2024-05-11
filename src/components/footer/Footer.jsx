import React from 'react'
import './style.css'
import logo_beige from "./../../img/logo/logo-beige.png";
import inst from "./../../img/footer/inst.svg";
import tiktok from "./../../img/footer/tiktok.svg";
import mail from "./../../img/footer/email.png";

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
      <footer className="footer">
        <div className="footer__container container">
          <div className="logo">
            <Link href={'/'} className="logo__link">
              <img src={logo_beige} alt="logo" className="logo__img" />
            </Link>
          </div>

          <ul className="footer__list">
            <li className="footer__item">
              <Link to={'/'} className="footer__link lng-footerhome">
                Головна
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to={'/portfolio'}
                className="footer__link lng-footerportfolio"
              >
                Портфоліо
              </Link>
            </li>
            <li className="footer__item">
              <Link to={'/price'} className="footer__link lng-footerprice">
                Прайс
              </Link>
            </li>
            <li className="footer__item">
              <Link to={'/contacts'} className="footer__link lng-footercontact">
                Контакти
              </Link>
            </li>
          </ul>

          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item">
                <a
                  href="https://www.instagram.com/ira.past.photo/"
                  className="footer__link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={inst} alt="instagram" className="socials__item--img" />
                </a>
              </li>
              <li className="socials__item">
                <a
                  href="https://www.tiktok.com/@ira.past.photo?_t=8l3tZtUqIwj&_r=1"
                  rel="noreferrer"
                  className="footer__link"
                  target="_blank"
                >
                  <img src={tiktok} alt="tiktok" className="socials__item--img" />
                </a>
              </li>
            </ul>

            <div className="socials__email">
              <span>
                <img src={mail} className="socials__email--img" alt="mail" />
              </span>
              <p className="socials__email--text">ira.past.photo@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
