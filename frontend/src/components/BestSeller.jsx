import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from 'motion/react';
const BestSeller = () => {

    const {products}= useContext(ShopContext);
    const [BestSeller, setBestSeller] = useState([]);
        
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        
        setBestSeller(bestProduct.slice(0,5));
        
    },[products])
  return (
    <div className='my-10' >
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLERS'} />
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
        Loved the Most. Worn Even More.
        </motion.p>
      </div>
      <div className='grid grid-cols2 sm:grid-cols-2 md:grid-cols-5 gap-4 gap-y-6' >
        {
            BestSeller.map((item, index)=>(
                <ProductItem key={index}  id={item._id} image={item.image} name={item.name}  price={item.price} />
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller
