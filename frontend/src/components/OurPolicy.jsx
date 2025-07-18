import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
const OurPolicy = () => {
  return (
    <div className='outfit-regular flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base
text -gray-700' >
      <motion.div 
      initial={{opacity:0 , y:100}}
      whileInView={{opacity:1, y:  0}}
      viewport={{ once: true}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.2,
      }}
      >
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className="font-bold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange Policy</p>
      </motion.div>
       <motion.div
       initial={{opacity:0 , y:100}}
      whileInView={{opacity:1, y:  0}}
      viewport={{ once: true}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.3,
      }}
       >
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </motion.div>
       <motion.div
       initial={{opacity:0 , y:100}}
      whileInView={{opacity:1, y:  0}}
      viewport={{ once: true}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.5,
      }}
      >
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </motion.div>
      
    </div>
    
    
   )
}

export default OurPolicy
