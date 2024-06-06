import React, { useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

const Hero = () => {
  const { i18n, t } = useTranslation(["global"]);

  return (
    <motion.section
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={transition1}
      className="hero"
    >
      <div className="container">
        <h1 className="hero__title lng-herotitle">{t("hero.title")}</h1>
        <p className="hero__text lng-herotext">{t("hero.text")}</p>

        <div className="hero__text-row">
          <p className="hero__text hero__text--author">- Karl Lagerfeld</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
