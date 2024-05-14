import React from 'react'
import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets/images'

const Footer = () => {
  return (
    <footer
    className='max-container'>
      <div className='flex
      justify-between items-start gap-20
      flex-wrap max-lg:flex-col'>

       <div className='flex flex-col
       items-start'>
        <div className='rounded-full bg-gray-100'>
        <a href='/'>
          <img
          src={logo}
          width={150}
          height={46} />

        </a>
        </div>

        <p
        className='mt-6 text-base text-justify
        leading-7 font-montserrat text-white-400
        sm:max-w-sm'>
          Your best skin starts here.
          Experience the difference with our premium skincare products
        </p>
        <div
        className='flex items-center gap-5 mt-8'>
         {socialMedia.map((icon)=>(
         <div className='flex justify-center
         items-center w-12 h-12 bg-white rounded-full'>
          <img
          src={icon.src}
          alt={icon.alt}
          width={24}
          height={24}
          /> </div>
         ))}
        </div>

       </div>
       <div className='flex flex-1
       justify-between lg:gap-10 gap-20
       flex-wrap'>
        {footerLinks.map((section)=>(
          <div key={section}>
            <h4 
            className='text-white
            font-montserrat font-medium
            leading-normal text-2xl'>
            {section.title}
            </h4>
            <ul>
              {section.links.map((link)=>(
                <li className='mt-3
                text-white-400 font-montserrat
                text-base leading-normal
                hover:text-slate-gray cursor-pointer'
                key={link.name}>
                  <a>{link.name}</a>

                </li>
              ))}
            </ul>

             </div>
        ))}

       </div>
      </div>
      <div className='flex
      justify-between text-white-400
      mt-24 max-sm:flex-col 
      max-sm:items-center'>
        <div className='flex flex-1
        justify-start gap-2 font-montserrat cursor-pointer
        items-center '>
        <img
        src={copyrightSign}
        alt="copy right sign" 
        width={20}
        height={20}
        className='rounded-full m-0'/>
        <p>Copyright. All rights
          reserved
        </p>
        </div>
        <p className='font-montserrat
        cursor-pointer'>Terms and Conditions</p>
          

      </div>
    </footer>
  )
}

export default Footer