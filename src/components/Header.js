import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='flex justify-evenly p-3 '>
      <span><img className='h-10 w-10 ml-14' src={logo} alt="1" /></span>
     <h1 className='text-black flex-1 font-bold text-3xl mr-12 '>WebDesign</h1>
        <div className='flex gap-12 mr-28 mt-2 font-medium text-lg  text-gray-700'>
         <Link className='link' to='/'>Home</Link>
         <Link className='link' to='about'>About</Link>
         <Link className='link' to='service'>Service</Link>
         <Link className='link' to='pricing'>Pricing</Link>
         <Link className='link' to='contact'>Contact</Link>
        </div>
        <div className='border border-blue-600 bg-blue-600 text-white font-bold px-8 py-2 mr-20 rounded-full transform hover:scale-110 duration-150'>
         <a href="#">Download</a>
        </div>
     </div>
    </>
  )
}

export default Header