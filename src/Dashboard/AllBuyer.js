import React, { useEffect, useState } from 'react'

const AllBuyer = () => {

    const [buyers,setBuyers]= useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/users/allbuyer")
        .then(res => res.json())
        .then(data => {
            console.log(data?.data)
            setBuyers(data?.data)
        })
    },[])


  return (
    <div>
        
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        buyers?.map((buyer,i) =>{
            return  <tr>
            <th>{i+1}</th>
            <td>{buyer?.name}</td>
            <td>{buyer?.email}</td>
            <td>{buyer?.role}</td>
            <th>
                <button className="btn btn-accent btn-xs">Delete</button>
            </th>
          </tr>
        })
    }
    </tbody>
  </table>
</div>

    </div>
  )
}

export default AllBuyer