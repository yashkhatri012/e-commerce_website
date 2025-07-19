import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
import {delay, easeInOut, motion} from 'motion/react'


const cardVariants={
  hidden:{opacity:0, y:20},
  visible:{
    opacity:1,
    y:0,
    transition:{
          type: "spring",
          stiffness:150,
          damping:10,
          ease:easeInOut,
        }
  }
}


const containerVariants ={
   hidden:{opacity:1},
    visible:{
    opacity:1,
    y:0,
    transition:{
          delay:0.6,
          staggerChildren:0.4
        }
  }
}




const ProductItem = ({ id, image, name, price}) => {
    const {currency} =useContext(ShopContext);
    
  return (
    <motion.div 
    variants={cardVariants}
    initial="hidden"
    whileInView={"visible"}
    viewport={{amount:0.8, once: true}}
    className='hover:scale-110 '>
      <Link className='text-gray-700 dark:text-white cursor-pointer' to={`/product/${id}`} >
        <div className="overflow-hidden ">
            <img className='  transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm' > {name}</p>
        <p className='text-sm font-medium'> {currency} {price} </p>
      </Link>
    </motion.div>
  )
}

export default ProductItem
