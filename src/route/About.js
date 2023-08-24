import React from 'react'
import about from '../img/about.png'

const About = () => {
  return (
    <div className='ml-10 flex'>
      <div>
      <p className='font-bold text-5xl mt-32'>Slack is where</p>
      <p className='font-bold text-4xl'>Work Happens</p>
      <p className='text-gray-600 mt-3'>With channels in Slack, you and your team know</p>
      <p className='text-gray-600'>where to go to ask questions, share updates and</p>
      <p className='text-gray-600'>stay in the loop</p>
      <div className='mt-10 flex gap-5'>
      <a className=' text-white font-bold text-sm border border-violet-800 bg-violet-800 rounded-md px-6 py-3 transform hover:scale-110 duration-100' href="#">TRY FOR FREE</a>
      <a className=' text-violet-800 font-bold text-sm border border-violet-800 rounded-md px-6 py-3 transform hover:scale-110 duration-100 ' href="#">CONTACT SALES</a>
      </div>
      </div>
      <div>
        <img src={about} alt="about" className='h-50 w-50'/>
      </div>
    </div>
  )
}

export default About