import React from 'react'
import { motion } from 'motion/react';
const NewsletterBox = () => {

    const onSubmitHandler =(event)=>{
        event.preventDefault();
    }
  return (
    <motion.div 
    initial={{opacity:0 , y:100}}
      whileInView={{opacity:1, y:  0}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.8,
      }}
    className='text-center outfit-regular' >
      <p className='text-2xl font-medium text-gray-800' >Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Be the First to Know. Never Miss a Drop.</p>

      <form onSubmit={onSubmitHandler} className='w-fu11 sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>

      </form>
    </motion.div>
  )
}

export default NewsletterBox
