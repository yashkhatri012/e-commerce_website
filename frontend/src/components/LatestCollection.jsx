import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { motion, useScroll } from 'motion/react';
import {delay, easeInOut} from 'motion/react';


const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    
    const [latestProducts, setlatestProducts] = useState([]);
    const  useScrollX = useScroll().scrollXProgress
    useEffect(()=>{
        setlatestProducts(products.slice(0,10));
         
      }, [products]
    )
    
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

  return (
    <div className='my-10 outfit-regular' >
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <motion.p 
        initial={{ opacity:0 , scale:0.5}}
        whileInView={{ opacity:1 , scale:1 }}
        transition={{
          type: "spring",
          stiffness:150,
          damping:10,
          delay:0.6,
        }}
        className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600' >
          New Drops. Fresh Vibes. Just for You.
        </motion.p>
      </div>

      {/* Rendering Products */}

      <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{amount:0.8}}
      className='  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6' >
          {
            latestProducts.map((item, index)=>(
              <ProductItem variants={cardVariants} key={index} id={item._id} image={item.image} name={item.name}  price={item.price} />
            ))
          }
      </motion.div>
    </div>
  )
}

export default LatestCollection
