import React from 'react'
import animation from "../assets/animation/44377-laptop-animation.json"
import Lottie from 'lottie-react';
import laptop from "../assets/images/laptop-1.jpg"
import dell from "../assets/images/dell.jpg"
import hp from "../assets/images/hp.jpg"

const Categories = () => {
  return (
    <div>
        <h1 className='my-10 font-bold text-5xl'>Categories item</h1>
        <div className='flex items-center justify-evenly'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-4'>
                <div className=''>
                 <img className='w-40' src={laptop}></img>
                <h2 className='  border-solid rounded p-4 font-bold mt-2 hover:bg-slate-500'>Macbook</h2>
                </div>
                <div className=''>
                 <img className='w-40' src={dell}></img>
                <h2 className='  border-solid rounded p-4 font-bold mt-2 hover:bg-slate-500'>Dell</h2>
                </div>
                <div className=''>
                 <img className='w-40' src={hp}></img>
                <h2 className='  border-solid rounded p-4 font-bold mt-2 hover:bg-slate-500'>Hp</h2>
                </div>
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