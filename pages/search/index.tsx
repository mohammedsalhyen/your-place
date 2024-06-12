import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { placeTypes, steps } from '@/constants'
import Footer from '@/components/Footer'
import Aos from 'aos';
import "../../node_modules/aos/dist/aos.css"
import { useRouter } from 'next/router'
import { searchQuery } from '@/utils'
import { client } from '@/lib/client'
const index = () => {
    const router = useRouter();
    const { type, place } = router.query;
    const [searchArray, setSearchArray]: any = useState([])
    const [newPlace, setNewPlace]: any = useState("")
    const [newType, setNewType]: any = useState("")

    // for make animation
    useEffect(() => {

        Aos.init({
            easing: 'ease-in-out',
            duration: 1000,
            delay: 200
        });
    }, [])

    // get result of search
    useEffect(() => {
        if (type && place) {
            const query = searchQuery(type, place);
            client.fetch(query).then((data) => {
                setSearchArray(data);
            })
        }
    }, [type && place])
    // get result of new search
    useEffect(() => {
        if (newType && newPlace) {
            setSearchArray(null)
            const query = searchQuery(newType, newPlace);
            client.fetch(query).then((data) => {
                setSearchArray(data);
            })
        }
    }, [newType && newPlace])
    console.log(searchArray)
    return (
        <div className=' '>
            <header className=' fixed top-0 z-40 w-full  bg-gray-100  padding-container shadow-lg '>
                <nav className='max-container flex justify-between gap-5  py-5 xs:flex-col  sm:flex-row'>
                    <Link href={"/"} className='flex gap-2 items-center'>
                        <div>
                            <Image src="/asset/placeholder.png" alt="navbar-icon" width={40} height={40} />
                        </div>
                        <p className=' text-xl'>مكانك هنا </p>
                    </Link>
                    <form className=' overflow-hidden max-w-full flex justify-between border-2 rounded-xl border-main-200 shadow-sm '>
                        <select
                            title='placeType'
                            value={newType}
                            onChange={(e) => setNewType(e.target.value)}
                            className=' bg-inherit xs:w-1/3 sm:w-full '
                            id="placeType" name="placeType">
                            {placeTypes.map((place) => (
                                <option key={place.value} value={place.value}>{place.name}</option>
                            ))}
                        </select>
                        <input
                            type='text'
                            className=' xs:w-1/3 sm:w-full bg-inherit'
                            onFocus={() => router.push('/search')}
                            value={newPlace}
                            onChange={(e) => setNewPlace(e.target.value)}
                            placeholder='ادخل اسم المكان' />
                        <input
                            type="submit"
                            value="بحث"
                            className=' px-3  bg-main-200 text-white py-2 cursor-pointer'
                        />
                    </form>
                </nav>
            </header>
            <main className='main-prop min-h-96'>
                <div className='pt-16 padding-container max-container'>
                    <ul className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {searchArray &&
                            searchArray.map((item: any, index: number) => (
                                <li
                                    key={index}
                                    data-aos="fade-up"
                                    className='bg-gray-100 overflow-hidden rounded-lg '>
                                    <Image src={"/asset/about.jpg"} alt="search-result" width={400} height={300} />
                                    <div className='pt-5 pb-10 px-3'>
                                        <p className='text-xl font-bold pb-2 text-main-600'>{item.businessName}</p>
                                        <p className=' pb-5 text-lg text-main-800'>{item.description}</p>
                                        <button
                                            onClick={() => router.push(`/company/${item._id}`)}
                                            className=' transition-all duration-300 border-2 border-main-600 hover:bg-inherit hover:text-main-600 bg-main-600 text-gray-100 px-5 py-1 '>
                                            المزيد
                                        </button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    {!searchArray &&
                        <div className=' w-full h-full flex-center flex-col'>
                            <Image
                                src={"/asset/no1.png"}
                                alt='not find'
                                width={200}
                                height={200} />
                            <p>لا توجد نتائج من فضلك ابحث بكلمة اخري </p>
                        </div>
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default index
