import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { motion } from 'motion/react';
const Collection = () => {
  const {products, search, showSearch } = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([])
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setsortType] = useState('relevent');

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    } 
    else{
      setCategory(prev=> [...prev, e.target.value])
    }
  }

  const togglesubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    } 
    else{
      setSubCategory(prev=> [...prev, e.target.value])
    }
  }
   const applyfilter =()=> {
    let productsCopy = products.slice();

    if (showSearch && search){
      productsCopy= productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    if(category.length>0){    
      productsCopy=productsCopy.filter(item=>  category.includes(item.category));

    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>  subCategory.includes(item.subCategory));

    }

    setfilterProducts(productsCopy)
   }

   const sortProduct =() => {
    let fpCopy =  filterProducts.slice();

    switch (sortType){
      case 'low-high':
        setfilterProducts(fpCopy.sort((a,b)=>(a.price -b.price)));
        break;
      case 'high-low' :
        setfilterProducts(fpCopy.sort((a,b)=>(b.price -a.price)));
        break;
        default:
          applyfilter();
          break;
    }


   }
   useEffect(()=>{
    applyfilter();
   },[category,subCategory , search, showSearch , products])
  
   useEffect(()=>{
    sortProduct();
   }, [sortType]
  )


  return (
    <div className=' flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'> 
      {/* Filter Options */}

      <div className='min-w-60' >
        <motion.p
        initial={{opacity:0 , y:-100}}
        whileInView={{opacity:1, y:  0}}
        viewport={{ once: true}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:10,
          delay:0.2,
        }}
        onClick={()=>setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</motion.p>
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showfilter ? 'rotate-90' :'' }`} alt="" />
        {/* Catagory Filter */}
        <motion.div 
        initial={{opacity:0 , x:-100}}
        whileInView={{opacity:1, x:  0}}
        viewport={{ once: true}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:10,
          delay:0.2,
        }}
        className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium' > CATAGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light  text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </motion.div>
        {/* SubCategory Filter */}

        <motion.div 
        initial={{opacity:0 , y:-100}}
        whileInView={{opacity:1, y:  0}}
        viewport={{ once: true}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:10,
          delay:0.2,
        }}
        className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium' > TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light  text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={togglesubCategory}/> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={togglesubCategory}/> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={togglesubCategory}/> Winterwear
            </p>
          </div>
        </motion.div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className='flex justify-between text-base sm:text-2xl mb-4' >
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
      {/* Product Sort */}
      <motion.select
      initial={{opacity:0 , y:100}}
      whileInView={{opacity:1, y:  0}}
      viewport={{ once: true}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.2,
      }}
      name="" onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' id="">
        <option value="relevent">Sort by: Relevance</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
      </motion.select>
        </div>
        {/* Map  Products */}
        <div className='grid  grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id}  price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
