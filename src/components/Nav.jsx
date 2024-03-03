import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                    />
                </a>
                <ul className='flex-1 flex justify-center items-ce
                 gap-16 max-lg:hidden'>
                    {navLinks.map((item)=>(
                        <li>
                            <a
                            href={item.href}
                            className="font-monts
                            errat leading-normal
                            text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}

                </ul>
                {/*  Hamburger Button Section */}
                <div className='hidden max-lg:block'>
                    <img
                    src={hamburger}
                    alt="Hamburger"
                    width={25}
                    height={25}
                     />
                </div>
            </nav>
        </header>
    )
}

export default Nav