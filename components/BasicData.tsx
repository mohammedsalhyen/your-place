import React from 'react'

const BasicData = ({ user }: any) => {
    return (
        <div className=' max-container padding-container h-full'>
            <p className='data-text'>
                <span className=' font-bold text-main-600'> الأسم بالكامل: </span>
                {user?.fullName}
            </p>
            <p className='data-text'>
                <span className=' font-bold text-main-600'>  البريد الالكتروني: </span>
                {user?.email}
            </p>
            <p className='data-text'>
                <span className=' font-bold text-main-600'>   رقم الهاتف: </span>
                {user?.phoneNumber}
            </p>
            <p className='data-text'>
                <span className=' font-bold text-main-600'>   العنوان: </span>
                {user?.address} {user?.businessAddress}
            </p>
        </div>
    )
}

export default BasicData
