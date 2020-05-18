import React from 'react'

import Cart from '~/components/Cart'
import {
  CartContainer,
  CartTitle 
} from '~/utils/styles'

const CartPage = () => (
  <CartContainer>
    <CartTitle>Your Cart</CartTitle>
    <Cart />
  </CartContainer>
)

export default CartPage
