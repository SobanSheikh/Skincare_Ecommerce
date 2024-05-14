import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { logo } from '../assets/images';
import DropDownCard from './DropDownCard';
import { useState } from 'react';
const Nav = ({cartCheck}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className='padding-x py-3 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container '>
                <a href="/" className='z-10'>
                    <img src={logo}
                        alt="Logo"
                        width={120}
                        height={25}



                    />
                </a>
                <ul className='flex-1 flex justify-center items-center
                 gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li>
                            <div className=' cursor-pointer transition ease-in-out delay-80
                             hover:-translate-y-1 hover:scale-110 duration-150 ...'>
                            <a
                                href={item.href}
                                className="font-monts
                            errat leading-normal hover:font-bold
                            text-lg text-slate-gray
                           "
                            >
                                {item.label}
                            </a>
                            </div>
                        </li>
                    ))}

                </ul>
                <div  onClick={()=>cartCheck()} className='mr-4 cursor-pointer transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-150 ...'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>


                </div>
                {/*  Hamburger Button Section */}
                <div onClick={toggleDropdown} className='hidden cursor-pointer max-lg:block'>
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
                {isDropdownOpen && <DropDownCard/>}
            </nav>
        </header>
    )
}

export default Nav