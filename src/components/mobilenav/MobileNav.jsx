import React, { useState } from "react";
import "./style.css";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const { i18n, t } = useTranslation(["global"]);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="mbmenu">
      <div onClick={() => setOpenMenu(true)} className="mbmenu__btn">
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="mbmenu__menu"
      >
        <div className="mbmenu__header">
          <div onClick={() => setOpenMenu(false)} className="mbmenu__close">
            <IoMdClose />
          </div>

          <div className="mblang__btns">
            <button
              className="mblang__btn"
              onClick={() => handleChangeLanguage("ua")}
            >
              UA
            </button>
            <button
              className="mblang__btn"
              onClick={() => handleChangeLanguage("pl")}
            >
              PL
            </button>
          </div>
        </div>

        <ul className="mbmenu__list">
          <li className="mbmenu__item">
            <Link to={"/"} className="mbmenu__link lng-home">
              {t("header.home")}
            </Link>
          </li>
          <li className="mbmenu__item">
            <Link to={"/portfolio"} className="mbmenu__link lng-portfolio">
              {t("header.portfolio")}
            </Link>
          </li>
          <li className="mbmenu__item">
            <Link to={"/price"} className="mbmenu__link lng-price">
              {t("header.price")}
            </Link>
          </li>
          <li className="mbmenu__item">
            <Link to={"/contacts"} className="mbmenu__link lng-contact">
              {t("header.contact")}
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
