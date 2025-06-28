import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='outfit-regular'>
      <div className='flex flex-col grid-cols-[3fr_1fr_1fr] sm:grid gap-14 my-10 mt-40 text-sm ' >
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
            janknfakk</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5' >COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-213-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
      <div>
        
        <hr className=' border-gray-400'/>
        <p className='py-5 text-sm text-center '>Copyright 2024@forever.com -All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
