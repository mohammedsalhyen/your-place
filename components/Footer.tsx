import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { services } from '@/constants';
const Footer = () => {
    const socialLinks = [
        { href: "https://www.linkedin.com/in/mohammed-abdelsalhyen-sherief-8976441b8/", icon: <FaLinkedinIn /> },
        { href: "https://github.com/mohammedsalhyen", icon: <FaGithub /> },
        { href: "https://www.facebook.com/mohammed.abdelsalhyen", icon: <FaFacebookF /> },
        { href: "https://wa.me/201110948994", icon: <FaWhatsapp /> }
    ];
    return (
        <div >
            <div className='sharpGradient' id='contact'>
                <div className='padding-container max-container'>
                    <div className=' bg-main-200 flex justify-between items-center py-8 padding-container rounded-lg'>
                        <p className='text-white text-2xl'>هل أنت جاهز للبداء الأن ؟</p>
                        <button
                            type='button'
                            title='contact'
                            className=' bg-white rounded-lg text-main-600 py-3 px-6 text-nowrap'
                        >
                            تواصل معنا
                        </button>
                    </div>
                </div>
            </div>
            <div className=' bg-main-600 text-white'>
                <div className=' items-start main-prop padding-container max-container grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1'>
                    <div className='pt-6'>
                        <Link href={"/"} className='flex items-center'>
                            <div>
                                <Image src="/asset/w-icon.png" alt="navbar-icon" width={40} height={40} />
                            </div>
                            <p className=' text-xl font-bold'>مكانك هنا </p>
                        </Link>
                        <ul
                            className='flex gap-2 mt-5'>
                            {socialLinks.map((link, index) => (
                                <li key={index}
                                    className='flex '>
                                    <a href={link.href} target='_blank' className='flex items-center  ' title='anchor to go to icon'>
                                        <span className=' flex-center  text-xl w-[40px] h-[40px] text-main-600 bg-white font-bold rounded-full '>{link.icon}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='pt-6'>
                        <h2 className='text-xl font-bold pb-3'>تواصل معنا</h2>
                        <div className=' text-gray-400'>
                            <p>+201110948994</p>
                            <p>email@gamil.com</p>
                            <p>2email@gamil.com</p>
                            <p>بنغازي-ليبيا</p>
                        </div>
                    </div>
                    <div  className='pt-6'>
                        <h2 className=' mb-3 text-xl font-bold'>خدماتنا</h2>
                        <ul className='flex flex-col  text-gray-400'>
                            {services.map((service, index) => (
                                <li key={index} className=''>
                                    <div>
                                        <p className='my-1'>{service.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='pt-6'>
                        <h2 className='mb-3 text-xl font-bold'>من نحن !</h2>
                        <p className=' text-gray-400'>
                            نحن فريق متحمس نعمل على توفير أفضل الخدمات للمستخدمين.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
