import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Header'
import './Header.css'

import Slider from './Slider'


import Card from './Card'


import Footer from './Footer'

import uzair from '../src/assets/pic.jpeg'
import abc from  '../src/assets/pic3.jpeg'
import qwe from '../src/assets/pic4.jpeg'
import asd from '../src/assets/pic5.jpeg'

function App() {
  // const [count, setCount] = useState(0)

  const deta = [
    {
      id :1,
      images:uzair,
      price : 500,
      name : 'baby'
    },

    {
      id :2,
      images:abc,
      price : 1000,
      name : 'flower'
    },

    {
      id :3,
      images:qwe,
      price : 1500,
      name : 'tajmahal'
    },

    {
      id :4,
      images:asd,
      price : 2000,
      name : 'laptop'
    },
  ]



  return (
    <>

    <Header/>
    <Slider/>
    {/* <Card 
    images={uzair}
    name={'nike'}
    price={500}/> */}
{/* 
<Card 
images={abc}
name={'wood'}
price={100}/>  */}

{/* <Card
images={qwe}
name={'flower'}
price={50}/> */}

{/* <Card
images={asd}
name={'mou'}
price={150}
/> */}

<div className='dis'>
{
  deta.map((i) => (
    <Card
    images={i.images}
    name={i.name}
    price={i.price}/>
  ))
}
</div>




    <Footer/>



    </>

  
  )
}

export default App


