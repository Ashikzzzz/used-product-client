import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { CONTEXT } from '../context/MainContext';
import Loader from '../loader/Loader';

const AllBuyer = () => {
const {loading} =useContext(CONTEXT)
  const { data: allbuyers = [], isLoading, refetch } = useQuery({
    queryKey: ['allbuyers'],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/api/v1/users/allbuyer")
        const data = await res.json();
        return data
    }
});


const handleDeleteBuyer = (id) =>{
  fetch(`http://localhost:5000/api/v1/users/allbuyer/${id}`, {
    method: 'DELETE'
})
    .then(res => res.json())
    .then(data => {
        console.log(data, ' deleted');
        if(data?.status === "Buyer delete  successful"){
          alert(data?.massage)
          refetch()
      }
    })
}

if(loading){
  return <Loader></Loader>
}



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
        allbuyers?.data?.map((buyer,i) =>{
            return  <tr>
            <th>{i+1}</th>
            <td>{buyer?.name}</td>
            <td>{buyer?.email}</td>
            <td>{buyer?.role}</td>
            <th>
                <button onClick={() => handleDeleteBuyer (buyer._id)} className="btn btn-accent btn-xs">Delete</button>
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

