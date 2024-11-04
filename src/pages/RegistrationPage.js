import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
import 'tailwindcss/tailwind.css';

const RegistrationPage = () => {
  return (
    <>
    <div className="h-screen flex items-center justify-center bg-green-700">
      <div className="w-full h-full flex flex-col md:flex-row bg-white md:bg-transparent">
        {/* Left Section - Form Only on Small and Medium Screens */}
        <div className="w-full md:w-1/2 p-4 md:p-16 flex flex-col justify-center bg-white md:rounded-tl-[50px] md:rounded-bl-[40px]">
          <form>
            <img src="/images/Screenshot.png" alt="شعار الموقع" className="w-14 h-14 mx-auto mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">إنشاء حساب</h1>
            <button
              className=" text-center text-black py-2 px-4 mb-4 border rounded shadow  flex items-center justify-center w-full"
            >
              تسجيل الدخول عن طريق جوجل 
              <img  src="/images/google.jpg"alt="google icon"className="w-5 h-5 mr-2" />
            </button>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                الاسم
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="ادخل اسمك بالكامل"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                البريد الإلكتروني
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="ادخل البريد الالكتروني الخاص بك"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                كلمة السر
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="ادخل كلمة السر"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                إنشاء حساب
              </button>
            </div>
          </form>
          <div className="mt-4 text-gray-700 text-center">
            لديك حساب بالفعل؟ <a href={"#home"} className="text-green-700 hover:underline">تسجيل الدخول</a>
          </div>
          <div className="flex rtl:space-x-reverse space-x-4 mt-3 justify-center">
            <a href="https://linkedin.com" className="text-white bg-gray-600 p-2 inline-flex items-center justify-center"><FaLinkedinIn size={15} /></a>
            <a href="https://instagram.com" className="inline-flex items-center justify-center text-white bg-gray-600 rounded-lg">
              <LuInstagram size={30} /></a>
            <a href="https://twitter.com" className="text-gray-600"><FaTwitter size={31} /></a>
            <a href="https://facebook.com" className="text-gray-600"><FaFacebook size={30} /></a>
          </div>
        </div>

        {/* Right Section - Visible Only on Large Screens */}
        <div className="hidden md:flex w-1/2 flex-col justify-center items-center relative bg-green-700">
          <img src="/images/Vector (1).png" alt="Top Left" className="absolute top-0 left-0 w-16 h-16" />
          <div className="flex flex-col items-center space-y-4">
            <img src="/images/Frame1.png" alt="أهلا بك! معاً لتحفيظ القرآن" className="w-90 h-auto" />
            <img src="/images/frame2.png" alt="Signup Process" className="w-60 h-auto" />
          </div>
          <img src="/images/Vector.png" alt="Bottom Right" className="absolute bottom-0 right-0 w-16 h-16" />
        </div>
      </div>
    </div>
    </>
  );
};

export default RegistrationPage;
















