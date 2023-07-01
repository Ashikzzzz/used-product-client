import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import Loader from '../loader/Loader'
import { CONTEXT } from '../context/MainContext';

const MyProduct = () => {
const {user}=useContext(CONTEXT)

    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/product/my-product?email=${user?.email}`)
            const data = await res.json();
            return data
        }
    });

    const handleProductDelete = (id) => {
        fetch(`http://localhost:5000/api/v1/product/delete-product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data?.status === "success"){
                    alert(data?.massage)
                    refetch()
                }
            });
    }

const handleAdvertisedProduct = (product)=>{
    console.log(product)
    fetch("http://localhost:5000/api/v1/advertised-product/create-advertise",{
        method : "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data=> {
        console.log(data)
    })

}


    if(isLoading){
        return <Loader></Loader>
      }

  return (
    <div>
         {
            myProducts?.data?.map(product => {
                return     <div >
                    <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div className="card w-80 mt-5 bg-base-300 shadow-xl">
                    <div className="card-body">
                        <img src={product?.productURL}></img>
                        <h2 className="card-title">
                            Product Name :  {product?.productName}
                        </h2>
                        <div className=''>
                            <p><b>Price: </b> {product?.productPrice}</p>
                            <p><b>Contact: </b> ${product?.contact}</p>
                            <p><b>Location: </b> {product?.location}</p>
                            <p><b>Used Year: </b> {product?.usedYear}</p>
                        </div>
    
                        <div className="mt-8 card-actions justify-between">
                            <button
                                onClick={()=> handleAdvertisedProduct(product)}
                                className="btn btn-primary btn-sm">Advertised </button>
    
                            <button
                               onClick={() => handleProductDelete(product._id)}
                                className="btn btn-primary btn-sm">Delete</button>
                        </div>
                    </div>
                </div>
                    </div>
                
            </div >
            })
         }
    </div>
  )
}

export default MyProduct