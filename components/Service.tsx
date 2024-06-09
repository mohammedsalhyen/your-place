import { services } from '@/constants'
import React from 'react'

const Service = () => {
    return (
        <div className='main-prop ' id='service'>
            <div className='max-container padding-container' >
                <h2 className='text-center my-10 text-2xl font-bold'>نحن نقدم لك أفضل الخدمات </h2>
                <ul className='grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-10'> 
                    {services.map((service, index) => (
                        <li 
                        key={index} 
                        className='shadow-xl'
                        data-aos="fade-up" data-aos-delay={`${index+1}00`}
                        >
                            <div className=' service-box border-b-2 border-main-600 p-5 h-full rounded-lg'>
                                <service.icon className='text-4xl text-main-600 service-icon' />
                                <div>
                                    <h3 className='pt-6 pb-3 font-bold text-lg '>{service.name}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Service
