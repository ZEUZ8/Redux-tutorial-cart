import { useState } from 'react'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import cartItems from './cartItems'

function App() {

  return (
    <>
    <Navbar/>
    <CartContainer cart={cartItems}/>
    </>
  )
}

export default App
