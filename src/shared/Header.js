import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import laptop from "../assets/images/laptop-1.jpg"
import { CONTEXT } from '../context/MainContext'
import Loader from '../loader/Loader'

const Header = () => {

  const {user,loading}=useContext(CONTEXT)
  const navigate = useNavigate()

  const handleLogOut=()=>{
    localStorage.removeItem("token");
    
    navigate("/login");
}

if(loading){
  return <Loader></Loader>
}

  return (
    <div>
       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

             {
                user?.role==="buyer" &&
                <li><Link to="/myorders">My orders</Link></li>
              
            }
             {
                user?.role==="seller" &&
               <>
                <li><Link to="/addProduct">Add a Product</Link></li>
                <li><Link to="/myproduct">My Products</Link></li>
               </>
              
            }
            {
                user?.role==="admin" &&
              <>
                <li><Link to="/allbuyer">All Buyer</Link></li>
                <li><Link to="/allseller">All Seller</Link></li>
              </>
              
            }

      {
            user?.email  ? <>
          

          <li ><a onClick={handleLogOut}>Log Out</a></li>
            </>
            :
          <>
            <li><Link to="/login">Log In</Link></li>
        
        <li><Link to='/signup'>Sign Up</Link></li>
          </>
        }
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to="/">Used Product</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
            {
                user?.role==="buyer" &&
                <li><Link to="/myorders">My orders</Link></li>
              
            }
            {
                user?.role==="seller" &&
               <>
                <li><Link to="/addProduct">Add a Product</Link></li>
                <li><Link to="/myproduct">My Products</Link></li>
               </>
              
            }
            {
                user?.role==="admin" &&
              <>
                <li><Link to="/allbuyer">All Buyer</Link></li>
                <li><Link to="/allseller">All Seller</Link></li>
              </>
              
            }
  {
            user?.email  ? <>
          

        <li ><a onClick={handleLogOut}>Log Out</a></li>
            </>
            :
          <>
            <li><Link to="/login">Log In</Link></li>
        
        <li><Link to='/signup'>Sign Up</Link></li>
          </>
        }
    </ul>
  </div>
  
</div>
    </div>
  )
}

export default Header