import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl text-slate-900'>Add Your Product to sell</h1>
      <form>
      <div>
       <input type="text" name='productName' placeholder="Product Name" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
      <div>
       <input type="text" name='productPrice' placeholder="Product price" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
      <div>
      <select name='condition' className="select select-success w-full max-w-xs mt-4">
         <option disabled selected>Your Product Condition</option>
         <option>Excellent</option>
        <option>Good</option>
        <option>Fair</option>
     </select>
       </div>
       <div>
       <input type="text" name='number' placeholder="Your Number" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
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
       <input type="text" name='year' placeholder="Year of Purchase" className="input input-bordered input-success w-full max-w-xs mt-4" readonly />
       </div>
       <div>
       <textarea name='text' className="textarea textarea-success mt-4 w-full max-w-xs" placeholder="Bio"></textarea>
       </div>
       <button className='btn btn-neutral w-full max-w-xs mt-8' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProduct