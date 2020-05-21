import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import Gallery from '~/components/Gallery'
import {
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
  ProductTitle,
  GalleryContainer
} from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            <GalleryContainer>
                <Gallery
                  image1={product.images[0].localFile.childImageSharp.fluid}
                  image2={product.images[1].localFile.childImageSharp.fluid}
                  image3={product.images[2].localFile.childImageSharp.fluid}
                />
            </GalleryContainer>
          </GridLeft>
          <GridRight>
            <ProductTitle>{product.title}</ProductTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra purus in felis aliquet, quis finibus metus faucibus. Sed bibendum erat sed magna elementum placerat.</p>
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 800, srcSetBreakpoints: [400]) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
