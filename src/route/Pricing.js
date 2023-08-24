import React from 'react'
import pricing from '../img/pricing.jpg'
import pricing2 from '../img/pricing2.jpeg'
const Pricing = () => {
  return (
    <div className='flex justify-center mt-16'>
        <div>
            <center><p className='text-blue-600 font-bold text-3xl mb-3'>Pricing</p></center>
        <img className='w-96' src={pricing} alt="pricing" />
        </div>
        <div className='mx-64 mt-32 relative right-40'>
            <p className='text-blue-600 font-bold text-5xl'>PRICE LIST</p>
            <p className='text-blue-600 font-bold mt-3'>1.BASIC</p>
            <p className='text-blue-600 font-bold mt-3'>2.STANDARD</p>
            <p className='text-blue-600 font-bold mt-3'>3.PREMIUM</p>
        </div>
        <div>
        <img className='h-30 w-30  absolute right-36 bottom-10' src={pricing2} alt="nothing" />
        </div>
    </div>
  )
}

export default Pricing