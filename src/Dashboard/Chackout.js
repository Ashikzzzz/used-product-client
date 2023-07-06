import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import Lottie from 'lottie-react';
import chackout from "../assets/animation/50414-checkout-animation.json"
import { CONTEXT } from '../context/MainContext';


const Chackout = () => {
    const data = useLoaderData()
    // console.log(data?.data)
    const {user}= useContext(CONTEXT)



const handleChackout =(event)=>{
    event.preventDefault()
    const form = event.target
    const email = user?.email;
    const name= data?.data?.name;
    const reslae_price= data?.data?.reslae_price;
    const category_name = data?.data?.category_name
    const contact = data?.data?.contact;
    const location = data?.data?.location;
    const condition= data?.data?.condition;
    const usedYear = data?.data?.usedYear
    const currency= form.currency.value;
    const id = data?.data?._id
    



    const paymentInfo={
        id,
        email,
        name,
        reslae_price,
        category_name,
        contact,
        location,
        condition,
        usedYear,
        currency
    }
    console.log(paymentInfo)

    fetch("http://localhost:5000/api/v1/payment/ssl-request", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(paymentInfo),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            window.location.replace(data?.url);

            // console.log(data);
        })
        .catch((er) => console.error(er));

}


  return (
<div>
    <h2 className='text-4xl text-slate-800 font-bold my-10'>Your Are going to pay for {data?.data?.name}</h2>
    <h2 className='text-4xl text-slate-800 font-bold my-10'>Price is : {data?.data?.reslae_price}</h2>
<div className='grid lg:grid-cols-2 grid-cols-1'>
      
      {/* lottie  */}
      <div className='flex items-center '>
                <Lottie className='w-88 ml-28' animationData={chackout} loop={true} />
            </div>


    <form onSubmit={handleChackout}>
        <div className="mx-auto">
        <div className='mt-4'>
            <label className="label">
                <span className="label-text">Product Name</span>
           </label>
            <input type="text" defaultValue={data?.data?.name} name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
            </div>


            <div className='mt-4'>
            <label className="label">
                <span className="label-text">Your Email</span>
           </label>
            <input type="text" name="email" defaultValue={data?.data?.email} placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
            </div>

            
            <div className='mt-4'>
            <label className="label">
                <span className="label-text">Product Category</span>
           </label>
            <input type="text" name="category" defaultValue={data?.data?.category_name} placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
            </div>


            <div className='mt-4'>
            <label className="label">
                <span className="label-text">your Contact</span>
           </label>
            <input type="text" name="contact" defaultValue={data?.data?.contact} placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
            </div>


            <div className='mt-4'>
            <label className="label">
                <span className="label-text">your Location</span>
           </label>
            <input type="text" name="location" defaultValue={data?.data?.location} placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
            </div>


          
            <div className='mt-4'>
            <label className="label">
                <span className="label-text">Used Year</span>
           </label>
            <input type="text" name="usedYear" defaultValue={data?.data?.usedYear} placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
            </div>

            <div className='mt-4'>
            <label className="label">
                <span className="label-text">Your Currency</span>
           </label>
            <select name='currency' className="select select-primary w-full max-w-xs">
              <option disabled selected>Your currency</option>
              <option>BDT</option>
              <option>LPA</option>
              <option>USDT</option>
             
          </select>
            </div>

            <div className='mt-4'>
            <label className="label">
                <span className="label-text">Price</span>
           </label>
            <input type="text" name="price" defaultValue={data?.data?.reslae_price} placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
            </div>
        </div>
        <button type="submit" value="Pay" className="btn btn-accent mt-4 w-1/2 ">Pay</button>
    </form>
</div>
</div>
  )
}

export default Chackout