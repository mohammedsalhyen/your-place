import React from 'react'
import Button from './ui/Button'
import { placeTypes } from '@/constants'
import Navbar from './Navbar'
const Hero = () => {
    return (
        <section className=' overflow-hidden h-svh relative bg-[#f9f9f9]' id='hero'>
            <Navbar />
            <div className='main-prop max-container padding-container h-full'>
                <div className='overflow-hidden flex justify-between md:flex-row xs:flex-col xs:justify-center xs:gap-20 items-center h-full'>
                    <div className='xs:relative z-30 xs:text-center md:text-start' data-aos="fade-left" data-aos-duration="600">
                        <p className=' text-main-800 font-bold text-3xl pb-5 md:w-1/2 xs:w-full'>اكتشف واستمتع بأفضل الأماكن في مدينتك وحول العالم</p>
                        <p className=' xs:text-black md:text-gray-500 font-bold md:w-4/6 xs:w-full '>ابحث واستكشف الأماكن التي تحبها في أي وقت وأي مكان. نحن نقدم لك البيانات التي تحتاجها
                            لتجد أفضل الأماكن بسهولة وسرعة. دعنا نكون دليلك الشخصي لاكتشاف العالم من حولك.
                        </p>
                        <div className='xs:w-full xs:flex-center md:block my-5'>
                            <Button label={"استكشف الأن"} href={"/"} />
                        </div>
                        
                    </div>
                    <div className='w-full'>
                        <div className='  absolute rounded-full -top-[120px] z-10 -left-[120px] form-container lg:w-[800px] lg:h-[800px] xs:w-[600px] xs:h-[600px]'></div>
                        <div className='  absolute rounded-full -top-[90px] -left-[90px] bg-gray-100 lg:w-[830px] lg:h-[830px] xs:w-[630px] xs:h-[630px] ' ></div>
                        <form 
                        data-aos="zoom-in" data-aos-delay="600"
                        className=' relative w-full z-20 flex bg-white  rounded-xl overflow-hidden shadow-lg'>
                            <select
                                title='placeType'
                                className=' xs:w-2/6 md:w-1/5w-1/5'
                                id="placeType" name="placeType">
                                {placeTypes.map((place) => (
                                    <option key={place.value} value={place.value}>{place.name}</option>
                                ))}
                            </select>
                            <input
                                type='text'
                                className=' w-4/6 px-5'
                                placeholder='ادخل اسم المكان' />
                            <input
                                type="submit"
                                value="بحث"
                                className='rounded-xl xs:w-2/6 md:w-1/5 bg-main-200 text-white py-5 cursor-pointer'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
