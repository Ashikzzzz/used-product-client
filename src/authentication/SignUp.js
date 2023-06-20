import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginAnimataion from "../assets/animation/21372-launch-yourself.json"
import Lottie from 'lottie-react';

const SignUp = () => {

    const navigate = useNavigate()

    const handleSignUpSubmit =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value 
        const location = form.location.value 
        const role = form.role.value 
      const userData = {
         name,
        email,
        password,
        location,
        role,
        }

        fetch("http://localhost:5000/api/v1/users/create-user",{
            method:"POST",
            headers : {
                "Content-type":"application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data?.status === "success"){
                alert(data?.massage)
                navigate("/")
            }
        })
    }


  return (
    <div>
        <div>
        <h1 className='text-5xl font-bold mt-16 text-center text-cyan-900'>Sign Up Here</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
               {/* lottie  */}
        <div className='flex items-center '>
                    <Lottie className='w-96 ml-28' animationData={loginAnimataion} loop={true} />
                </div>

             <form onSubmit={handleSignUpSubmit}>
             <div className='grid grid-cols-1'>
              <div className='mt-8'>
                <label className="label">
                    <span className="label-text">What is your name?</span>
               </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <div className='mt-1'>
                <label className="label">
                    <span className="label-text"> Your Email?</span>
               </label>
                <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <div className='mt-1'>
                <label className="label">
                    <span className="label-text"> Your password?</span>
               </label>
                <input type="text" name='password' placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <div className='mt-1'>
                <label className="label">
                    <span className="label-text">Your Location?</span>
               </label>
                <input type="text" name='location' placeholder="Your Location" className="input input-bordered input-primary w-full max-w-xs " />
                </div>
                <div>
                <label className="label">
                    <span className="label-text">Your role?</span>
               </label>
                <select name='role' className="select select-primary w-full max-w-xs">
                         <option disabled selected>What is your Role?</option>
                             <option>buyer</option>
                            <option>seller</option>
                            </select>
                </div>
              </div>
              <p className='font-normal text-sm mt-1'> Already Have an Account?<Link className='underline' to="/login"> Click here</Link> </p>
               <button type='submit' className="text-sm mt-6  w-1/2 mx-auto border-b-2  btn btn-primary ">
                    Sign Up
               </button>
              
             </form>

        </div>
    </div>
    </div>
  )
}

export default SignUp