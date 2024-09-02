// import React,{useState} from "react";

// function Count(){

//     const [Count, setCount] = useState(1)

//     function dec(){
//        if(Count === 0){
//         setCount(5)
//        }
//        else{
//         setCount(Count - 1)
//        }
//     }

//     function inc(){
//        if(Count ===5){
//         setCount(0)
//        }
//        else{
//         setCount(Count +1)
//        }

        
//     }


//     return(
//         <>

//         <h1>{Count}</h1>
//         <button onClick={dec}>Discriment</button>
//         <button onClick={inc}>Increment</button>

//         </>
//     )
// }

// export default Count







// images increent

// import React, {useState} from "react";

// import './Count.css'

// const ImageSwitcher = () =>{

//     const images =[
//      'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',

//      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
     
//      'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',

//      'https://t3.ftcdn.net/jpg/02/70/35/00/360_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg'

//     ];

//     const [Count,setCount] = useState(0);

//     const handleClick = () => {

//         setCount((prevCount) => (prevCount + 1) % images.length);
//     };

//     return(
//         <div className="count">
//       <img
//       src={images[Count]}
//       alt={{width:'300px', height: '300px'}}
//       />
//       <button onClick={handleClick}>Next Image</button>
//         </div>
//     );
// };

// export default ImageSwitcher;











import React,{useEffect} from "react";
import { useState } from "react";
// import{Fcnext} from "react-icons/fc";
// import {FcPrevious} from "react-icon/fc";
import"./Count.css";


function Count(){
    const[number,setNumber] = useState(1)

    const images =[
       {
        id:1,
        src:"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
       },

       {
        id:2,
        src:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
       },

       {
        id:3,
        src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
       },

       {
        id:4,
        src:"https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"
       }
    ]

    const handleNext = ()=>{
        if(number === images.length - 1){
            setNumber(0);
        }
        else{
            setNumber(number + 1);
        }
    };

    const handlePrev = () =>{
        if(number === 0){
            setNumber(images.length - 1);
        }
       else{
        setNumber(number - 1);
       }
    };

    useEffect(()=>{
        let interval = setInterval(()=>{
            handleNext();
        },2000);

        return()=> clearInterval(interval);
    })

    return(
        <>
        <div className="main-box">
            <div className="image-display">
                {" "}
                <img src={images[number].src}/>
            </div>
            {/* <button onClick={handlePrev} className="next-btn"><fcNext/>
            </button> */}
            <br/>

            {/* <button onClick={handleNext} className="prev-btn">
                <FcPrevious/>
            </button> */}
            <br/>
        </div>
        </>
    )
}

export default Count
