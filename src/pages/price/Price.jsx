import React from "react";
import "./style.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";
import { useTranslation } from "react-i18next";

const Price = () => {
  const { i18n, t } = useTranslation(["global"]);
  return (
    <>
      <motion.section
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={transition1}
        className="price container"
      >
        <div className="price__box">
          <h1 className="price__title title">Price list</h1>

          <ul className="price__list">
            <div className="price__list--box">
              <li className="price__item">
                <div className="price__subtitle">
                  <h3 className="subtitle lng-individ">{t("individ")}</h3>
                  <span className="price__span">180zł</span>
                </div>
                <ul className="description__list">
                  <li className="description__item  lng-desc-1">
                    {t("desc-1")}
                  </li>
                  <li className="description__item  lng-desc-2">
                    {t("desc-2")}
                  </li>
                  <li className="description__item  lng-desc-3">
                    {t("desc-3")}
                  </li>
                  <li className="description__item  lng-desc-4">
                    {t("desc-4")}
                  </li>
                  <li className="description__item  lng-desc-5">
                    {t("desc-5")}
                  </li>
                </ul>
              </li>
              <li className="price__item">
                <div className="price__subtitle">
                  <h3 className="subtitle lng-person">{t("person")}</h3>
                  <span className="price__span">250zł</span>
                </div>

                <ul className="description__list">
                  <li className="description__item lng-desc-6">
                    {t("desc-6")}
                  </li>
                  <li className="description__item lng-desc-7">
                    {t("desc-7")}
                  </li>
                  <li className="description__item lng-desc-8">
                    {t("desc-8")}
                  </li>
                  <li className="description__item lng-desc-9">
                    {t("desc-9")}
                  </li>
                  <li className="description__item lng-desc-10">
                    {t("desc-10")}
                  </li>
                </ul>
              </li>
            </div>

            <li className="price__item price__item--last">
              <div className="price__subtitle">
                <h3 className="subtitle subtitle--last">{t("another")}</h3>
                <span className="lng-indprice price__span--text  price__span--last">
                  Індивідуальна ціна
                </span>
              </div>

              <ul className="description__list">
                <li className="description__item lng-desc-11">
                  {t("desc-11")}
                </li>
                <li className="description__item lng-desc-12">
                  {t("desc-12")}
                </li>
                <li className="description__item lng-desc-13">
                  {t("desc-13")}
                </li>
                <li className="description__item lng-desc-14">
                  {t("desc-14")}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Price;
