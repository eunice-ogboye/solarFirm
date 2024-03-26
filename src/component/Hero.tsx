import React from 'react'
import Navbar from "./navbar"
import heroimg from '../asset/heroimg.jpg'
const Hero = () => {
  return (
    <div className='h-screen text-white bg-blue-900'>
        <Navbar />
        <div className="flex px-16 ">
            <div className="flex flex-col w-2/4 justify-center text-left">
                <p className='text-sm'>WELCOME TO</p>
                <h2 className='text-4xl font-bold'>GLOBAL GLITZ NIGERIA LIMITED</h2>
                <p className='text-xs py-4 text-gray-300'>A well recognized leading company in electrical engineering, advanced agricultural technology, and sustainable energy solutions. Committed to innovation, excellence, and sustainability.</p>
                <button className='bg-white text-blue-900 p-2 w-32 rounded-sm'>Read More</button>
            </div>
            <div>
                <img src={heroimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero