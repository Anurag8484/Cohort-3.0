import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { WishList } from './components/WishList'
import './App.css'
import { AmazonCard } from './components/AmazonCart'

import { RecoilRoot } from 'recoil'

function App() {

  return(
    <RecoilRoot>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<WishList />} />
        <Route path='/cart' element={<AmazonCard />} />

        
        
        </Route>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
  
}

export default App
