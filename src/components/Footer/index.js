import React from 'react'
import { Link } from 'gatsby'

import {
  Footer,
  TwoColumnGrid,
  GridLeft,
  SocialIcons,
  GridRight,
  TwoColumnGridRight,
  FooterNav,
  Title,
  Divider,
  Text,
  StyledLink,
  FootNote,
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
          <Divider />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            efficitur in massa eu tempus. Sed quis justo eget nibh ultrices
            eleifend sed eu nibh. Suspendisse potenti. Aliquam vehicula massa
            non luctus aliquam.
          </Text>
          <br />
          <br />
          <Link className={StyledLink} to="/about">
            Find out more about us
          </Link>
          <SocialIcons>
            <a
              href="https://chaddwebdesign.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Dummy Link 1" />
            </a>
            <a
              href="https://chaddwebdesign.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Dummy Link 2" />
            </a>
            <a
              href="https://chaddwebdesign.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Dummy Link 3" />
            </a>
            <a
              href="https://chaddwebdesign.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Pinterest} alt="Dummy Link 4" />
            </a>
            <a
              href="https://chaddwebdesign.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube} alt="Dummy Link 5" />
            </a>
            <a
              href="https://chaddwebdesign.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Whatsapp} alt="Dummy Link 6" />
            </a>
            <a
              href="https://chaddwebdesign.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GooglePlus} alt="Dummy Link 7" />
            </a>
          </SocialIcons>
        </GridLeft>
        <GridRight>
          <TwoColumnGridRight>
            <GridLeft>
              <Title>Navigation</Title>
              <Divider />
              <FooterNav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/cart">Shopping Cart</Link>
                  </li>
                </ul>
              </FooterNav>
            </GridLeft>
            <GridRight>
              <Title>Shop</Title>
              <Divider />
              <FooterNav>
                <ul>
                  <li>
                    <Link to="/all-collections">All Collections</Link>
                  </li>
                  <li>
                    <Link to="/collection/shirts">Shirts Collection</Link>
                  </li>
                  <li>
                    <Link to="/collection/blazers">Blazers Collection</Link>
                  </li>
                  <li>
                    <Link to="/collection/shoes">Shoes Collection</Link>
                  </li>
                  <li>
                    <Link to="/collection/belts">Belts Collection</Link>
                  </li>
                  <li>
                    <Link to="/collection/suits">Suits Collection</Link>
                  </li>
                </ul>
              </FooterNav>
            </GridRight>
          </TwoColumnGridRight>
        </GridRight>
      </TwoColumnGrid>
      <FootNote>
        <p>
          Copyright © <span>Gentlemen SA</span> {new Date().getFullYear()}. All
          rights reserved.
        </p>
        <p>
          JAMstack Website by{' '}
          <a
            href="https://chaddwebdesign.co.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chadd Web Design
          </a>
        </p>
      </FootNote>
    </Footer>
  )
}

export default FooterComponent
