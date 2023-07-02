import React, { useContext, useEffect, useState } from 'react'
import { CONTEXT } from '../context/MainContext'
import Loader from '../loader/Loader'

const MyOrders = () => {
const {user,loading}= useContext(CONTEXT)
const [bookings,setBookings]=useState([])
// console.log(bookings)

useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/booking/product-booking/email?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data?.data)
        setBookings(data?.data)
    })
},[user?.email])

if(loading){
  return <Loader></Loader>
}

  return (
    <div>
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>price</th>
        <th>Condition</th>
        <th>Used Year</th>
      </tr>
    </thead>
    <tbody>
 {
    bookings?.map(booking =>{
        return    <tr>
        <th>
        
        </th>
        <td>
          <div className="flex items-center space-x-3">
           
            <div>
              <div className="font-bold">{booking?.name}</div>
              <div className="text-sm opacity-50">{booking?.email}</div>
            </div>
          </div>
        </td>
        <td>
        
          <br/>
          <span className="badge badge-ghost badge-sm">{booking?.reslae_price}</span>
        </td>
        <td>{booking?.condition}</td>
        <td>{booking?.usedYear}</td>
        <th>
          <button className="btn btn-accent btn-xs">Pay</button>
        </th>
      </tr>
    })
 }
      
    </tbody>    
  </table>
</div>
    </div>
  )
}

export default MyOrders



