import React from "react";

import './Card.css'
import { Link } from "react-router-dom";




function Card({ images, name, price,id}) {

    return (
        <>

            <div className="parent">

                <div className="main">
                    <div className="image1">
                        <img src={images} alt="" />
                    </div>
                   
                    <div className="content">
                        <h3>name : {name}</h3>
                        <h3>price : {price}</h3>
                      <Link to={`/product-detail/${id}`}><button>see more</button></Link>
                    </div>
                </div>
               
            </div>

          

        </>
    )
}
export default Card;