import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import PixelTrail from '../PixelTrail/PixelTrail.jsx';
import {motion} from 'motion/react';
const About = () => {
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
   const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
     initial="hidden"
        animate="visible"
        variants={containerVariants}
    style={{   position: 'relative', overflow: 'hidden' }}>
  {/* Background Animation */}
  <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
    <PixelTrail
      gridSize={50}
      trailSize={0.1}
      maxAge={250}
      interpolate={5}
      color="#7393B3"
      gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
    />
  </div>
    
    <div className=' gap-2 items-center mb-3 text-2xl flex justify-center  pt-8 border-t' >
            <p className="text-gray-500 ">  ABOUT <span className='text-gray-700 font-medium' > ME</span> </p>
            <p className='w-8 sm:w-12 j-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>

    <motion.div 
    variants={itemVariants}
    className='my-10 flex flex-col md:flex-row gap-16'>
        <img src= {assets.about_img} className='w-full sm:max-w-[450px]  md:max-w-[450px]' alt="" />
        <div className='flex  flex-col justify-center gap-6  md:w-2/4 text-gray-600'>
        <h1  className="text-4xl font-bold text-center mb-4">Hey, I am Yash</h1>
        <p>I’m a 2nd-year B.Tech student at NIT Jaipur who loves turning ideas into full-stack apps and playing around with ML and MLOps.</p>
        <p> This site is where I mess around with code, ideas. I build things on the internet — sometimes they work, sometimes they break, and sometimes they just look cool.</p>
        <p>When I’m not coding, I’m either playing football, reading something interesting, or wondering why my code broke… again.</p>
        
        </div>

      </motion.div>
      
      
      <NewsletterBox />
    </motion.div>
  )
}

export default About
