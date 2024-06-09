import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import { userQuery } from "../../utils"
import { toast } from 'react-hot-toast';
import { client } from '@/lib/client'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
const Login = () => {
  const router= useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
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
        router.push("/")
      }
    }).catch((error) => {
      toast.error("خطاء في البريد الالكتروني او كلمة المرور")
    });
    
  }

  return (
    <div className='login-container flex-center h-[100vh] overflow-hidden'>
      <div className='flex h-[90%] w-[80%] bg-white rounded-xl overflow-hidden shadow-lg '>
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
        <div data-aos="fade-right" data-aos-delay="1100" className=' flex flex-col justify-center px-8'>
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
            <a href="#" className=" block  p-3 text-[#a9a9a9]">هل نسيت كلمة السر</a>
            <a href="/signup" className="  mb-3 p-3 text-main-200">ليس لديك حساب؟</a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
