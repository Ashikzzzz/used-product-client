import React, { useContext, useState } from 'react'
import animation from "../assets/animation/49328-packaging.json"
import Lottie from 'lottie-react';
import { CONTEXT } from '../context/MainContext'
import { useNavigate } from 'react-router-dom';


const imgHostKey = process.env.REACT_APP_Imgbb_key;

const AddProduct = () => {
  const navigate = useNavigate()
  const [productURL,setProductURL]=useState()
  const {user}= useContext(CONTEXT)

  const handleAddProduct =(e)=>{
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const condition  = form.condition.value;
    const contact = form.contact.value;
    const location = form.location.value;
    const category = form.category.value;
    const usedYear = form.usedYear.value;
    const description = form.description.value;
    const email = user?.email
   
    if(productURL){
      const addProductData={
        productName,
        productPrice,
        condition,
        contact,
        location,
        category,
        usedYear,
        description,
        email,
        productURL
        
      }
      console.log(addProductData)

      fetch("http://localhost:5000/api/v1/product/add-product",{
        method: "POST",
        headers : {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("token")}`
        },
        
        body: JSON.stringify(addProductData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data?.data)
        if(data?.status === "success"){
          alert(data?.massage)
          e.target.reset()
          navigate("/myproduct")
        }
        else{
          alert("Already Created")
        }
      })

    }
}


const handleImage = (e)=>{
const image = e.target.files[0]
if(image){
  const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    console.log(url)
    fetch(url, {
			method: 'POST',
			body: formData,
		})
    .then((res) => res.json())
    .then( data =>{
      console.log(data)
      setProductURL(data?.data?.url)
    })
}
}

  return (
    <div>
      <h1 className='font-bold text-3xl text-slate-900 my-10'>Add Your Product to sell</h1>
     <div className='grid lg:grid-cols-2 grid-cols-1'>
      <div>
      <div className=''>
            <Lottie className='w-96 ml-40' animationData={animation} loop={true} />
       </div>
      </div>
      <div>
      <form onSubmit={handleAddProduct} >
      <div>
       <input type="text" name='productName' placeholder="Product Name" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
      <div>
       <input type="number" name='productPrice' placeholder="Product price" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
      <div>
       <input  type="file" onChange={handleImage} placeholder="Product image" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
      <div>
      <select type='text' name='condition' className="select select-success w-full max-w-xs mt-4">
         <option disabled selected>Your Product Condition</option>
         <option>Excellent</option>
        <option>Good</option>
        <option>Fair</option>
     </select>
       </div>
       <div>
       <input type="text" name='contact' placeholder="Your Number" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
       <div>
       <input type="text" name='location' placeholder="Your Location" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
       <div>
      <select name='category' className="select select-success w-full max-w-xs mt-4">
         <option disabled selected> Product Category</option>
         <option>Macbook</option>
        <option>Dell</option>
        <option>HP</option>
     </select>
       </div>
       <div>
       <input type="text" name='usedYear' placeholder="Year of Purchase" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
       <div>
       <textarea name='description' className="textarea textarea-success mt-4 w-full max-w-xs" placeholder="Bio"></textarea>
       </div>
       <button className='btn btn-neutral w-full max-w-xs mt-8' type='submit'>Submit</button>
      </form>
      </div>
     </div>
    </div>
  )
}

export default AddProduct