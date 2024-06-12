import Navbar from '@/components/Navbar'
import { client, urlFor } from '@/lib/client';
import { companyQueryById } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { FaMapLocation } from 'react-icons/fa6';

const Company = () => {
    const router = useRouter()
    const { index } = router.query;
    const [company, setCompany]: any = useState()
    const [comment, setComment] = useState("")
    const [user, setUser]: any = useState()
    useEffect(() => {
        if (index) {
            const query = companyQueryById(index);
            client.fetch(query).then((result) => {
                setCompany(result[0])
            });
        }
        const userJson:any=localStorage.getItem("user-your-place-here");
        setUser(JSON.parse(userJson));

    }, [index])
    console.log(company)
    return (
        <div className=''>
            <header className='bg-gray-100 shadow-lg'>
                <Navbar />
            </header>
            <main className=' main-prop max-container padding-container'>
                <div className='bg-gray-100 flex xs:flex-col md:flex-row rounded-lg overflow-hidden gap-5'>
                    <div className='md:w-1/3 lg:h-[600px] md:h-[500px] xs:h-full xs:w-full'>
                        <img
                            src={(company?.profilePicture && urlFor(company?.profilePicture).url())}
                            alt='Comapny-image'
                            className='w-full h-full'
                        />
                    </div>
                    <div>
                        <div className='py-10 xs:px-5'>
                            <div className=' flex justify-between mb-10 '>
                                <p className='text-main-600 text-3xl font-bold '>{company?.businessName}</p>
                                <p className='flex-center gap-2'>
                                    <span className=' text-xl font-bold text-main-600'><FaMapLocation /></span>
                                    {company?.businessAddress}
                                </p>
                            </div>

                            <p className=' text-lg font-bold text-main-800 w-2/3'>{company?.description}</p>
                            <p> نحن نعمل :{company?.workingHours} </p>
                            <p className='pt-5 pb-1 font-bold text-main-200 gap-10'>تواصل معنا من خلال</p>
                            <div className='pt-1 pb-5 flex gap-10'>

                                <p>{company?.phoneNumber}</p>
                                <p>{company?.email}</p>
                            </div>
                            <p className='pt-5 pb-1 font-bold text-main-200 gap-10'> أو من خلال مواقعنا الرسمي او وسائل التواصل الاجتماعي </p>
                            <div className='pt-1 pb-5 flex gap-10'>
                                <p>{company?.website}</p>
                                <p>{company?.socialMedia}</p>
                            </div>
                            <div className="flex items-center flex-wrap mt-9 gap-3 lg:w-2/3 xs:w-full">
                                <Link href={`/profile/${user?._id}`} >
                                <Image src={(user?.profilePicture&&urlFor(user?.profilePicture).url())} alt="navbar-icon" width={45} height={45} />
                                </Link>
                                <input
                                    type="text"
                                    placeholder="ضع تقييمك هنا ..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="flex-1 border-2 p-2 outline-none border-gray-100 focus:border-gray-300 rounded-lg"
                                />
                                <button
                                    type="button"
                                    
                                    className=" font-semibold outline-none text-white bg-main-200 rounded-lg px-6 py-2 w-auto cursor-pointer"
                                >
                                    اضف تقييم
                                </button>
                            </div>
                        </div>
                        
                            
                        
                    </div>
                </div>

            </main>

        </div>
    )
}

export default Company
