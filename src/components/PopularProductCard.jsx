import React from 'react'
import { star } from '../assets/icons'
import { useState } from 'react';
import Product_Details from './Product_Details';
import { useCart } from './CartContext';

const PopularProductCard = ({ product1,changeDetails,handleClick2}) => {
 
  const handleClick_this = () => {
    handleClick2();
    changeDetails(product1);
  };

const {addItemToCart} = useCart();
  
  return (
    <div className='flex flex-1 flex-col
    w-full max-sm:w-full '>
      <img onClick={handleClick_this}
        src={product1.imageUrl} alt={product1.name}
        className="w-[280px] h-[280px] rounded-lg cursor-pointer" />

        


      <div  className='mt-8 flex 
        justify-around gap-2.5'>
        <img src={star}
          alt="rating"
          width={24}
          height24 />
        {/* <p className='font-montserrat text-xl leading-normal
            text-slate-gray'> (4.5)</p> */}

        <div onClick={()=>addItemToCart(product1)} className='cursor-pointer transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-150 ...'>
          <svg width={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>
      
      <h3 className='mt-2 text-2xl leading-normal font-semibold justify-center text-center
        font-palanquin'>{product1.name}</h3>
      <p className='mt-2 font-semibold text-center
        font-montserrat text-coral-red text-xl
        leading-normal'> {product1.price}</p>
    </div>
  )
}

export default PopularProductCard