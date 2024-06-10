import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { navlinks } from '@/constants'
import Link from 'next/link'
import { FaBars, FaXmark } from 'react-icons/fa6'
import MobileNav from './MobileNav'
import AOS from "aos"
import "../node_modules/aos/dist/aos.css"
import Button from './ui/Button'
import { FaUser } from 'react-icons/fa'
import { urlFor } from '@/lib/client'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser]:any = useState({});
    
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out',
            duration: 1000,
            delay: 200
        });
        //check if find user or not
        const userJson:any = localStorage.getItem("user-your-place-here");
        let parsedUser;
        if (userJson) {
            setIsLoggedIn(true);
            setUser(JSON.parse(userJson)) ;
        }
    }, [])
    console.log(user);
    return (
        <nav className=' max-container padding-container py-4 text-lg  font-bold relative z-20' data-aos="fade-down">
            <div className='flex justify-between items-center '>
                <Link href={"/"} className='flex gap-2 items-center'>
                    <div>
                        <Image src="/asset/placeholder.png" alt="navbar-icon" width={40} height={40} />
                    </div>
                    <p className=' text-xl'>مكانك هنا </p>
                </Link>
                <div className='flex-center gap-x-3'>
                    <ul className=' md:flex justify-center items-center gap-5 xs:hidden'>
                        {navlinks.map((link: any,index) => (
                            <li key={index} className=' transition-all hover:text-main-600'>
                                <Link href={link.href} onClick={() => setOpen(false)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))
                        }
                        

                    </ul>
                    {
                            isLoggedIn ? 
                            <Link href={`/profile/${user?._id}`} className=' cursor-pointer w-12 h-12 rounded-full bg-main-600 xs:flex-center text-gray-100 text-2xl '>
                                <Image src={(user?.profilePicture&&urlFor(user?.profilePicture).url())} alt="navbar-icon" width={45} height={45} />
                            </Link> : 
                            <div>
                                <Link href={"/login"} className='xs:text-sm py-2 text-white px-3 bg-main-600 rounded-lg'>
                                تسجيل الدخول
                                </Link>
                            </div>
                        }
                    <button
                        type='button'
                        title='open navbar'
                        onClick={() => setOpen(!open)}
                        className=' text-2xl font-bold cursor-pointer md:hidden'>
                        {open ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </div>
            {
                open &&
                <div className='md:hidden'>
                    <MobileNav setOpen={setOpen} />
                </div>
            }
        </nav>
    )
}

export default Navbar
