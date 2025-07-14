import React from 'react'
import { assets } from '../assets/assets'
import { Link } from "react-router-dom";
import { motion } from 'motion/react';
const Footer = () => {
  return (
    <motion.div
    initial={{opacity:0 , y:100}}
      whileInView={{opacity:1, y:  0}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.7,
      }}
    className='outfit-regular'>
      <div className='flex flex-col grid-cols-[3fr_1fr_1fr] sm:grid gap-14 my-10 mt-40 text-sm' >
        
        <div>
          <img src={assets.logo} alt="" className='mb-5 w-32' />
          <p className='w-full md:w-2/3 text-gray-600'>Forever</p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><Link to="/" className="hover:text-black transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-black transition">About Us</Link></li>
            <li><Link to="/orders" className="hover:text-black transition">Delivery</Link></li>
            <li><Link to="/" className="hover:text-black transition">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>8854089603</li>
            <li>yashkhatri88540@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-gray-400' />
        <p className='py-5 text-sm text-center'>Copyright 2024 @forever.com - All Rights Reserved.</p>
      </div>
    </motion.div>
  )
}

export default Footer
