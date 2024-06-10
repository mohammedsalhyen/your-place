import BasicData from '@/components/BasicData'
import BussinessData from '@/components/BussinessData'
import { client, urlFor } from '@/lib/client'
import { userQueryById } from '@/utils'
import "../../node_modules/aos/dist/aos.css"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaBars } from 'react-icons/fa'
import Aos from 'aos'
import ProfileNav from '@/components/ProfileNav'

const Profile = () => {
    const router = useRouter();
    const { index } = router.query;
    const [user, setUser]: any = useState({});
    const [basicData, setBasicData]: any = useState(true);
    const [bussinessData, setBussinessData]: any = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        Aos.init({
            easing: 'ease-in-out',
            duration: 1000,
            delay: 200
        });
    }, [])
    useEffect(() => {
        if (index) {
            const query = userQueryById(index);
            client.fetch(query).then((data) =>
                setUser(data[0])
            )
        }

    }, [index])
    console.log(user);
    if (!user) {
        return <div>Loading</div>
    }
    return (

        <div className='flex sm:flex-row xs:flex-row-reverse h-screen relative '>
            <ProfileNav 
            user={user} 
            open={open} 
            basicData ={basicData} 
            setBasicData={setBasicData}  
            bussinessData={bussinessData}  
            setBussinessData={setBussinessData} />
            <div className={` xs:hidden  h-full sm:block w-2/5 bg-main-800`} >
                <div className=' h-20 flex justify-between items-center  text-gray-100 px-2 bg-[#00000091] '>
                    <div>
                        <div className='flex items-center gap-x-3  '>
                            <Image
                                src={(user?.profilePicture&&urlFor(user?.profilePicture).url())}
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
                            }}
                            className={`text-start ${basicData && "text-white font-bold"}`}
                        >البيانات الاساسية</button>
                        <button
                            onClick={() => {
                                setBussinessData(true)
                                setBasicData(false)
                            }}
                            className={`text-start ${bussinessData && "text-white font-bold"}`}
                        > بيانات النشاط</button>
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
            <div className='w-full h-full '>
                <div className=' h-20 flex xs:justify-between items-center gap-x-3 py-5   shadow-lg border-[1px] border-b-gray-200 w-full sm:justify-end px-10'>
                    <Link href={"/"} className='flex xs:flex-row-reverse sm:flex-row  gap-x-2 items-center'>
                        <div>
                            <Image src="/asset/placeholder.png" alt="navbar-icon" width={40} height={40} />
                        </div>
                        <p className=' text-xl'>مكانك هنا </p>
                    </Link>
                    <button
                        onClick={() => setOpen(!open)}
                        className='xs:flex sm:hidden' >
                        <FaBars />
                    </button>
                </div>
                <div className='  bg-gray-100 main-prop h-[calc(100vh-80px)] '>
                    {basicData && <BasicData user={user} />}
                    {bussinessData && <BussinessData user={user} />}
                </div>
            </div>
        </div>

    )
}

export default Profile
