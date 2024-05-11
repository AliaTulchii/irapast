import React from 'react'
import './style.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Img1 from './../../img/portfolio/photo-1.jpg'
import Img2 from './../../img/portfolio/photo-2.jpg'
import Img3 from './../../img/portfolio/photo-3.jpg'
import Img4 from './../../img/portfolio/photo-4.jpg'
import Img5 from './../../img/portfolio/photo-5.jpg'
import Img6 from './../../img/portfolio/photo-6.jpg'
import Img7 from './../../img/portfolio/photo-7.jpg'
import Img8 from './../../img/portfolio/photo-8.jpg'
import Img9 from './../../img/portfolio/photo-9.jpg'
import Img10 from './../../img/portfolio/photo-10.jpg'
import Img11 from './../../img/portfolio/photo-11.jpg'
import Img12 from './../../img/portfolio/photo-12.jpg'


const Portfolio = () => {


  return (
    <>
      <Header/>
    <section class="portfolio container">
  <h2 className="title lng-portfoliotitle">
    Портфоліо
  </h2>

  <div className="portfolio__content">
    <div className="portfolio__two">
      <img
        src={Img1}
        alt="people"
        className="portfolio__two--img"
            />
            
      <img
        src={Img2}
        alt="people"
        className="portfolio__two--img"
      />
    </div>

    <div class="portfolio__three">
      <img
        src={Img3}
        alt="people"
        className="portfolio__three--img"
      />
      <img
        src={Img4}
        alt="people"
        className="portfolio__three--img"
      />
      <img
        src={Img5}
        alt="people"
        className="portfolio__three--img"
      />
    </div>

    <div class="portfolio__two">
      <img
        src={Img6}
        alt="people"
        className="portfolio__two--img"
      />
      <img
        src={Img7}
        alt="people"
        className="portfolio__two--img"
      />
    </div>

    <div class="portfolio__two">
      <img
        src={Img8}
        alt="people"
        className="portfolio__two--img"
      />
      <img
        src={Img9}
        alt="people"
        className="portfolio__two--img"
      />
    </div>

    <div class="portfolio__three">
      <img
        src={Img10}
        alt="people"
        className="portfolio__three--img"
      />
      <img
        src={Img11}
        alt="people"
        className="portfolio__three--img"
      />
      <img
        src={Img12}
        alt="people"
        className="portfolio__three--img"
      />
    </div>
  </div>
      </section>
      <Footer/>
    </>
    
  )
}

export default Portfolio
