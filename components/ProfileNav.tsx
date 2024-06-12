import router from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { urlFor } from '@/lib/client'

const ProfileNav = ({ user, open,setOpen, basicData, setBasicData, bussinessData, setBussinessData, isAdmin, adminControl, setAdminControl }: any) => {
    return (
        <div>
            {
                open &&
                <div data-aos="fade-down" className={`absolute h-fit left-0 z-50 top-20 rounded-lg w-full xs:block sm:hidden`} >
                    <div className=' h-20 flex justify-between items-center  text-gray-100 px-2 bg-[#000] '>
                        <div>
                            <div className='flex items-center gap-x-3  '>
                                <Image
                                    src={(user?.profilePicture && urlFor(user?.profilePicture).url())}
                                    width={50}
                                    height={50}
                                    alt='profile-image'
                                    className=' rounded-full'
                                />
                                <p>{user?.fullName}</p>
                            </div>

                        </div>

                    </div>
                    <div className='px-5 gap-y-10 xs:h-fit sm:h-[calc(100vh-80px)] text-[#848484]  bg-main-800 py-10 flex justify-between flex-col '>
                        <div className=' flex flex-col gap-y-3 '>
                            <button
                                onClick={() => {
                                    setBasicData(true)
                                    setBussinessData(false)
                                    setAdminControl(false)
                                    setOpen(false)
                                }}
                                className={`text-start ${basicData && "text-white font-bold"}`}
                            >البيانات الاساسية</button>
                            <button
                                onClick={() => {
                                    setBussinessData(true)
                                    setBasicData(false)
                                    setAdminControl(false)
                                    setOpen(false)
                                }}
                                className={`text-start ${bussinessData && "text-white font-bold"}`}
                            > بيانات النشاط</button>
                            {
                            isAdmin &&
                            <button
                                onClick={() => {
                                    setBussinessData(false)
                                    setBasicData(false)
                                    setAdminControl(true)
                                }}
                                className={`text-start ${adminControl && "text-white font-bold"}`}
                            >التحكم في النظام
                            </button>
                        }
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("user-your-place-here");
                                    toast.success("تم تسجيل الخروج ")
                                    router.push("/");
                                }}
                                className=' bg-red-600 text-white  px-6 py-2 rounded-lg shadow-full'
                            >
                                تسجيل الخروج
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileNav
