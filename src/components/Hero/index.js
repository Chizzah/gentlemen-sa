import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import {
  Container,
  Title,
  Text
} from './styles'

function Hero(props) {
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <Container
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="900"
    >
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link to={props.link}>
        <button className={props.class}>{props.button}</button>
      </Link>
    </Container>  
  )
}

export default Hero