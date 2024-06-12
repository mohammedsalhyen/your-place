import React from 'react'
import { navlinks } from '../constants'
import { FaRegCircleXmark, FaUser } from "react-icons/fa6";
import Link from 'next/link';
import Button from './ui/Button';
const MobileNav = ({ setOpen,isLoggedIn }: any) => {
    return (
        <div
            data-aos="fade-down" data-aos-duration="600"
            className='padding-container z-50 rounded-lg relative top-full left-0 bg-main-600 xs:w-full '>
            <ul className='xs:flex flex-col justify-center gap-5 md:hidden py-3 text-white '>
                {navlinks.map((navlink, index) => (
                    <li key={index} >
                        <Link href={navlink.href} onClick={()=>setOpen(false)}>
                            <p className=' transition-all hover:text-black font-bold  '>{navlink.name}</p>
                        </Link>
                    </li>
                ))
                }
                
            </ul>
        </div>
    )
}

export default MobileNav
