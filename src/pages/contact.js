import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Container, FlexView, Address } from '~/utils/styles'
import ContactForm from '~/components/ContactForm'

const ContactPage = ({ data }) => (
  <Container>
    <FlexView>
      <Address>
        <h2>Contact Us</h2>
        <ul>
          <li>
            <strong>Address:</strong> 010 Victoria Street, Oudtshoorn, 6625
          </li>
          <li>
            <strong>Phone:</strong> 060 402 3605
          </li>
          <li>
            <span>
              <div>
                <strong>Hours:</strong>
              </div>
              <div>
                {' '}
                Monday 8am-6pm <br /> Tuesday 8am-6pm <br /> Wednesday 8am-6pm{' '}
                <br /> Thursday 8am-6pm <br /> Friday 8am-6pm <br /> Saturday
                9am-12pm <br /> Sunday Closed
              </div>
            </span>
          </li>
        </ul>
      </Address>
      <div>
        <a
          href="https://www.google.com/maps/place/10+Victoria+St,+Oudtshoorn,+6620/@-33.58126,22.2135513,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x1dd5c18cc16f1461:0x5ed969953cc575c6!2s10+Victoria+St,+Oudtshoorn,+6620!3b1!8m2!3d-33.5809611!4d22.2132098!3m4!1s0x1dd5c1f34144b999:0x6fa8322beb691b79!8m2!3d-33.58126!4d22.21574"
          target="_blank"
        >
          <Image fixed={data.googleMaps.childImageSharp.fixed} />
        </a>
      </div>
    </FlexView>
    <ContactForm />
  </Container>
)

export const query = graphql`
  query {
    googleMaps: file(name: { eq: "google-maps" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
