import React from 'react'
import Card from './Card'

import './Home.css'



function Home({data}) {


  // const data = [
  //   {
  //     id: 1,
  //     images: uzair,
  //     price: 500,
  //     name: 'baby'
  //   },


  //   {
  //     id: 2,
  //     images: abc,
  //     price: 1000,
  //     name: 'flower'
  //   },


  //   {
  //     id: 3,
  //     images: qwe,
  //     price: 1500,
  //     name: 'tajmahal'
  //   },


  //   {
  //     id: 4,
  //     images: asd,
  //     price: 2000,
  //     name: 'laptop'
  //   }

  // ]

  return (

    <>
    {
        <div className='rr'>
      {
        data.map((i) => (
          
          <Card
            images={i.images}
            name={i.name}
            price={i.price}
            id={i.id}
          />
       
       
        ))
      }
    </div>}

    </>

  )
}

export default Home