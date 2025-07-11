import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import PixelTrail from '../PixelTrail/PixelTrail.jsx';
import {motion} from 'motion/react';
const About = () => {
  return (
    <div style={{   position: 'relative', overflow: 'hidden' }}>
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
    <motion.div className='text-2xl text-center pt-8 border-t'
    // initial={{
    //   x:-10
    // }}
    transition={{
     

    }}
    animate={{
      // x:[0,10,-10,0,10,-10,0],
      rotate:360,
      
    }}>
      <Title text1={'ABOUT'} text2={'ME'} />
    </motion.div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src= {assets.about_img} className='w-full sm:max-w-[450px]  md:max-w-[450px]' alt="" />
        <div className='flex  flex-col justify-center gap-6  md:w-2/4 text-gray-600'>
        <h1  className="text-4xl font-bold text-center mb-4">Hey, I am Yash</h1>
        <p>I’m a 2nd-year B.Tech student at NIT Jaipur who loves turning ideas into full-stack apps and playing around with ML and MLOps.</p>
        <p> This site is where I mess around with code, ideas. I build things on the internet — sometimes they work, sometimes they break, and sometimes they just look cool.</p>
        <p>When I’m not coding, I’m either playing football, reading something interesting, or wondering why my code broke… again.</p>
        
        </div>

      </div>
      
      
      <NewsletterBox />
    </div>
  )
}

export default About
