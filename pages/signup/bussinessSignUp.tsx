import { client } from '@/lib/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Image from 'next/image';
import { FaUser, FaLock, FaPhone, FaAddressBook, FaImage, FaBuilding, FaDeskpro } from 'react-icons/fa';
import { MdDriveFileRenameOutline, MdEmail } from 'react-icons/md';
import { placeTypes } from '@/constants';
import { FaWebAwesome } from 'react-icons/fa6';
import "../../node_modules/aos/dist/aos.css"
import Aos from 'aos';

const BussinessSignUp = () => {
    const router = useRouter();
    //States to save data
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [website, setWebsite] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [workingHours, setWorkingHours] = useState("");
    const [socialMedia, setSocialMedia] = useState("");
    const [profilePicture, setProfilePicture]: any = useState(null);
    const [imageAsset, setImageAsset]: any = useState(null);

    useEffect(() => {
        Aos.init({
            easing: 'ease-in-out',
            duration: 1000,
            delay: 200
        });
    }, [])
    // function to handle save image 
    const handleupload = (setter: any) => (e: any) => {
        setter(e.target.files[0]);
    };

    // function to handle set data
    const handleSignInChange = (setter: any) => (e: any) => {
        setter(e.target.value);
    };

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        try {

            if (profilePicture) {
                await client.assets
                    .upload('image', profilePicture, { contentType: profilePicture.type, filename: profilePicture.name })
                    .then((document) => {
                        setImageAsset(document);
                    })
                    .catch((error) => {
                        console.log('Upload failed:', error.message);
                    });
            }
            if (fullName && email && password && imageAsset?._id && phoneNumber) {
                const document = {
                    _type: 'business',
                    fullName,
                    email,
                    password,
                    phoneNumber,
                    businessName,
                    businessAddress,
                    businessType,
                    website,
                    description,
                    workingHours,
                    socialMedia,
                    profilePicture: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset?._id,
                        },
                    },
                };
                await client.create(document);
                toast.success("جارِِ التحويل لصفحة تسجيل الدخول");
                router.push('/login');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='signup-container flex-center  main-prop overflow-hidden'>
            <div className='flex  w-[80%] bg-white rounded-xl overflow-hidden '>
                <div className=" text-white xs:hidden sm:flex w-3/5 padding-container bg-main-800 login-bg  flex-col justify-center text-start">
                    <Link href={"/"} className='flex items-center' data-aos="fade-up">
                        <div>
                            <Image src="/asset/w-icon.png" alt="navbar-icon" width={40} height={40} />
                        </div>
                        <p className=' text-xl font-bold'>مكانك هنا </p>
                    </Link>
                    <p data-aos="fade-in" data-aos-delay="800" className='text-xl py-5'>دعنا نكون دليلك الشخصي لاكتشاف العالم من حولك</p>
                    <Link href={"/"} data-aos="fade-up" data-aos-delay="900" type='button' title='button'
                        className='bg-gray-100 text-main-800 rounded-3xl px-6 py-3 w-fit  '
                    >
                        تصفح الان
                    </Link>
                </div>
                <div data-aos="fade-left" data-aos-delay="1100" className=' flex flex-col justify-center px-8 py-10'>
                    <p className='text-[32px] mb-8 font-bold text-black'>مرحبا بك في موقعنا</p>
                    <form onSubmit={handleSignUp} className='grid xs:grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className=" flex   mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaUser />
                            <input
                                type="text"
                                value={fullName}
                                onChange={handleSignInChange(setFullName)}
                                name="fullName"
                                placeholder=" اسم مالك المؤسسة"
                                required
                                className='text-black focus:outline-none w-full bg-inherit'
                            />
                        </div>
                        <div className=" flex   mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <MdDriveFileRenameOutline />
                            <input
                                type="email"
                                name="email"
                                placeholder="البريد الالكتروني"
                                value={email}
                                onChange={handleSignInChange(setEmail)}
                                required
                                className='text-black focus:outline-none w-full bg-inherit'
                            />
                        </div>
                        <div className=" flex   mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaLock />
                            <input
                                type="password"
                                name="password"
                                placeholder="ادخل كلمة مرور"
                                required
                                value={password}
                                onChange={handleSignInChange(setPassword)}
                                className='text-black focus:outline-none w-full bg-inherit'
                            />
                        </div>
                        <div className=" flex  mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaLock />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="اعد ادخال كلمة المرور"
                                required
                                value={confirmPassword}
                                onChange={handleSignInChange(setConfirmPassword)}
                                className='text-black focus:outline-none w-full bg-inherit'
                            />
                            {/*errors.password2 && <span className="error">{errors.password2}</span>*/}
                        </div>
                        <div className=" flex   mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaPhone />
                            <input
                                type="string"
                                name="phoneNumber"
                                placeholder="ادخل رقم الهاتف"
                                value={phoneNumber}
                                onChange={handleSignInChange(setPhoneNumber)}
                                required
                                className='text-black focus:outline-none w-full bg-inherit'
                            />
                        </div>
                        <div className=" flex   mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaBuilding className=' w-11' />
                            <input
                                type="text"
                                name="businessName"
                                placeholder=" اسم المؤسسة"
                                value={businessName}
                                onChange={handleSignInChange(setBusinessName)}
                                required
                                className=' w-1/2 text-black focus:outline-none  bg-inherit'
                            />
                        </div>
                        <div className=" flex   mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaDeskpro className=' w-11' />
                            <input
                                type="text"
                                name="description"
                                placeholder=" وصف المؤسسة"
                                value={description}
                                onChange={handleSignInChange(setDescription)}
                                required
                                className=' w-1/2 text-black focus:outline-none  bg-inherit'
                            />
                        </div>
                        <div className=" flex   mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaDeskpro className=' w-11' />
                            <input
                                type="number"
                                name="workingHours"
                                placeholder="عدد ساعات العمل "
                                value={workingHours}
                                onChange={handleSignInChange(setWorkingHours)}
                                required
                                className='  text-black focus:outline-none  bg-inherit'
                            />
                        </div>
                        <div className=" flex  mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaAddressBook />
                            <input
                                type="text"
                                name="businessAddress"
                                placeholder="العنوان"
                                value={businessAddress}
                                onChange={handleSignInChange(setBusinessAddress)}
                                className='text-black focus:outline-none w-full bg-inherit'
                            />
                        </div>

                        <div className=" flex  mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaWebAwesome />
                            <input
                                type="text"
                                name="website"
                                placeholder="الموقع الالكتروني"
                                value={website}
                                onChange={handleSignInChange(setWebsite)}
                                className='text-black focus:outline-none w-full bg-inherit'
                            />
                        </div>
                        <div className=" flex  mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaAddressBook />
                            <input
                                type="text"
                                name="socialMedia"
                                placeholder="رابط موقع التواصل الاجتماعي "
                                value={socialMedia}
                                onChange={handleSignInChange(setSocialMedia)}
                                className='text-black focus:outline-none w-full bg-inherit'
                            />
                        </div>
                        <div className=" flex  mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaUser />
                            <select name="businessType" title='businessType' value={businessType} onChange={handleSignInChange(setBusinessType)} >
                                {placeTypes.map((place) => (
                                    <option key={place.value} value={place.value}>{place.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className=" flex   mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
                            <FaImage className=' text-xl' />
                            <p className=' ml-2 text-nowrap'> صورة المؤسسة</p>
                            <input
                                type="file"
                                name="Photo"
                                multiple
                                accept="image/*"
                                className=' opacity-0'
                                onChange={handleupload(setProfilePicture)}
                            />
                        </div>
                        <input type="submit"
                            value={"تسجيل الان"}
                            className=" w-full cursor-pointer  mb-3 flex-center bg-main-600  border-[1px] rounded-3xl border-none gap-1 py-3 text-white"
                        />
                    </form>
                    <Link href="/login" className="  mb-3 p-3 text-main-200">لديك حساب بالفعل!</Link>
                </div>
            </div>
        </div>
    )
}

export default BussinessSignUp
