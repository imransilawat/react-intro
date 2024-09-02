import React from 'react'
import {useParams} from 'react-router-dom'

function ProductDetail({data}) {

    const {id} = useParams()

    const findId = data.find(Pid => Pid.id === parseInt(id))

  return (
  <>
  <div key={findId.id}>
    <h3>{findId.name}</h3>
    <img src={findId.images} alt="" />
    <h3>{findId.price}</h3>
  </div>
  </>
  )
}

export default ProductDetail