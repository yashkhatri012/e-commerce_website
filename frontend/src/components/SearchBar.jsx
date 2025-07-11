import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';


const SearchBar = () => {

    
    const {search, setSearch, showSearch, setshowSearch} = useContext(ShopContext);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname !== '/collection'){
            setshowSearch(false);
        } else { setshowSearch(true)}
        
    }, [location])
  return showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <motion.div 
      initial={{ opacity:0 , scale:0.5}}
        whileInView={{ opacity:1 , scale:1 }}
      className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2"> 
        <input value={search} onChange={(e)=> setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm  ' type="text" placeholder='Search' />
        <img src={assets.search_icon} className='w-4' alt="" />
      </motion.div>
      <img onClick={()=> setshowSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />
    </div>
  ) : null
} 

export default SearchBar
