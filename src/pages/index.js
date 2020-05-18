import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import SEO from '~/components/seo'
import Hero from '../components/Hero'
import {
  StyledBackground,
  HeroOverlay,
  SectionOverlay,
  InsideBorder,
  HeroButton,
  SectionButton
} from '~/utils/styles'

const IndexPage = ({ data }) => {

  return (
    <>
      <SEO title='Gentlemen SA - Online fashion store for real men' />
      <BackgroundImage
        Tag="section"
        className={ StyledBackground }
        fluid={data.catalog.childImageSharp.fluid}
        alt="Gentlemen SA"
      >
        <HeroOverlay>
          <Hero
            title='Gentlemen SA'
            text='Real men only'
            link='/all'
            button='Explore'
            class={ HeroButton }
          />
        </HeroOverlay>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        className={ StyledBackground }
        fluid={data.blazers.childImageSharp.fluid}
        alt="Gentlemen SA"
      >
        <SectionOverlay>
          <Hero
            title='Classic Man Blazers.'
            text='30% Off Sale'
            link='/collection/blazers'
            button='Explore'
            class={ SectionButton }
          />
          <InsideBorder />
        </SectionOverlay>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        className={ StyledBackground }
        fluid={data.shirts.childImageSharp.fluid}
        alt="Gentlemen SA"
      >
        <SectionOverlay>
          <Hero
            title='Smart Dress Shirts.'
            text='Starting @ R899'
            link='/collection/shirts'
            button='Explore'
            class={ SectionButton }
          />
          <InsideBorder />
        </SectionOverlay>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        className={ StyledBackground }
        fluid={data.shoes.childImageSharp.fluid}
        alt="Gentlemen SA"
      >
        <SectionOverlay>
          <Hero
            title='Premium Leather Shoes.'
            text='Keep On Walking'
            link='/collection/shoes'
            button='Explore'
            class={ SectionButton }
          />
          <InsideBorder />
        </SectionOverlay>
      </BackgroundImage>
    </>
  )
}

export const query = graphql`
  query {
    catalog: file(name: {eq: "gentlemen-sa"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    blazers: file(name: {eq: "gentlemen-sa-classic-blazers"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    shirts: file(name: {eq: "gentlemen-sa-smart-shirts"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    shoes: file(name: {eq: "gentlemen-sa-premium-shoes"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default IndexPage