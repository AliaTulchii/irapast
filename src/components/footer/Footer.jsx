import React from 'react'
import './style.css'
import logo_beige from "./../../img/logo/logo-beige.png";
import inst from "./../../img/footer/inst.svg";
import tiktok from "./../../img/footer/tiktok.svg";
import mail from "./../../img/footer/email.png";

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {transition1} from './../../transitions'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [t, i18n] = useTranslation("global")

  return (
    
    <motion.footer
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="footer">
        <div className="footer__container container">
          <div className="logo">
            <Link href={'/'} className="logo__link">
              <img src={logo_beige} alt="logo" className="logo__img" />
            </Link>
          </div>

          <ul className="footer__list">
            <li className="footer__item">
              <Link to={'/'} className="footer__link lng-footerhome">
              {t("footer.home")}
              </Link>
            </li>
            <li className="footer__item">
              <Link
                to={'/portfolio'}
                className="footer__link lng-footerportfolio"
              >
                {t("footer.portfolio")}
              </Link>
            </li>
            <li className="footer__item">
              <Link to={'/price'} className="footer__link lng-footerprice">
              {t("footer.price")}
              </Link>
            </li>
            <li className="footer__item">
              <Link to={'/contacts'} className="footer__link lng-footercontact">
              {t("footer.contact")}
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
      </motion.footer>
  )
}

export default Footer
