import React, { children } from 'react'
import createContext from './cart-context'

const CartProvider = ({children}) => {
  return (
    <createContext.Provider>
      {children}
    </createContext.Provider>
  )
}

export default CartProvider