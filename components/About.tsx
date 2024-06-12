import React from 'react'

const About = () => {
    return (
        <div className='main-prop overflow-hidden  md:h-[600px] xs:h-full ' id='about'>
            <div className=' max-container padding-container h-full'>
                <div className='flex justify-center items-center xs:flex-col md:flex-row h-full'>
                    <div 
                    data-aos="flip-up"
                    className='xs:text-center md:text-start'>
                        <h2 className="text-3xl font-bold mb-8 ">من نحن!</h2>
                        <p className="text-lg text-gray-700 md:w-5/6 xs:w-full">
                            نحن فريق متحمس نعمل على توفير أفضل الخدمات للمستخدمين. نهتم بتقديم تجربة بحث ممتازة وسهلة الاستخدام للعثور على الأماكن المفضلة لديك.
                            مهمتنا هي جعل العالم أكثر ملاءمة عبر توفير معلومات دقيقة وموثوقة عن الأماكن المختلفة.
                        </p>
                    </div>
                    <div className=' relative xs:mt-24 md:mt-0'>
                        <div 
                        data-aos="fade-up-right" data-aos-delay="400" 
                        className=' relative rounded-xl  z-10  about-container shadow-lg  md:w-[400px]  md:h-[400px]  xs:w-[300px]  xs:h-[300px]'></div>
                        <div 
                        data-aos="fade-up-right"
                        className=' absolute rounded-xl -top-[40px] md:left-[30px] xs:left-[5px] bg-gray-100 md:w-[430px] md:h-[430px] xs:w-[330px] xs:h-[330px]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
