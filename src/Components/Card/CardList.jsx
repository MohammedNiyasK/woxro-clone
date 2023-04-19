import React from 'react'
import Card from './Card'

const cardData = [
    {
        img:'https://woxro.com/public/assets/png/services/webdesigning.png',
        title:'Web Designing',
        description:'We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.',
        background:'#e7f0f7'
    },
    {
        img:'https://woxro.com/public/assets/png/services/webapplication.png',
        title:'Web Application',
        description:'We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.',
        background:'#f6f5f3'
    },
    {
        img:'https://woxro.com/public/assets/png/services/mobileappdevelopment.png',
        title:'Mobile App Development',
        description:'We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.',
        background:'#f6f5f3'
    },
    {
        img:'https://woxro.com/public/assets/png/services/ecommercedevelopment.png',
        title:'Ecommerce Development',
        description:'For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.',
        background:'#fcf0e4'
    },
    {
        img:'https://woxro.com/public/assets/png/services/digitalmarketing.png',
        title:'Digital Marketing',
        description:'We bring together expertise in digital marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.',
        background:'#fcf0e4'
    },
    {
        img:'https://woxro.com/public/assets/png/services/graphic.png',
        title:'Graphic Designing',
        description:'For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.',
        background:'#effbfb'
    },
]

import classes from './CardList.module.css'
const CardList = () => {
  return (
   <div className={classes.cardList}>
   {
    cardData?.map(card => (
        <Card
        img = {card.img}
        title = {card.title}
        description = {card.description}
        background = {card.background}
        />
    ))
   }

</div>
  )
}

export default CardList