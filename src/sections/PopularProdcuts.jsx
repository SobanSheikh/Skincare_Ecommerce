import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard';
import { skinProducts } from '../constants';
import { useState } from 'react';
import Product_Details from '../components/Product_Details';
import { useEffect } from 'react';

const PopularProdcuts = ({showDetails1,handleClick1}) => {

  const [detailProduct, setdetailProduct] = useState({})
  return (
    <section id='products'
    className='max-container 
    max-sm:mt-12'>
      <div className='flex 
      flex-col justify-start gap-5'>
        <h2 className='text-4xl 
        font-palanquin font-bold'>Our <span className='text-coral-red'>
        Popular </span>Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Reveal your natural glow with our revitalizing skincare solutions.
        Embrace the beauty of radiant, healthy skin.
        </p>

      </div>

      <div className='
      mt-16 grid 
      lg:grid-cols-4 md:grid-cols-3 
      sm:grid-cols-2 grid-cols-1 
      sm:gap-6 gap-14'>
        {skinProducts.map((product)=>(
          <PopularProductCard key=
          {product.id} 
          product1 ={product}
          changeDetails ={(shoe) => setdetailProduct(shoe)}
          handleClick2 ={handleClick1}
          
          />
        ))}
      </div>

      
      {showDetails1 && <Product_Details addToCart1={fillCart} product2={detailProduct} handleClick3={handleClick1}/>}
    </section>
  )
}

export default PopularProdcuts