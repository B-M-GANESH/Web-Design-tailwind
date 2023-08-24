import React from 'react'
import contact from '../img/contact.avif'

const Contact = () => {
  return (
    <div className='flex'>
        <div>
        <img src={contact} alt="no" />
        </div>
        <div className=' mt-20 ml-10'>
            <p className='text-blue-600 font-bold text-6xl'>Contact Us</p>
            <p className='text-blue-600 font-bold text-2xl mt-6 ml-3'>Concept Loading Page...</p>
            <p className='text-gray-800 font-bold ml-3 mt-3'>We are here to help you</p>
            <p className='text-gray-800 font-bold ml-3 mt-3'>A Contact Us page provides guidance for existing customers and </p>
            <p className='text-gray-800 font-bold ml-3'>offers an overview of your brand for new visitors.</p>
            <p className='text-gray-800 font-bold ml-3'> A strong Contact Us page should contain several elements, </p>
            <p className='text-gray-800 font-bold ml-3'>such as a phone number and links to social media channels. It should also be easy to navigate, </p>
            <p className='text-gray-800 font-bold ml-3'>as this makes for a positive customer experience</p>
            <div className='mt-16 ml-24 flex gap-10'>
            <a className='border-2 rounded-xl border-blue-600 text-blue-600 p-3 font-bold' href="#">+91 9876543210</a>
            <a className='border-2 rounded-xl border-blue-600 text-blue-600 p-3 font-bold' href="#">Call Us...</a>
            </div>
        </div>
        </div>
  )
}

export default Contact