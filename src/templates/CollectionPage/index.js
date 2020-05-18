import React, { useContext } from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import StoreContext from '~/context/StoreContext'
import { Grid, Product, Title, PriceTag, Button } from './styles'

const CollectionPage = ({ data }) => {
	const {
		store: { checkout },
	} = useContext(StoreContext)
	const collection = data.shopifyCollection

	const getPrice = price =>
		Intl.NumberFormat(undefined, {
			currency: checkout.currencyCode ? checkout.currencyCode : 'ZAR',
			minimumFractionDigits: 2,
			style: 'currency',
		}).format(parseFloat(price ? price : 0))

	return (
		<Grid>
			{collection.products.map(product => (
				<Product key={product.id}>
					<Image
						fluid={product.images[0].localFile.childImageSharp.fluid}
						alt={product.handle}
					/>
					<Title>{product.title}</Title>
					<PriceTag>{getPrice(product.variants[0].price)}</PriceTag>
					<Link to={`/product/${product.handle}/`}>
						<Button>View Product</Button>
					</Link>
				</Product>
			))}
		</Grid>
	)
}

export const query = graphql`
	query($handle: String!) {
		shopifyCollection(handle: { eq: $handle }) {
			handle
			products {
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
`

export default CollectionPage
