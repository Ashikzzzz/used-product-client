import React, { useContext } from 'react'
import {  useLoaderData, useNavigate } from 'react-router-dom'
import { CONTEXT } from '../context/MainContext'

const BookingForm = () => {
    const data = useLoaderData()
    const {user}=useContext(CONTEXT)
    const navigate = useNavigate()
   
  const handleBookingForm=(event)=>{
    event.preventDefault()
    const form = event.target
    const email = user?.email;
    const name= data?.data?.name;
    const reslae_price= data?.data?.reslae_price;
    const category_name = data?.data?.category_name
    const contact = form.contact.value;
    const location = form.location.value;
    const condition= data?.data?.condition;
    const usedYear = data?.data?.usedYear
   

const bookingData ={
  email,
  name,
  reslae_price,
  category_name,
  contact,
  location,
  condition,
  usedYear,
  
}

fetch("http://localhost:5000/api/v1/booking/product-booking",{
  method: "POST",
  headers:{
    "content-type":"application/json",
    authorization: `bearer ${localStorage.getItem("token")}`
  },
  body: JSON.stringify(bookingData)
})
.then(res => res.json())
.then(data => {
  console.log(data)
  if(data?.status === "success"){
    alert(data.massage)
    navigate("/myorders")
  }

  if(data?.data === "already booked"){
    alert("product is already booked")
  }
  // navigate("/")
})
  }


  return (
    <div>
      <h1 className='font-bold text-3xl text-slate-900'>Your Are Going to {data?.data?.name}</h1>
        <form onSubmit={handleBookingForm}>
       <div>
       <input value={user?.name}  type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mt-8" readonly />
       </div>
       <div>
       <input type="text" value={user?.email} placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mt-8" readonly />
       </div>
       <div>
       <input type="text" value={data?.data?.name} placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mt-8" readonly/>
       </div>
       <div>
       <input type="text" value={data?.data?.reslae_price} placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mt-8" readonly/>
       </div>
       <div>
       <input type="text" name= "contact" placeholder="Your Phone Number" className="input input-bordered input-success w-full max-w-xs mt-8" />
       </div>
       <div>
       <input type="text" name="location"  placeholder="Your Location" className="input input-bordered input-success w-full max-w-xs mt-8" />
       </div>
       
       <button className='btn btn-neutral w-full max-w-xs mt-8' type='submit'> Book Now</button>

        </form>
    </div>
  )
}

export default BookingForm