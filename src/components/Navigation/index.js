import React, { useContext } from 'react'
import { Link } from 'gatsby'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { Wrapper, Container, Brand, NavItems, CartCounter } from './styles'
import CartIcon from '../../../resources/icons/cart.svg'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <Wrapper>
      <Container>
        <Brand>
          <Link to="/">{siteTitle}</Link>
        </Brand>
        <NavItems>
          <li>
            <Link to="/all-collections">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </NavItems>
        <Brand>
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          <img src={CartIcon} alt="Shopping cart icon" />
        </Brand>
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
