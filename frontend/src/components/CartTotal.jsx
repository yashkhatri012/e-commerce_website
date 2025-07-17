import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'


const CartTotal = () => {

    const  {currency, delivery_fee, getCartAmount} = useContext(ShopContext);


  return (
    <div className='w-full'  >
      
        <div className=' gap-2 items-center mb-3 text-2xl flex   ' >
            <p className="text-gray-500 ">  CART <span className='text-gray-700 font-medium' > TOTAL</span> </p>
            <p className='w-8 sm:w-12 j-[1px] sm:h-[2px] bg-gray-700'></p>
    
        
      </div>
      <div>
        <div className='flex flex-col gap-2 mt-3 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>  {currency} {getCartAmount()}.00    </p>

            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p> {currency} {delivery_fee} </p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmount()=== 0 ? 0 : getCartAmount() + delivery_fee } </b>

            </div>
        </div>
      </div>

    </div>
  )
}

export default CartTotal
