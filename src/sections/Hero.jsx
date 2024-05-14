import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import { shoes, statistics } from '../constants';
import ShoeCard from '../components/ShoeCard';
import { a9,a3,a1 } from '../assets/images';
import Slider from 'react-slick';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { skinProducts } from '../constants';


const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(a1);
  const [bigShoeDescp,setbigShoeDescp] = useState(skinProducts[0].benefits)
  const [products, setProducts] = useState([]);
  


  
  return (
    <section id='home'
      className='w-full flex xl:flex-row
     flex-col justify-center min-h-screen gap-10 
     max-container'>

      <div className='relative
      xl:w-2/5 flex flex-col justify-center items-start
      w-full max-xl:padding-x pt-28'>
        
        <h1 className='mt-10 font-palanquin
        text-8xl max-sm:text-[72-px]
        max-sm:leading-[82] font-bold'>
          <span
            className='xl:bg-white
          xl:whitespace-nowrap
          relative z-10 pr-10'
          >The New Arrival</span>
          <br />of <span className='text-coral-red inline-block
          mt-3 '>Skin </span> Care

        </h1>
        <p className='font-montserrat
        text-slate-gray text-lg
        leading-8 mt-6 mb-14
        sm:max-w-sm'>Discover stylish arrivals, quality comfort
          and innovation for your active life.
        </p>

        <Button
          label="Show Now"
          iconURL={arrowRight} />

        <div className='flex justify-start items-start
        flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>
                {stat.value}</p>
              <p className='leading-7 font-montserrat
               text-slate-gray'>{stat.label}</p>

            </div>


          ))}

        </div>


      </div>
      <div className='relative flex-1 flex justify-center w-full
       items-center xl:min-h-screen 
        bg-center'
      >
        <img
          src={bigShoeImg}
          alt="shoe collection"

          width={610}
          height={500}
          className='object-contain relative w-full  '/> 
          {/* changes for shoes w-full no object contain */}

          <div className='flex  flex-col p-2 bg-opacity-70 mt-14
          -top-[-10%] -right-[-2%] text-[14px] text-gray-700
          justify-center text-justify absolute
           min-w-[180px] min-h-[100px] border rounded-lg
            bg-red-100'>
          {bigShoeDescp.part1.map((descp,index)=>(
           <li key={index}>
            {descp}
           </li>
          ))}
          </div>

          <div className='flex  flex-col p-2 bg-opacity-50
           -left-[-2%] text-[14px] text-white
          justify-center text-justify absolute
          min-w-[180px] min-h-[100px] -bottom-[-18%] rounded-lg
           bg-gray-800 '>
          {bigShoeDescp.part2.map((descp,index)=>(
           <li key={index}>
            {descp}
           </li>
          ))}
          </div>

       <div className='flex sm:gap-6 gap-4 absolute -bottom-[8%]  max-sm:px-6'>
          {skinProducts.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                changeBigShoeDescp={(shoe) => setbigShoeDescp(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>

      </div>


    </section>
  )
}

export default Hero