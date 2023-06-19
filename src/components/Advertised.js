import React from 'react'
import laptop from "../assets/images/laptop-1.jpg"

const Advertised = () => {
  return (
   <div className=''>
    <h1 className='text-5xl font-bold my-10'>Advertised Items</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3'>
    <div>
       <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
               <img class="w-full h-56 object-cover" src={laptop}  alt="Card image"/>
               <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
               <div class=" inset-0 flex mb-6 items-center justify-center">
                 <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                   <h3 class="text-xl font-semibold text-gray-800 mb-2">Animated Card</h3>
                   <p class="text-gray-700">This is an example of an animated card created using Tailwind CSS.</p>
    </div>
    </div>
    </div>
    </div>
     <div>
       <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
               <img class="w-full h-56 object-cover" src={laptop}  alt="Card image"/>
               <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
               <div class=" inset-0 flex mb-6 items-center justify-center">
                 <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                   <h3 class="text-xl font-semibold text-gray-800 mb-2">Animated Card</h3>
                   <p class="text-gray-700">This is an example of an animated card created using Tailwind CSS.</p>
    </div>
    </div>
    </div>
    </div>
     <div>
       <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
               <img class="w-full h-56 object-cover" src={laptop}  alt="Card image"/>
               <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
               <div class=" inset-0 flex mb-6 items-center justify-center">
                 <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                   <h3 class="text-xl font-semibold text-gray-800 mb-2">Animated Card</h3>
                   <p class="text-gray-700">This is an example of an animated card created using Tailwind CSS.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
   </div>
  )
}

export default Advertised