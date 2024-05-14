import React from 'react'
import { navLinks } from '../constants'

const DropDownCard = () => {
  return (
    <div className=" flex flex-col absolute mt-2 top-20 w-[150px] z-50 right-4 bg-white text-gray-600 p-2  rounded shadow-md">
             {navLinks.map((nav,index)=>(
                <a key={index} href={nav.href} className="block py-2 hover:bg-gray-300">{nav.label}</a>
             ))}
              
              
            </div>
  )
}

export default DropDownCard