import React, { useContext, useEffect } from 'react'
import StoreContext from '../context/StoreContext'

const ThanksPage = () => {
  const context = useContext(StoreContext)
  const { clearCheckout, checkout } = context
  useEffect(() => {
    if(checkout.lineItems.length !== 0) {
      clearCheckout()
    }
  },[checkout])

  return (
    <p>Thank you</p>
  )
}

export default ThanksPage