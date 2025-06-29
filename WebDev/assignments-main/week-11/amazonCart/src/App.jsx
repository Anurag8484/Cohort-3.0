import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { WishList } from './components/WishList'
import './App.css'
import { AmazonCard } from './components/AmazonCart'

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<WishList />} />
        <Route path='/cart' element={<AmazonCard />} />

        
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
