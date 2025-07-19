import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';


const Products = () => {
  const  {productId} = useParams();
  const {products, currency , navigate, addToCart} = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [addedToCart, setAddedToCart] = useState(false);
  const token = localStorage.getItem('token')
  
 const handleAddToCart = () => {
    addToCart(productData._id, size);
    toast.success("Item added to Cart!");
    setAddedToCart(true);
  }
 const fetchProductData = () => {
  

  const found = products.find((item) => item._id === productId);
  if (found) {
    setproductData(found);
    setImage(found.image[0])
    
  }
};
 

  useEffect(()=>{
     if (products.length > 0) {
    fetchProductData();
  }
  },[productId] )
  useEffect(()=>{
    setAddedToCart(false);
  },[size])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100' >
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
            {
              productData.image.map((item, index)=>(
                <img  onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%] '  >
            <img src={image}  className='w-full h-auto' alt="" />

          </div>
        </div>
            {/* Product Info */}
            <div className="flex-1">
              <h1 className='font-medium text-2xl mt-2'>  {productData.name} </h1>
              <div className='flex items-center gap-1 mt-2'>
                  <img src={assets.star_icon} className='w-3 5' alt="" />
                  <img src={assets.star_icon} className='w-3 5' alt="" />
                  <img src={assets.star_icon} className='w-3 5' alt="" />
                  <img src={assets.star_icon} className='w-3 5' alt="" />
                  <img src={assets.star_dull_icon} className='w-3 5' alt="" />
                  <p  className='pl-2'>(122)</p>

              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p  className='mt-5 text-gray-500 md:w-4/5'  > {productData.description} </p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=> setSize(item)} className={`border bg-gray-100 px-4 py-2 ${item ===  size ? 'border-orange-500' : ''} `} key={index}> {item} </button>
                  ))}
                </div>
              </div>

              <button onClick={()=>{
                if(addedToCart){
                  navigate('/cart')
                } else{
                  handleAddToCart()
                }
              } } className='bg-black text-white px-8 py-3 text-sm active:scale-95 transition-transform duration-100 ease-in-out'>
                {addedToCart ? "Proceed to Cart" : "ADD TO CART"}
                </button>
              <hr  className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return ans exchange policy within 7  days. </p>

              </div>
            </div>
      </div>

      {/* Description and Review Section */}
      <div className='mt-20'>
        <div className="flex">
          <b className="border px-5 py-3 text-sm" >Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
            <div className='flex flex-colgap-4 border  px-6 py-6 text-sm text-gray-500'>
              <p>An e-commerce website is an online platform that facilitates the buying and selling pf products or services over the internet.</p>

            </div>
      </div>

      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0' >

  </div>
}

export default Products
