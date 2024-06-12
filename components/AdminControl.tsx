import { adminContolIcons } from '@/constants'
import { client } from '@/lib/client'
import { searchAllCompany, searchAlluser } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const AdminControl = () => {
    const router =useRouter()
    const [company, setCompany]: any = useState([])
    const [users, setUsers]: any = useState([])
    useEffect(() => {
        const query = searchAllCompany();
        client.fetch(query).then((data) => {
            setCompany(data)
        })
        const queryUsers = searchAlluser();
        client.fetch(queryUsers).then((data) => {
            setUsers(data)
            
        })
    }, [])
    
    // handle Delete Proccess
    const handleDelete = (id:any) => {
        client
            .delete(id)
            .then(() => {
                window.location.reload();
            });
    };
    return (
        <div className=' '>
            <header className=' px-6 gap-5 grid xs:grid-cols-1 sm:grid-cols-3'>
                {adminContolIcons.map((adminContolIcon, index) => (
                    <Link href={adminContolIcon.href} key={index}
                        className=' flex-center flex-col bg-gray-100 p-10 rounded-lg border-2 transition-transform hover:scale-105 '
                    >
                        <adminContolIcon.icon className='my-5 text-xl text-main-600 font-bold ' />
                        <p>{adminContolIcon.text}</p>
                    </Link>
                ))}
            </header>
            <main className='px-6 py-6'>
                <table className='w-full'>
                    <thead >
                        <tr className='border-b-[1px] py-2 text-main-600 border-main-800'>
                            <th className='font-bold py-2'>اسم المؤسسة</th>
                            <th className='font-bold py-2'>نوع المؤسسة</th>
                            <th className='font-bold py-2'>نوع الاجراء</th>

                        </tr>
                    </thead>
                    <tbody>
                        {company.map((item: any, index: number) => (
                            <tr className='text-main-800 border-b-[1px] border-gray-300'>
                                <th className=' py-3'>{item.businessName}</th>
                                <th className='py-3'>{item.businessType}</th>
                                <th className='py-3 flex gap-x-3'>
                                    <button 
                                    onClick={()=>router.push(`/company/${item._id}`)}
                                    className=' bg-green-600 rounded-lg py-1 px-3 text-white' 
                                    > عرض</button>
                                    <button 
                                    onClick={()=>handleDelete(item._id)}
                                    className=' bg-red-600 rounded-lg py-1 px-3 text-white'>
                                        حذف
                                    </button>
                                </th>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <table className='w-full mt-10'>
                    <thead >
                        <tr className='border-b-[1px] py-2 text-main-600 border-main-800'>
                            <th className='font-bold py-2'>اسم المستخدم</th>
                            <th className='font-bold py-2'>الـ ID</th>
                            <th className='font-bold py-2'>نوع الاجراء</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item: any, index: number) => (
                            <tr className='text-main-800 border-b-[1px] border-gray-300'>
                                <th className=' py-3'>{item.fullName}</th>
                                <th className='py-3'>{item._id}</th>
                                <th className='py-3 flex gap-x-3'>
                                    <button 
                                    onClick={()=>handleDelete(item._id)} 
                                    className=' bg-red-600 rounded-lg py-1 px-3 text-white'>
                                        حذف
                                    </button>
                                </th>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default AdminControl

