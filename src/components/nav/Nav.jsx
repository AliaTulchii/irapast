import React from "react";
import "./style.css";
import "./../../styles/main.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [t] = useTranslation("global");

  return (
    <div>
      <nav className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link lng-home">
            {t("header.home")}
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/portfolio" className="nav__link lng-portfolio">
            {t("header.portfolio")}
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/price" className="nav__link lng-price">
            {t("header.price")}
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contacts" className="nav__link lng-contact">
            {t("header.contact")}
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Nav;
