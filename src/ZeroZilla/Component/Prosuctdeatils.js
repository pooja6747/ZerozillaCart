import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import './Productdetails.css'


export default function Prosuctdeatils() {
    const [details,setDeatils]=useState([]);
  
   useEffect(()=>{
    const url=`https://fakestoreapi.com/products/category/jewelery`;
    fetch(url)
    .then((res)=>res.json())
    .then((responce)=>{
        setDeatils(responce);
      
        console.log("Responce is",responce);
    })
   },[])
  return (
    <>
      <Link to="/"> <button>BACK</button></Link>
        <h1 style={{color:'black',fontSize:'50px',textShadow:'2px 2px white',textAlign:'center',textTransform: 'uppercase'}}>Details</h1>
       
     
        {
            details.map((value)=>(
       <div className='card' style={{width:'28rem',height:'30rem',display:'inline-block',backgroundColor:'gray'}}>
         <div>
      
           <img className='product-image' src={value.image}  alt={value.img_url}></img>
         </div>

         <div> 
          <h3 className='product-name'>{value.category}</h3> 
         </div>
       
       <div className='pdoduct-price'>${value.price}</div>

       <div className='pdoduct-deccription'>{value.description}</div> 

<div>
  
</div>
       
    
       </div>

     ))
   }
    </>
  )
}
