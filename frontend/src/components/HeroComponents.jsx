import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'; // ✅ correct import
import b from '../assets/b.png'; 

// Slide1 
export const Slide2 = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.5]);
    useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Slide1 Scroll Progress:", latest);
  });
  return (
    <motion.div
    style={{ scale }}
      ref={ref}
      className="flex flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto min-h-[400px] md:h-[60vh] rounded-2xl shadow-md overflow-hidden border border-gray-300"
    >
         {/* Right Side */}
      <div  className="w-full md:w-1/2 h-[250px] md:h-full">
       <motion.img
       initial={{opacity:0 , x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2,
            }}
            style={{ backgroundColor: "#ad4251" }}
          src={b}
          alt="Hero"
          className="w-full h-full  object-cover  "
        />

      </div>
      {/* Left Side */}
      <div
        
        className="w-full md:w-1/2 h-[250px] md:h-full flex items-center justify-center px-4 md:px-6 py-6 md:py-0"
      >
        <div className="text-[#414141] space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <p className="w-6 md:w-8 h-[2px] bg-[#414141]" />
            <motion.p 
            initial={{opacity:0 , x:-100}}
            whileInView={{opacity:1, x:  0}}
            transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2,
            }} className="font-medium text-sm md:text-base">	Fan Favourites</motion.p>
          </div>
          <motion.h1 
          initial={{opacity:0 , scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2,
            }} className="prata-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            Fresh Drops
          </motion.h1>
          <motion.div
          initial={{opacity:0 , x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2,
            }}
        
 className="flex items-center justify-center md:justify-start gap-2">
            <p className="font-semibold text-sm md:text-base">	Steal the Look</p>
            <p className="w-6 md:w-8 h-[1px] bg-[#414141]" />
          </motion.div>
        </div>
      </div>

     
    </motion.div>
  );
};




//  Slide2
export const Slide1 = () => {
  const ref = useRef(null);
  const { scrollY} = useScroll( );
  const scale = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    
    <motion.div
    style={{ scale }}
      ref={ref}
      className="flex flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto min-h-[400px] md:h-[60vh] rounded-2xl shadow-md overflow-hidden border border-gray-300"
    >
      {/* Left Side */}
      <div
        
        className="w-full md:w-1/2 h-[250px] md:h-full flex items-center justify-center px-4 md:px-6 py-6 md:py-0"
      >
        <div className="text-[#414141] space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <p className="w-6 md:w-8 h-[2px] bg-[#414141]" />
            <motion.p 
            initial={{opacity:0 , x:-100}}
            whileInView={{opacity:1, x:  0}}
            transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2,
            }}
            className="font-medium text-sm md:text-base">OUR BESTSELLERS</motion.p>
          </div>
          <motion.h1 
          initial={{opacity:0 , scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2,
            }}
          
          className="prata-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            Latest Arrivals
          </motion.h1>
          <motion.div
          initial={{opacity:0 , x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2,
            }}
        

          className="flex items-center justify-center md:justify-start gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-6 md:w-8 h-[1px] bg-[#414141]" />
          </motion.div>
        </div>
      </div>

      {/* Right Side */}
      <div  className="w-full md:w-1/2 h-[250px] md:h-full">
        <motion.img
        initial={{opacity:0 , x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2,
            }}
          src={assets.hero_img}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};
