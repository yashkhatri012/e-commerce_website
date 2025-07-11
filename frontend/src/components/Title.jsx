import React from 'react'
import { motion } from 'motion/react'
const Title = ({text1,text2}) => {
  return (
    <motion.div  
    initial={{ opacity:0 , y: 100}}
    whileInView={{ opacity:1 , y:0}}
    transition={{
      type: "spring",
      stiffness:150,
      damping:10,
      delay:0.2,
    }}
    className='inline-flex gap-2 items-center mb-3' >
        <p className="text-gray-500 ">  {text1} <span className='text-gray-700 font-medium' > {text2}</span> </p>
        <p className='w-8 sm:w-12 j-[1px] sm:h-[2px] bg-gray-700'></p>
    </motion.div>
  )
}

export default Title
