import React from 'react'
import './style.css'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


const Price = () => {
  return (
    <>
      <Header/>
      <section className="price container">
    <div className="price__box">
        <h1 className="price__title title">Price list</h1>

    <ul className="price__list">
        <div className="price__list--box">
            <li className="price__item">
            <div className="price__subtitle">
                <h3 className="subtitle lng-individ">Індивідуальна</h3>
                <span className="price__span">180zł</span>
            </div>
            <ul className="description__list">
                <li className="description__item  lng-desc-1">
                    1-1,5 годинна фотосесія
                </li>
                <li className="description__item  lng-desc-2">
                    доступ до всіх фотографій
                </li>
                <li className="description__item  lng-desc-3">
                    10 фотографій в обробці
                </li>
                <li className="description__item  lng-desc-4">
                    кожне наступне фото - 20zł/шт
                </li>
                <li className="description__item  lng-desc-5">
                    допомога при позуванні, виборі локалізації, стилю
                </li>
            </ul>
        </li>
        <li className="price__item">
            <div className="price__subtitle">
                <h3 className="subtitle lng-person">
                2-особова</h3>
                <span className="price__span">250zł</span>
            </div>
            
            <ul className="description__list">
                <li className="description__item lng-desc-6">
                    2 годинна фотосесія
                </li>
                <li className="description__item lng-desc-7">
                    доступ до всіх фотографій
                </li>
                <li className="description__item lng-desc-8">
                    20 фотографій в обробці
                </li>
                <li className="description__item lng-desc-9">
                    кожне наступне фото - 20zł/шт
                </li>
                <li className="description__item lng-desc-10">
                    допомога при позуванні, виборі локалізації, стилю
                </li>
            </ul>

        </li>
        </div>
        
        <li className="price__item price__item--last">
            <div className="price__subtitle">
                <h3 className="subtitle subtitle--last">
                Інші
                </h3>
                <span className="lng-indprice price__span--text  price__span--last">Індивідуальна ціна</span>
            </div>
            
            <ul className="description__list">
                <li className="description__item lng-desc-11">
                    урочисті події
                </li>
                <li className="description__item lng-desc-12">
                    предметна
                </li>
                <li className="description__item lng-desc-13">
                    сімейна
                </li>
                <li className="description__item lng-desc-14">
                    бізнес
                </li>
            </ul>
        </li>
    </ul>
    </div>
    
      </section>
      
      <Footer/>
    </>
  )
}

export default Price
