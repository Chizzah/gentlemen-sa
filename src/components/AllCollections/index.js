import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag,
  Button
} from './styles'

const AllCollections = () => {
  const { store: {checkout} } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: {fields: title, order: ASC}) {
          edges {
            node {
              id
              title
              handle
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, srcSetBreakpoints: [400]) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'ZAR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
          <Product key={id} >
              {firstImage && firstImage.localFile &&
                (<Image
                  fluid={firstImage.localFile.childImageSharp.fluid}
                  alt={handle}
                />)}
            <Title>{title}</Title>
            <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
            <Link to={`/product/${handle}/`}><Button>View Product</Button></Link>
          </Product>
          
        ))
        : <p>No Products found!</p>}
    </Grid>
  )
}

export default AllCollections