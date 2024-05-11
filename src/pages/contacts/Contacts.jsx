import React from 'react'
import './style.css'
import Header from './../../components/header/Header'
import Footer from './../../components/footer/Footer'
import Address from './../../img/contacts/address.png'
import Email from './../../img/contacts/email.png'
import Inst from './../../img/contacts/inst.svg'
import Tiktok from './../../img/contacts/tiktok.svg'
import Photo from './../../img/contacts/photo-4.jpg'

import { motion } from 'framer-motion'
import { transition1 } from '../../transitions'



const Contacts = () => {
  return (
    <div>
      <Header/>
      <section class="contact container">
    <div class="contact__left">
          <motion.img
            initial={{ scale: 0}}
            animate={{ scale: 1}}
            exit={{ scale: 0}}
            transition={transition1}
            class='contact__img' src={Photo} alt="people" />
      </div>
      
        <motion.div
          initial={{ opacity: 0, y: '50%'}}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: '50%' }}
          transition={transition1}
          class="contact__right">    
    <address>            
        <ul class="contact__list">
           <li class="contact__item">
               <img src={Address} alt="email" class="contact__icon"/>
               <a href="https://goo.gl/maps/CPtrU1FHBa2aNyZL9" target="_blank" rel="noopener noreferrer" class="contact__address lng-address">
                Польща, м. Варшава</a>
           </li>
           <li class="contact__item">
            <img src={Email} alt="email" class="contact__icon"/>
              <a href="mailto:ira.past.photo@gmail.com" class="contact__mail">ira.past.photo@gmail.com</a>
           </li>
         </ul>
         </address>

         <ul class="socials__list">
            <li class="socials__item">
                <a href="https://www.instagram.com/ira.past.photo/" class="footer__link" target="_blank" rel="noreferrer">
                    <img src={Inst} alt="instagram" class="socials__item--img"/>
                </a>
            </li>
            <li class="socials__item">
                <a href="https://www.tiktok.com/@ira.past.photo?_t=8l3tZtUqIwj&_r=1" class="footer__link" target="_blank" rel="noreferrer">
                <img src={Tiktok} alt="tiktok" class="socials__item--img"/>
                </a>
            </li>
        </ul>
  </motion.div>  
      </section>
      <Footer/>
    </div>
  )
}

export default Contacts
