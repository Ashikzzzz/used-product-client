import React from 'react'
import laptop from "../assets/images/laptop-1.jpg"
import { FaStar } from "react-icons/fa";


const Review = () => {
  return (
   <div className=''>
    <h1 className='text-slate-700 text-5xl font-bold my-10'>Customer Reviews</h1>
     <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-5'>
         <div className="card mt-4  bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div> <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={laptop} alt='' />
                                </div>
                            </div>
                            <div className='m-3'>
                                <h1 className='text-lg'>Name</h1>
                                <p>Location</p>
                            </div>
                        </div></div>
                        <div>
                       <div className='flex'>
                       <FaStar className='text-yellow-500'></FaStar>
                        <FaStar className='text-yellow-500'></FaStar>
                        <FaStar className='text-yellow-500'></FaStar>
                       </div>
                            <p className='text-center'>Rating</p>
                        </div>
                    </div>

                    <p> n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final c </p>

                </div>
            </div>
         <div className="card mt-4  bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div> <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={laptop} alt='' />
                                </div>
                            </div>
                            <div className='m-3'>
                                <h1 className='text-lg'>Name</h1>
                                <p>Location</p>
                            </div>
                        </div></div>
                        <div>
                        <div className='flex'>
                        <FaStar className='text-yellow-500'></FaStar>
                        <FaStar className='text-yellow-500'></FaStar>
                        <FaStar className='text-yellow-500'></FaStar>
                        </div>
                            <p className='text-center'>rating</p>
                        </div>
                    </div>

                    <p> n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final c </p>

                </div>
            </div>
         <div className="card mt-4  bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div> <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={laptop} alt='' />
                                </div>
                            </div>
                            <div className='m-3'>
                                <h1 className='text-lg'>Name</h1>
                                <p>Location</p>
                            </div>
                        </div></div>
                        <div>
                           <div className='flex'> 
                           <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                           </div>
                            <p className='text-center'>rating</p>
                        </div>
                    </div>

                    <p> n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final c </p>

                </div>
            </div>
    </div>
   </div>
  )
}

export default Review