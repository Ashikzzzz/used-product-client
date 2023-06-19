import React from 'react'
import { Link } from 'react-router-dom'
import loginAnimataion from "../assets/animation/21372-launch-yourself.json"
import Lottie from 'lottie-react';

const SignUp = () => {
  return (
    <div>
        <div>
        <h1 className='text-5xl font-bold mt-16 text-center text-cyan-900'>Sign Up Here</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
               {/* lottie  */}
        <div className='flex items-center '>
                    <Lottie className='w-96 ml-28' animationData={loginAnimataion} loop={true} />
                </div>

             <form>
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
                    <Link>Sign Up</Link>
               </button>
              
             </form>

        </div>
    </div>
    </div>
  )
}

export default SignUp