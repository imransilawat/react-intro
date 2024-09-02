
import './App.css'
import Header from './Header'
import './Header.css'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Count from './Count';
import Service from './Service';
import ProductDetail from './ProductDetail'
import { useState } from 'react'

import uzair from '../src/assets/pic.jpeg'
import abc from '../src/assets/pic3.jpeg'
import qwe from '../src/assets/pic4.jpeg'
import asd from '../src/assets/pic5.jpeg'
import imr from '../src/assets/sec2.jpeg'


import phn from '../src/assets/img6.jpeg'
import lap from '../src/assets/img7.jpeg'
import fan from '../src/assets/img8.jpeg'
import cap from '../src/assets/img9.jpeg'
import aad from '../src/assets/img10.jpeg'
import iny from '../src/assets/img11.jpeg'
import arh from '../src/assets/img12.jpeg'


import'./Home.css'


function App() {

  const [count,setCount]= useState(0)
  const data = [
    {
      id: 1,
      images: uzair,
      price: 500,
      name: 'baby-image'
    },


    {
      id: 2,
      images: abc,
      price: 1000,
      name: 'flower'
    },


    {
      id: 3,
      images: qwe,
      price: 1500,
      name: 'tajmahal'
    },


    {
      id: 4,
      images: asd,
      price: 2000,
      name: 'laptop'
    },

    {
      id: 5,
      images: imr,
      price: 200000,
      name: 'Ertiga'
    },


    {
      id: 6,
      images: phn,
      price: 1200,
      name: 'horse rider'
    },


    {
      id: 7,
      images: lap,
      price: 200000,
      name: 'fronx'
    },

    {
      id: 8,
      images: fan,
      price: 200,
      name: 'Apple'
    },

    {
      id: 9,
      images: cap,
      price: 1000,
      name: 'Char-minar'
    },

    {
      id: 10,
      images: aad,
      price: 10000,
      name: 'Bullet'
    },

    {
      id: 11,
      images: iny,
      price: 15000,
      name: 'yamaha'
    },

    {
      id: 12,
      images: arh,
      price: 250000,
      name: 'Xuv7oo'
    },






  ]


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home data={data} />}></Route>
          <Route path='/About' element={< About />}></Route>
          <Route path='/Count' element={< Count />}></Route>
          <Route path='/Service' element={< Service />}></Route>
          <Route path='/product-detail/:id'element={<ProductDetail data={data}/>}></Route>
          

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App


