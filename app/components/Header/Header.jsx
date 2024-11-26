"use client"
import React, { useState ,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 640) 
            setDrawerOpen(false);
          }
        
    
    
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <header>
            <nav className="bg-[#FAF9FA]  px-4 lg:px-8 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/icons/icon.svg"
                            className="mr-2"
                            alt="Logo"
                            width={24}
                            height={40}
                        />
                        
                        <span className="text-2xl font-bold text-[#404653]">RegTechFlow</span>
                    </Link>
                    
                    <button
                        onClick={toggleDrawer}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <div
                        className={`${
                            isDrawerOpen ? 'block absolute shadow-lg top-16 left-0 z-50 bg-white ' : 'hidden'
                        } justify-between items-center w-full lg:flex lg:w-auto `}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" style={{fontFamily: '"Inter", sans-serif'}}>
                            <li>
                                <Link href="#" className="flex items-center gap-2 px-3 py-2 text-[#1E1E1E] font-semibold text-[14px] hover:text-purple-600">
                                    Solutions 
                                    <img src='icons/drop.svg' alt='more'/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-3 py-2 text-[#1E1E1E] font-semibold text-[14px] hover:text-purple-600">
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-3 py-2 text-[#1E1E1E] font-semibold text-[14px] hover:text-purple-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-3 py-2 text-[#1E1E1E] font-semibold text-[14px] hover:text-purple-600">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-3 py-2 text-[#1E1E1E] font-semibold text-[14px] hover:text-purple-600">
                                    Blog
                                </Link>
                            </li>
                            
                        </ul>
                        <div className={` ${isDrawerOpen?"flex ":"hidden"} px-2 mb-6 justify-center items-start gap-2 `} style={{ fontFamily: '"Open Sans", sans-serif'}}>
                    
                    <Link href="#" className="block px-3 py-2 w-[85px]  text-center text-[#510AC9] text-sm font-semibold rounded-[40px] border-[1px] border-[#AF8EE6]">
                        Login
                    </Link>
                
                
                    <Link 
                        href="#" 
                        className="block px-4 py-2 text-white w-[85px] text-center text-sm font-semibold rounded-[40px] border-[1px] bg-[#510AC9]"
                    >
                        Demo
                    </Link>
                
        </div>
                    </div>
                    <div className={`lg:flex hidden justify-center items-center gap-5 `} style={{ fontFamily: '"Open Sans", sans-serif'}}>
                    
                                <Link href="#" className="block px-3 py-2 w-[85px]  text-center text-[#510AC9] text-sm font-semibold rounded-[40px] border-[1px] border-[#AF8EE6]">
                                    Login
                                </Link>
                            
                            
                                <Link 
                                    href="#" 
                                    className="block px-4 py-2 text-white w-[85px] text-center text-sm font-semibold rounded-[40px] border-[1px] bg-[#510AC9]"
                                >
                                    Demo
                                </Link>
                            
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;