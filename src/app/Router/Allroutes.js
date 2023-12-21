

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../Pages/LoginPage'
import Home from '../../Pages/Home'
import SignupPage from '../../Pages/SignupPage'

import CartPage from '../../Pages/CartPage'
import Checkout from '../../Pages/Checkout'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />

    </Routes>
  )
}

export default Allroutes
