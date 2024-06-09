import { steps } from '@/constants'
import React from 'react'

const OurWay = () => {
    return (
        <section className='relative main-prop overflow-hidden  h-[700px]  bg-main-600  text-white'>
            <div className='max-container padding-container h-full '>
                <div className=' flex justify-between items-center xs:flex-col md:flex-row h-full  '>
                    <div className='mt-96 xs:hidden md:block'>
                        <div 
                        data-aos="zoom-in"
                        className=' absolute  overflow-visible bg-main-200 rounded-full lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[400px] -left-14 bottom-0  '></div>
                        <div 
                        data-aos="zoom-in"
                        data-aos-delay="1000"
                        data-aos-duration="600"
                        className=' absolute  overflow-visible  way-container z-10 rounded-full lg:w-[550px] lg:h-[550px] md:w-[350px] md:h-[350px] -left-14  bottom-0  '></div>
                    </div>
                    <div className=' flex-1'>
                        <p className=' text-2xl mb-10'>ابسط الحلول لايجاد مكانك </p>
                        <div className="steps-container">
                            {steps.map((step, index) => (
                                <div 
                                key={index} 
                                className=' flex items-start gap-3 '
                                data-aos="fade-left" data-aos-delay={`${index+1}00`}
                                >
                                    <div className=' transition-all bg-gray-400 hover:bg-main-200 min-w-10 my-4 h-10 flex-center rounded-full'>
                                        <p>{index + 1}</p>
                                    </div>
                                    <div className="py-4">
                                        <h3 className='text-lg font-bold'>{step.title}</h3>
                                        <p className=' text-gray-300 py-1 transition-all hover:-translate-x-2'>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div 
                        data-aos="fade-in"
                        className='flex gap-4 py-6 font-bold'>
                            <button className=' transition-all border-2 border-main-200 rounded-lg px-6 py-2 hover:text-white hover:bg-main-200' >
                                اقراء المزيد
                            </button>
                            <button className=' transition-all text-main-200 bg-white rounded-lg px-6 py-2 hover:text-white hover:bg-main-200'>
                                ابداء الأن
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWay
