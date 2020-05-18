import React, { useContext } from 'react'
import { Link } from 'gatsby'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import {
	Wrapper,
	Container,
	Brand,
	Menu,
	Dropdown,
	DropdownContent,
	CartCounter,
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<Wrapper>
			<Container>
				<li><Link to='/'>
					<Brand>{siteTitle}</Brand>
				</Link></li>
				<Menu>
					<li>
						<Dropdown>
							<span>Shop &dArr;</span>
							<DropdownContent>
								<Link to='/collection/shirts' activeStyle={{ color: '#A08D7C' }}>Shirts</Link>
								<Link to='/collection/blazers' activeStyle={{ color: '#A08D7C' }}>Blazers</Link>
								<Link to='/collection/shoes' activeStyle={{ color: '#A08D7C' }}>Shoes</Link>
								<Link to='/collection/belts' activeStyle={{ color: '#A08D7C' }}>Belts</Link>
								<Link to='/collection/suits' activeStyle={{ color: '#A08D7C' }}>Suits</Link>
							</DropdownContent>
    				</Dropdown>
					</li>
					<li><Link to='/about' activeStyle={{ color: '#A08D7C' }}>About Us</Link></li>
					<li><Link to='/blog' activeStyle={{ color: '#A08D7C' }}>Our Blog</Link></li>
					<li><Link to='/contact' activeStyle={{ color: '#A08D7C' }}>Contact Us</Link></li>
				</Menu>		
				<Link to='/cart'>
					<Brand>
						{hasItems &&
							<CartCounter>
								{quantity}
							</CartCounter>
						}
							🛍
					</Brand>
				</Link>
			</Container>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation