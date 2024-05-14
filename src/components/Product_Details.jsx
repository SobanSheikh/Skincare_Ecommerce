import React from 'react'
import { a1 } from '../assets/images'
import { useCart } from './CartContext';
const Product_Details = ({addToCart1, product2, handleClick3 }) => {


  const {addItemToCart} = useCart();
  return (
    <div className='flex  justify-between fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 shadow-lg
     bg-gray-50 z-10  sm:w-[400px] h-[550px] xl:w-[800px] '>

      <div className=' flex  flex-col
      w-[380px]
      p-2 mt-4 mb-4   font-semibold  gap-10'>
        <div onClick={handleClick3} className='cursor-pointer '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
        </div>


        <img
          src={product2.imageUrl}
          className='object-contain rounded-lg shadow-md'
        />
      </div>

      <div

        className='flex w-[385px] gap-2 flex-col p-2 mt-4 pr-4   overflow-y-auto'>
        <span className='mt-5 text-lg font-semibold'> {product2.name}</span>
        <span className='text-sm'>{product2.price}</span>

        <div className='flex '>
          <div onClick={()=>addItemToCart(product2)}  className='bg-coral-red rounded-lg p-1
                 cursor-pointer hover:bg-red-600 
                 text-white text-[11px]'>Add to Cart</div>

        </div>
        <span className='mt-2 text-sm font-semibold'>Descripton</span>
        <span
          className='text-justify text-[12px] '>
          {product2.description}
        </span>
        <span className='font-semibold text-sm'>Ingrediants:</span>
        <span
          className='text-justify text-[12px] '>
          {product2.ingredients}
        </span>
        <span className='font-semibold text-sm'>How to use?</span>
        <span className='text-[12px] '>{product2.usage}</span>
        

      </div>
    </div>

  )
}

export default Product_Details