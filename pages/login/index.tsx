import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import { userQuery } from "../../utils"
import { toast } from 'react-hot-toast';
import { client } from '@/lib/client'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import "../../node_modules/aos/dist/aos.css"
import Aos from 'aos'
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    Aos.init({
        easing: 'ease-in-out',
        duration: 1000,
        delay: 200
    });
}, [])
  const handleLoginChange = (setter: any) => (e: any) => {
    setter(e.target.value);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const query = userQuery(email, password);
    client.fetch(query).then((data) => {
      if (data.length === 0) {
        toast.error("خطاء في البريد الالكتروني او كلمة السر");

      } else {
        setUser(data[0]);
        localStorage.setItem("user-your-place-here", JSON.stringify(data[0]));
        toast.success("تم تسجيل الدخول بنجاح")
        console.log("تم تسجيل الدخول بنجاح", user)
        router.push("/")
      }
    }).catch((error) => {
      toast.error("خطاء في البريد الالكتروني او كلمة المرور")
    });

  }

  return (
    <div className='login-container flex-center h-[100vh] overflow-hidden'>
      <div className='flex md:h-[90%]  xs:h-fit w-[80%] bg-white rounded-xl overflow-hidden shadow-lg '>
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
        <div data-aos="fade-right" data-aos-delay="1100" className='main-prop flex flex-col justify-center px-8'>
          <p className='text-[32px] font-bold text-black'>أهلاً بك من جديد!</p>
          <p className='text-[24px] text-black'>مرحباً بعودتك</p>
          <form onSubmit={handleLogin} >
            <div className=" flex mt-8  mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
              <FaUser />
              <input
                type="email"
                name="email"
                placeholder="البريد الالكتروني"
                value={email}
                onChange={handleLoginChange(setEmail)}
                required
                className='text-black focus:outline-none w-full bg-inherit'
              />

            </div>
            <div className=" flex mb-3 items-center border-[1px] rounded-3xl border-[#DDD] gap-1 p-3 text-[#a9a9a9]">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="ادخل كلمة مرور"
                required
                value={password}
                onChange={handleLoginChange(setPassword)}
                className='text-black focus:outline-none w-full bg-inherit'
              />
            </div>
            <input type="submit"
              value={"Login"}
              className=" w-full cursor-pointer  mb-3 flex-center bg-main-600  border-[1px] rounded-3xl border-none gap-1 py-3 text-white"
            />
            <Link href="#" className=" block  p-3 text-[#a9a9a9]">هل نسيت كلمة السر</Link>
            <button onClick={() => setPopup(true)} className="  mb-3 p-3 text-main-200">ليس لديك حساب؟</button>
          </form>
        </div>
      </div>
      {popup &&
        <div className=' bg-[#000000ad] fixed top-0 left-0 w-full h-full z-30'>
          <div  className=' absolute py-10 px-5 rounded-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white z-50' >
            <button type='button' onClick={()=> setPopup(false)} className=' text-[#f00] absolute top-5 left-3 text-xl z-10'><MdCancel /></button>
            <p className=' font-bold text-lg py-5 text-main-600'>التسجيل كـ:</p>
            <div className='flex flex-col gap-2 px-8'>
              <Link className=' transition-all hover:text-main-200' href={"/signup"}> مستخدم عادي</Link>
              <Link className=' transition-all hover:text-main-200' href={"/signup/bussinessSignUp"}>مؤسسة</Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Login
