import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import { shoes, statistics } from '../constants';
import ShoeCard from '../components/ShoeCard';
import Slider from 'react-slick';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  const [products, setProducts] = useState([]);
  const flickityRef = useRef(null);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const options = {
    method: 'GET',
    url: 'https://netflix54.p.rapidapi.com/search/aaa',
    params: {
      query: 'stranger',
      offset: '0',
      limit_titles: '50',
      limit_suggestions: '20',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'd46ce10e16mshbc316b6599a60fep1b489fjsnf7813c117cc3',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
 

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setProducts(response.data.titles);
      // flickityRef.current = new Flickity('.carousel', {
      //   contain: true,
      //   prevNextButtons: true,
      //   pageDots: false,
      //   groupCells: true,
      //   cellAlign: 'left',
      //   adaptiveHeight: true,
      //   wrapAround: true,
      //   draggable: true
      // });
      console.log(response.data)
      
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  // Next and Previous Button Handlers
  // const next = () => {
  //   if (flickityRef.current) {
  //     flickityRef.current.next();
  //   }
  // };

  // const previous = () => {
  //   if (flickityRef.current) {
  //     flickityRef.current.previous();
  //   }
  // };

  useEffect(() => {


    fetchData();
  }, []);
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
      <div className=' flex-col
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

        <div className='flex flex-row justify-center
        items-center'>
         <Carousel responsive={responsive}>
            {/* <Slider {...settings}> */}
            {products.map((product, index) => (
              <div key={index} className='' >
                <ShoeCard
                  imageUrl={product}
                  changeBigShoeImage=
                  {(product) => { setbigShoeImg(product) }}
                  bigShoeImg={bigShoeImg}
                />


              </div>

            ))}
            {/* </Slider> */}
            </Carousel>
         

        </div>

      </div>


    </section>
  )
}

export default Hero