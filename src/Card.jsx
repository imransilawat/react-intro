import React from "react";

import './Card.css'


function Card({images,name,price}){
    
    return(
        <>
      
       <div className="parent">

        <div className="main">
            <div className="image1">
                <img src={images} alt="" />
            </div>
            <div className="content">
                <h3>name : {name}</h3>
                <h3>price : {price}</h3>
                <button>buy now</button>
            </div>
            </div>

            </div>

           

        
        </>
    )
}
export default Card;