import React, { useContext, useEffect, useState } from 'react'
import { CONTEXT } from '../context/MainContext'
import Loader from '../loader/Loader'


const Advertised = () => {
const {loading}= useContext(CONTEXT)
const [items,setItems]=useState()

useEffect(()=>{
  fetch("http://localhost:5000/api/v1/advertised-product/get-advertised-product")
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    setItems(data?.data)
  })
},[])

if(loading){
  return <Loader></Loader>
}

  return (
   <div className=''>
    <h1 className='text-5xl font-bold my-10'>Advertised Items</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3'>
   {
    items?.map(item =>{
      return  <div className='ml-10'>
      <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full h-56 object-cover" src={item?.productURL}  alt="Card image"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div class=" inset-0 flex mb-6 items-center justify-center">
                <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">Name: {item?.productName}</h3>
                  <h3 class=" font-semibold text-gray-800 mb-2">Price: {item?.productPrice}</h3>
                  <h3 class=" font-semibold text-gray-800 mb-2">Contact: {item?.contact}</h3>
                  <h3 class=" font-semibold text-gray-800 mb-2">Location: {item?.location}</h3>
                 
   </div>
   </div>
   </div>
   </div>
    })
   }
    </div>
   </div>
  )
}

export default Advertised