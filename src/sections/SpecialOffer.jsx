import React from 'react'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-10 max-container'>
      <div className='flex-1 relative'>
        <img src={offer}
          width={500}
          height={500}
          className='object-contain  rounded-xl' />
          <div className=' bg-gray-300 rounded-full w-20 h-20 text-center bg-opacity-50
           p-4 absolute top-[42%] right-[22%] font-palanquin font-bold text-gray-700'>
            50% off</div>

      </div>

      <div className="flex flex-1 flex-col">

        <h2 className='mt-10 font-palanquin
        text-4xl capitalize  font-bold
        lg:max-w-lg'>
          <span
            className="text-coral-red">
            Special  </span> Offer
        </h2>
        <p className='mt-4 text-justify
        lg:max-w-lg info-text'>Indulge in a limited-time skincare
         experience with our exclusive offer. Elevate your routine with premium products,
         exceptional savings, and a touch of luxury.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your
          satisfaction
        </p>

        <div className="mt-11 flex 
        flex-wrap gap-4 ">

          <Button label="Shop Now" 
          iconURL={arrowRight}/>
          <Button 
          label="Learn More"
          backgroundColor="bg-white"
          borderColor ="border-slate-gray"
          textColor="text-slate-gray" />

        </div>
      </div>


    </section>
  )
}

export default SpecialOffer