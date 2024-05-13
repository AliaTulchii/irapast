import React from 'react'
import './style.css'
import Footer from '../../components/footer/Footer'
import Family from '../../img/slider/family.jpg'
import Pairs from '../../img/slider/pairs.jpg'
import Oneself from '../../img/slider/oneself.jpg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import Img1 from './../../img/portfolio/photo-1.jpg'
// import Img2 from './../../img/portfolio/photo-2.jpg'
// import Img3 from './../../img/portfolio/photo-3.jpg'
// import Img4 from './../../img/portfolio/photo-4.jpg'
// import Img5 from './../../img/portfolio/photo-5.jpg'
// import Img6 from './../../img/portfolio/photo-6.jpg'
// import Img7 from './../../img/portfolio/photo-7.jpg'
// import Img8 from './../../img/portfolio/photo-8.jpg'
// import Img9 from './../../img/portfolio/photo-9.jpg'
// import Img10 from './../../img/portfolio/photo-10.jpg'
// import Img11 from './../../img/portfolio/photo-11.jpg'
// import Img12 from './../../img/portfolio/photo-12.jpg'


const Portfolio = () => {


  return (
    <>
      <section className="portfolio ">
        


        <div className='portfolio__carousel portfolio__carousel--next'>
          <div className='portfolio__list'>
            <div className='portfolio__item'>
              <img src={Family} alt="family" className='portfolio__img'/>
              <div className='portfolio__content'>
              <div className='portfolio__topic'>Сімейна </div>
                <div className='portfolio__title'>фотосесія</div>
                <div className='portfolio__description'>
                  Сімейна фотосесія - це чудовий спосіб зберегти спільні моменти та створити назавжди важливі знімки,
                  що передають тепло, радість та любов вашої родини. Я з радістю допоможу вам створити неповторні кадри,
                  які стануть особливою пам'яттю та будуть радувати вас та вашу сім'ю ще довгі роки.
                  Замовте сімейну фотосесію і створіть незабутні спогади разом!</div>
                  <div className='portfolio__buttons'>
                  <button className='portfolio__button'>See more</button>
                  <button className='portfolio__button'>Contact me</button>
                </div>
              </div>
            </div>

            <div className='portfolio__item'>
              <img src={Pairs} alt="pairs" className='portfolio__img'/>
              <div className='portfolio__content'>
                <div className='portfolio__title'>Фотосесія </div>
                <div className='portfolio__topic'>для двох</div>
                <div className='portfolio__description'>
                  Фотосесія для пари - це не лише знімки, але й спосіб відзначити вашу унікальну зв'язок та почуття.
                  Я залюбки допоможу вам  зафіксувати магію вашого кохання у красивих та емоційних кадрах,
                  які назавжди залишаться приємною пам'яттю.
                  Фотосесія для закоханої пари - це чудовий спосіб відсвяткувати вашу любов та створити вишукані зображення,
                  що будуть нагадувати про вашу неповторну історію. Замовте фотосесію та збережіть свої емоції на завжди!
                </div>
                <div className='portfolio__buttons'>
                  <button className='portfolio__button'>See more</button>
                  <button className='portfolio__button'>Contact me</button>
                </div>
              </div>
            </div>

            <div className='portfolio__item'>
              <img src={Oneself} alt="oneself" className='portfolio__img'/>
              <div className='portfolio__content'>
              <div className='portfolio__topic'>Індивідуальна</div>
                <div className='portfolio__title'>фотосесія</div>
                
                <div className='portfolio__description'>
                  Індивідуальна фотосесія - це унікальна можливість відобразити вашу особистість, стиль та емоції у неповторних кадрах.
                  Це чудовий спосіб залишити пам'ять про важливий момент у вашому житті або просто порадувати себе незабутнім досвідом.
                  Замовте індивідуальну фотосесію і перетворіть ваші мрії у відображення!
                </div>
                <div className='portfolio__buttons'>
                  <button className='portfolio__button'>See more</button>
                  <button className='portfolio__button'>Contact me</button>
                </div>
              </div>
            </div>
          </div>

          <div className='thumbnail'>
            <div className='thumbnail__item'>
              <img src={Family} alt="family" className='thumbnail__img' />
              <div className='thumbnail__content'>
                <div className='thumbnail__title'>
                  Name Slider
                </div>
                <div className='thumbnail__des'>
                  Description
                </div>
              </div>
            </div>

            <div className='thumbnail__item'>
              <img src={Pairs} alt="pairs" className='thumbnail__img' />
              <div className='thumbnail__content'>
                <div className='thumbnail__title'>
                  Name Slider
                </div>
                <div className='thumbnail__des'>
                  Description
                </div>
              </div>
            </div>

            <div className='thumbnail__item'>
              <img src={Oneself} alt="oneself" className='thumbnail__img' />
              <div className='thumbnail__content'>
                <div className='thumbnail__title'>
                  Name Slider
                </div>
                <div className='thumbnail__des'>
                  Description
                </div>
              </div>
            </div>
          </div>

          <div className='arrows'>
              <button id='prev'><IoIosArrowBack className='arrow'/></button>
              <button id='next'><IoIosArrowForward className='arrow'/></button>
            </div>
        </div>

  {/* <h2 className="title lng-portfoliotitle">
    Портфоліо
  </h2> */}

  {/* <div className="portfolio__content">
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
  </div> */}
      </section>
      <Footer/>
    </>
    
  )
}

export default Portfolio
