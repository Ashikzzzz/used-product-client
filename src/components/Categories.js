import React from 'react'
import animation from "../assets/animation/44377-laptop-animation.json"
import Lottie from 'lottie-react';

const Categories = () => {
  return (
    <div>
        <h1 className='my-10 font-bold text-5xl'>Categories item</h1>
        <div className='flex items-center justify-evenly'>
            <div className=''>
                <h2 className=' border-solid rounded p-4 border-2 border-black font-bold mt-2 hover:bg-slate-500'>Macbook</h2>
                <h2 className=' border-solid rounded p-4 border-2 border-black font-bold mt-2 hover:bg-slate-500'>Dell</h2>
                <h2 className=' border-solid rounded p-4 border-2 border-black font-bold mt-2 hover:bg-slate-500'>HP</h2>
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