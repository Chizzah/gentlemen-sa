import React from 'react'
import { Link } from 'gatsby'

import {
  Footer,
  TwoColumnGrid,
  GridLeft,
  SocialIcons,
  GridRight,
  TwoColumnGridRight,
  Title,
  Divider,
  Text,
  StyledLink
} from './styles'
import Facebook from '../../../resources/icons/facebook.svg'
import Instagram from '../../../resources/icons/instagram.svg'
import Twitter from '../../../resources/icons/twitter.svg'
import Pinterest from '../../../resources/icons/pinterest.svg'
import Youtube from '../../../resources/icons/youtube.svg'
import Whatsapp from '../../../resources/icons/whatsapp.svg'
import GooglePlus from '../../../resources/icons/google+.svg'

function FooterComponent() {
  return (
    <Footer>
      <TwoColumnGrid>
        <GridLeft>
          <Title>About Us</Title>
          <Divider/>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur in massa eu tempus. Sed quis justo eget nibh ultrices eleifend sed eu nibh. Suspendisse potenti. Aliquam vehicula massa non luctus aliquam.</Text>
          <br/><br/>
          <Link className={StyledLink} to='/about'>Find out more about us</Link>
          <SocialIcons>
            <a href='#' target='_blank' rel='noopener noreferrer'><img src={Facebook} /></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><img src={Instagram} /></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><img src={Twitter} /></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><img src={Pinterest} /></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><img src={Youtube} /></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><img src={Whatsapp} /></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><img src={GooglePlus} /></a>
          </SocialIcons>
        </GridLeft>
        <GridRight>
          <TwoColumnGridRight>
            <GridLeft>
              <Title>Test1</Title>
              <Divider/>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur in massa eu tempus. Sed quis justo eget nibh ultrices eleifend sed eu nibh. Suspendisse potenti. Aliquam vehicula massa non luctus aliquam.</Text>
            </GridLeft>
            <GridRight>
              <Title>Test2</Title>
              <Divider/>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur in massa eu tempus. Sed quis justo eget nibh ultrices eleifend sed eu nibh. Suspendisse potenti. Aliquam vehicula massa non luctus aliquam.</Text>
            </GridRight>
          </TwoColumnGridRight>
        </GridRight>
      </TwoColumnGrid>
      <div
        style={{ 
          "backgroundColor": "#222",
          "padding": "1rem 0"
        }}
      >
        <p>Copyright © Gentlemen SA {new Date().getFullYear()}. All rights reserved.</p>
        <p>JAMstack Website by <a href='https://chaddwebdesign.coza' target='_blank' rel='noopener noreferrer'>Chadd Web Design</a></p>
      </div>
    </Footer>
  )
}

export default FooterComponent