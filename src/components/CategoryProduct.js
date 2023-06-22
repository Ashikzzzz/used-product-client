import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const CategoryProduct = () => {

    const data = useLoaderData()
    console.log(data)

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 mt-10 ml-28'>
        {
            data?.data?.map(d => {
                return  <div>
                <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full h-56 object-cover" src={d.picture}  alt="Card image"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                        <div class=" inset-0 flex mb-6 items-center justify-center">
                          <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                          
                            <h3 class=" font-semibold text-gray-800 mb-2">Name: {d.name}</h3>
                            <h3 class=" font-semibold text-gray-800 mb-2">Original Price: {d.original_price}</h3>
                            <h3 class=" font-semibold text-gray-800 mb-2">Resale price: {d.reslae_price}</h3>
                            <h3 class=" font-semibold text-gray-800 mb-2">Condition: {d.condition}</h3>
                            <h3 class=" font-semibold text-gray-800 mb-2">Name: {d.name}</h3>
                            <h3 class=" font-semibold text-gray-800 mb-2">Perchase year: {d.parchaseYear}</h3>
                            
                            <h3 class=" font-semibold text-gray-800 mb-2">Used year: {d.usedYear}</h3>
                            
             </div>
             
             </div>
            
             </div>
          <div className='mr-48 mt-2 '>
          <button className='btn btn-primary '> <Link to={`/bookingform/${d._id}`}>Book Now</Link> </button>
          </div>
             </div>
            })
        }
    </div>
  )
}

export default CategoryProduct