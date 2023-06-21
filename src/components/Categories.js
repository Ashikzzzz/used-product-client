import React, { useEffect, useState } from 'react'
import animation from "../assets/animation/44377-laptop-animation.json"
import Lottie from 'lottie-react';
import laptop from "../assets/images/laptop-1.jpg"
import dell from "../assets/images/dell.jpg"
import hp from "../assets/images/hp.jpg"
import { Link } from 'react-router-dom';

const Categories = () => {

  const [productNames,setProductNames]=useState([])

  useEffect(()=>{
  fetch("http://localhost:5000/api/v1/product-name")
  .then(res => res.json())
  .then(data => {
    console.log(data?.data)
    setProductNames(data?.data)
  })
  },[])

  return (
    <div>
        <h1 className='my-10 font-bold text-5xl'>Categories item</h1>
        <div className='flex items-center justify-evenly'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-4'>
              {
                productNames.map(name =>{
                  return <div className=''>
                  <img className='w-40' src={laptop}></img>
                  <h2 className='  border-solid rounded p-4 font-bold mt-2 hover:bg-slate-500'><Link to={`product/${name?.category_name}`}>{name?.category_name}</Link></h2>
                  </div> 
                })
              }
            </div>
            <div>
            <div className='flex items-center '>
                    <Lottie className='w-96' animationData={animation} loop={true} ></Lottie>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Categories

