import Image from 'next/image'
import React from 'react'

const BussinessData = ({ user }: any) => {
    return (

        <div className='  max-container padding-container h-full'>
            {
                user.businessName ?
                <>
                <p className='data-text'>
                    <span className=' font-bold text-main-600'>اسم المؤسسة :</span>
                    {user?.businessName}
                </p>
                <p className='data-text'>
                    <span className=' font-bold text-main-600'>  الموقع الالكتروني: </span>
                    {user?.website}
                </p>
                <p className='data-text'>
                    <span className=' font-bold text-main-600'>نوع المؤسسة :</span>
                    {user?.businessType}
                </p>
                <p className='data-text '>
                    <span className=' font-bold text-main-600'>   وصف المؤسسة: </span>
                    {user?.description}
                </p>
                <p className='data-text'>
                    <span className=' font-bold text-main-600'>   عدد ساعات العمل: </span>
                    {user?.workingHours}
                </p>
                <p className='data-text'>
                    <span className=' font-bold text-main-600'>     رابط التواصل : </span>
                    {user?.socialMedia}
                </p>
            </>:
            <div className=' w-full h-full flex-center flex-col'>
                <Image
                    src={"/asset/no1.png"}
                    alt='not find'
                    width={200}
                    height={200}/>
                    <p>عذراً أنت لست صاحب مؤسسة</p>
            </div>
            }
            

        </div>
    )
}

export default BussinessData
