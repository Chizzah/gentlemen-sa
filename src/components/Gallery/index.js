import React from 'react'
import Image from 'gatsby-image'
import Swiper from 'react-id-swiper'

import 'swiper/css/swiper.css'

const Gallery = (props) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Swiper {...params}>
      <Image fluid={props.image1} />
      <Image fluid={props.image2} />
      <Image fluid={props.image3} />
    </Swiper>
  )
};

export default Gallery;
