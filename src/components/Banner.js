import React from 'react'
import laptop1 from "../assets/images/laptop-1.jpg"


const Banner = () => {
  return (
    <div>
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={laptop1} className="max-w-lg rounded-lg shadow-2xl hover:" />
    <div>
      <h1 className="text-5xl font-bold ">Resale Your Used Laptop</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner