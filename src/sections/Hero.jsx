import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import { shoes, statistics } from '../constants';
import ShoeCard from '../components/ShoeCard';
import Carousel from "react-multi-carousel";
import Slider from 'react-slick';
import React, { useState, useEffect,useRef} from 'react';
import axios from 'axios';
import Flickity from 'flickity';


const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  const [products, setProducts] = useState([]);
  const flickityRef = useRef(null);

  const options = {
    method: 'GET',
    url: 'https://product-lookup-by-upc-or-ean.p.rapidapi.com/code/829576019311',
    headers: {
      'X-RapidAPI-Key': 'd46ce10e16mshbc316b6599a60fep1b489fjsnf7813c117cc3',
      'X-RapidAPI-Host': 'product-lookup-by-upc-or-ean.p.rapidapi.com'
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setProducts(response.data.product);
        // if (flickityRef.current) {
        //   new Flickity(flickityRef.current, {
        //     // Flickity options here
        //     cellAlign: 'left',
        //     contain: true,
        //     wrapAround: true,
        //   });
        // }
        console.log(response.data.product)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

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
        <div ref={flickityRef} className='carousel flex sm:gap-6 
        gap-4 absolute -bottom-[5%]
        sm:left-[10%] max-sm:px-6'>
         {/* <Slider {...settings}> */}
            {products.map((product, index) => (
              <div key={index}>
                <ShoeCard
                  imgUrl={product}
                  changeBigShoeImage=
                  {(product) => { setbigShoeImg(product) }}
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