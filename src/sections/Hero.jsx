import React from 'react';
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import { shoes, statistics } from '../constants';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';
import Carousel from "react-multi-carousel";
import Slider from 'react-slick';


const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 2500, min: 1024 },
  //     items: 3,
  //     // slidesToSlide: 3 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // };
  const settings = {
    dots: false,
    infinite: false,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '60px',
  };
  return (
    <section id='home'
      className='w-full flex xl:flex-row
     flex-col justify-center min-h-screen gap-10 
     max-container'>

      <div className='relative
      xl:w-2/5 flex flex-col justify-center items-start
      w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat
         text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin
        text-8xl max-sm:text-[72-px]
        max-sm:leading-[82] font-bold'>
          <span
            className='xl:bg-white
          xl:whitespace-nowrap
          relative z-10 pr-10'
          >The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block
          mt-3 '>Nike</span> Shoes

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
      <div className='relative flex-1
      flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary
      bg-hero bg-cover bg-center'
      >
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className='object-contain relative
        z-10'/>
        <div className='flex sm:gap-6 
        gap-4 absolute -bottom-[5%]
        sm:left-[10%] max-sm:px-6'>
         {/* <Slider {...settings}> */}
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage=
                  {(shoe) => { setbigShoeImg(shoe) }}
                  bigShoeImg={bigShoeImg}
                />


              </div>

            ))}
            {/* </Slider> */}

          
        </div>
      </div>


    </section>
  )
}

export default Hero