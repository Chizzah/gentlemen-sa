import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { motion } from "framer-motion"

import StoreContext from '~/context/StoreContext'
import Cart from '../../../resources/icons/cart.svg'
import HamburgerMenu from '../../../resources/icons/menu.svg'
import {
	Wrapper,
	Container,
	Button,
	MobileMenu,
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
	const [open, setOpen] = useState(false)
	const [hover, setHover] = useState(false)

	const menuVariants = {
		closed: {
			opacity: 0,
		},
		opened: {
			opacity: 1,
		}
	};

	return(
		<>
			<Wrapper>
				<Container>
					<Button onClick={() => setOpen(!open)}><img src={ HamburgerMenu } alt='Hamburger Menu icon' /></Button>
					<Link to='/'><Brand>{ siteTitle }</Brand></Link>
					<Menu>
						<li>Shop &dArr;</li>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/blog'>Blog</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
					</Menu>
					<Link to='/cart'><Brand>
					{hasItems &&
						<CartCounter>
							{quantity}
						</CartCounter>}
						<img src={ Cart } alt='Cart icon' />
					</Brand></Link>
				</Container>
			</Wrapper>
			<motion.div
				initial={ false }
				variants={ menuVariants }
				animate={ open ? 'opened' : 'closed' }
			>
				<MobileMenu>
					<ul>
						<li><Link to='/all-collections'>Shop</Link></li>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/blog'>Blog</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
					</ul>
				</MobileMenu>
			</motion.div>

			
			{/* <ul>
								<li><Link to='/all-collections'>All Collections</Link></li>
								<li><Link to='/collection/shirts'>Shirts Collection</Link></li>
								<li><Link to='/collection/blazers'>Blazers Collection</Link></li>
								<li><Link to='/collection/shoes'>Shoes Collection</Link></li>
								<li><Link to='/collection/belts'>Belts Collection</Link></li>
								<li><Link to='/collection/suits'>Suits Collection</Link></li>
							</ul>
						 */}
		</>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation