import React from 'react'
import { useQuery } from 'react-query';
import Loader from '../loader/Loader';

const AllSeller = () => {

    const { data: allsellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/api/v1/users/allseller")
            const data = await res.json();
            return data
        }
    });


    const handleDeleteSeller = (id) =>{
        fetch(`http://localhost:5000/api/v1/users/allseller/${id}`, {
          method: 'DELETE',
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`
        }
      })
          .then(res => res.json())
          .then(data => {
              console.log(data, ' deleted');
              if(data?.status === "Seller delete  successful"){
                alert(data?.massage)
                refetch()
            }
          })
      }

      if(isLoading){
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
        allsellers?.data?.map((seller,i) =>{
            return  <tr>
            <th>{i+1}</th>
            <td>{seller?.name}</td>
            <td>{seller?.email}</td>
            <td>{seller?.role}</td>
            <th>
                <button onClick={() => handleDeleteSeller (seller._id)} className="btn btn-accent btn-xs">Delete</button>
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

export default AllSeller