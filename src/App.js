import "./styles/main.css"
import logo from "./img/logo/logo.png"
import logo_beige from "./img/logo/logo-beige.png"
import inst from "./img/footer/inst.svg"
import tiktok from "./img/footer/tiktok.svg"
import mail from "./img/footer/email.png"
import about from "./img/about/photo.jpeg"

function App() {
  return (
    <div className="App">
      <header class="header">
    <div class="container">
        <div class="header__row">
            <div class="logo">
                <a href="./index.html" class="logo__link">
                    <img src={logo} alt="logo" class="logo__img"/>
                </a>
            </div>
            
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="./index.html" class="nav__link lng-home">Головна</a>
                </li>
                <li class="nav__item">
                    <a href="./portfolio.html" class="nav__link lng-portfolio">Портфоліо</a>
                </li>
                <li class="nav__item">
                    <a href="./price.html" class="nav__link lng-price">Прайс</a>
                </li>
                <li class="nav__item">
                    <a href="./contacts.html" class="nav__link lng-contact">Контакти</a>
                </li>
            </ul>

            <select class="change-lang__desktop">
                <option value="ua">UA</option>
                <option value="pl">PL</option>
                <option value="en">EN</option>
            </select>
            

                           
                <button class="mobile-nav-btn">
                    <div class="nav-icon"></div>
                    {/* <!-- <img class="nav-icon" src="./img/menu.svg" alt=""> --> */}
                </button>
            
            
        </div>
    </div>
      </header>

      <section class="hero">
    <div class="container"
   
    >
    <h1 class="hero__title lng-herotitle">
        Той хто шукає красоту, завжди її знайде</h1>
    <p class="hero__text lng-herotext">
        " Що мені подобається у фотографії , це те,
        що в ній спійманий момент, який пішов назавжди,
        який неможливо відтворити. "
    </p>

    <div class="hero__text-row">
        <p class="hero__text hero__text--author">
        - Karl Lagerfeld
        </p>
    </div>
    
    </div>
    
      </section>
      
      <section class="about container">    
    <div class="about__left"
  
    >
        <h2 class="title lng-abouttitle">Привіт, мене звати Іра...</h2>

        <p class="about__text about__text--up lng-up">
            ... і я рада бачити Тебе на своїй сторінці.
        </p>

        <p class="about__text about__text--middle lng-middle">
            Я - фотограф, який зробить Тебе трішечки щасливішим.
            Фотографія - моє хоббі, яке приносить мені задоволення.
        </p>

        <p class="about__text lng-down">
            Запрошую Тебе на зйомку! Давай творити красу разом!
        </p>
    </div>

    <div class="about__right"
   
    >
        <p class="about__rotate about__rotate--left lng-rotatefirst">
            Рада тебе бачити
        </p>
        <img class="about__img" src={about} alt="person"/>
        <p class="about__rotate about__rotate--right lng-rotatesecond">
            Рада тебе бачити
        </p>
    </div>
</section>
      
<footer class="footer">
    <div class="footer__container container">
        <div class="logo">
            <a href="./index.html" class="logo__link">
                <img src={logo_beige} alt="logo" class="logo__img"/>
            </a>
        </div>

        <ul class="footer__list">
            <li class="footer__item">
                <a href="./index.html" class="footer__link lng-footerhome">Головна</a>
            </li>
            <li class="footer__item">
                <a href="./portfolio.html" class="footer__link lng-footerportfolio">Портфоліо</a>
            </li>
            <li class="footer__item">
                <a href="!#" class="footer__link lng-footerprice">Прайс</a>
            </li>
            <li class="footer__item">
                <a href="!#"  class="footer__link lng-footercontact">Контакти</a>
            </li>
        </ul>

        <div class="socials">
            <ul class="socials__list">
                <li class="socials__item">
                    <a href="https://www.instagram.com/ira.past.photo/" class="footer__link" rel="noreferrer" target="_blank">
                        <img src={inst} alt="instagram" class="socials__item--img"/>
                    </a>
                </li>
                <li class="socials__item">
                    <a href="https://www.tiktok.com/@ira.past.photo?_t=8l3tZtUqIwj&_r=1" rel="noreferrer" class="footer__link" target="_blank">
                        <img src={tiktok} alt="tiktok" class="socials__item--img"/>
                    </a>
                </li>
            </ul>

            <div class="socials__email">
                <span>
                    <img src={mail} class="socials__email--img" alt="mail"/>
                </span>
                <p class="socials__email--text">ira.past.photo@gmail.com</p>
            </div>
        </div>
        
    </div>
    
</footer>
    </div>
  );
}

export default App;
