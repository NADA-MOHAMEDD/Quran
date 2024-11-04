// src/components/Header.js
import React from 'react';
import { FaSearch, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            {/* Logo Section - Hidden on Small and Medium Screens */}
            <div className="flex items-start mr-4 hidden lg:flex">
                <img src="/images/Screenshot.png" alt="شعار الموقع" className="w-10 h-10" />
                <span className="text-2xl font-bold text-green-700">بيت القرآن</span>
            </div>

            {/* Navigation Links - Always Visible */}
            <nav className="flex space-x-reverse space-x-4">
                <Link to={"/"} className="text-gray-700 hover:text-gray-900">الرئيسية</Link>
                <Link to={"#home"} className="text-gray-700 hover:text-gray-900">صوتيات</Link>
                <Link to={"#teachers"} className="text-gray-700 hover:text-gray-900">المعلمون</Link>
                <Link to={"#services"} className="text-gray-700 hover:text-gray-900">الخدمات</Link>
                <Link to={"#prices"} className="text-gray-700 hover:text-gray-900">الأسعار</Link>
            </nav>

            {/* Buttons Section */}
            <div className="flex items-center">
                <div className="relative ml-4">
                    <input type="text" className="border rounded-lg px-3 py-2 w-full md:w-14" />
                    <span className="absolute inset-y-0 pr-3 flex items-center text-gray-500">
                        <FaSearch className="h-5 w-5" />
                    </span>
                </div>
                <div className="ml-4 flex items-center text-gray-700"> 
                    <span className="bg-green-700 p-1 rounded-full ml-2"> 
                        <FaGlobe className="h-5 w-5 text-white" /> 
                    </span>
                    <span className="ml-2">عربي</span> 
                </div>
                
                {/* Buttons - Hidden on Small Screens */}
                <button className="border mx-4 px-4 py-2 rounded-2xl text-green-700 border-green-700 hidden sm:block">إنشاء حساب</button>
                <button className="bg-green-700 text-white px-4 py-2 rounded-2xl ml-6 hidden sm:block">تواصل معنا</button>
            </div>
        </header>
        </>
    );
}

export default Header;


