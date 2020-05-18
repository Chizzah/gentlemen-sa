import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import {
  TwoColumnGrid,
  GridLeft,
  GridRight,
  Heading,
  Button
} from './styles'

const Cart = () => {
  const {
    store: { checkout },
    
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <TwoColumnGrid>
      <GridLeft>
        {line_items}
      </GridLeft>
      <GridRight>
        <Heading>Subtotal</Heading>
        <p>R {checkout.subtotalPrice}</p>
        <br />
        <Heading>Taxes</Heading>
        <p>R {checkout.totalTax}</p>
        <br />
        <Heading>Total</Heading>
        <p>R {checkout.totalPrice}</p>
        <br />
        <Button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </Button>
      </GridRight>
    </TwoColumnGrid>
  )
}

export default Cart
