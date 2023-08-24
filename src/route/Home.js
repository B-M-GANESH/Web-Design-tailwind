import React from 'react'
import men from '../img/men.avif'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex">
    <div className="mt-32 ml-14">
      <p className="text-blue-600 font-bold ">Hey There I am ...</p>
      <h1 className="text-gray-950 text-4xl font-bold">Daniel Jack</h1> <br />
      <p>
        <span className="text-gray-500 text-xl font-bold">Professional  </span>
        <span className="text-gray-950 text-xl font-bold">Graphic Designer</span>
      </p> <br />
      <p className="text-gray-500 font-bold">
        If you cannot provide a valid href, but still need the element to
        resemble a link 
      </p>
      <p className="text-gray-500 font-bold">Note that the development build is not optimized.</p>
       <div className="flex gap-5 mt-10">
        <Link className='border border-blue-600 bg-blue-600 text-white font-bold px-8 py-2 rounded-full transform hover:scale-110 duration-150' to='contact'>Contact Me</Link>
        <Link className='border border-black bg-black text-white font-bold px-8 py-2 rounded-full transform hover:scale-110 duration-150' to='about'>Learn More</Link>
       </div>
    </div>
    <div>
    <div><img className="" src={men} alt="" /></div>
    </div>
    </div>
  )
}

export default Home