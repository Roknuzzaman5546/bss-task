import { FaRegUser } from 'react-icons/fa';
import logo from '../assets/logo/logo.svg'
import love from '../assets/icon/love.png'
import './Navbar.css'
import { BsHandbag } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LuSearch } from 'react-icons/lu';
import { IoIosArrowDown } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const Navbar = () => {
    const [isNavbarJumping, setIsNavbarJumping] = useState(false);
    // for jumping effect code -sadia
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 100;
            setIsNavbarJumping(scrollY > scrollThreshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className=''>
            {/* for destop device */}
            <div className='md:block hidden'>
                {/* Upper menu */}
                <div className={`md:max-w-screen-2xl w-11/12 mx-auto lg:flex md:hidden hidden justify-between items-center border-b border-[#f5f5f5] py-3.5 px-2 transition-all duration-300 ease-in-out`}>
                    <div className="flex justify-around items-center gap-6">
                        <a className="navAfter relative font-sans font-semibold text-xs cursor-pointer text-[#3a3a3a]">fotoservice</a>
                        <a className="navAfter relative font-sans font-semibold text-xs cursor-pointer text-[#3a3a3a]">tickets & deals</a>
                        <a className="navAfter relative font-sans font-semibold text-xs cursor-pointer text-[#3a3a3a]">verzekeringen</a>
                        <a className="navAfter relative font-sans font-semibold text-xs cursor-pointer text-[#3a3a3a]">inspiratie</a>
                    </div>
                    <div className="flex justify-around items-center gap-6 ">
                        <a className="navAfter relative font-sans font-semibold text-xs cursor-pointer text-[#3a3a3a]">winkels</a>
                        <a className="navAfter relative font-sans font-semibold text-xs cursor-pointer text-[#3a3a3a]">oklantenpas</a>
                        <a className="navAfter relative font-sans font-semibold text-xs cursor-pointer text-[#3a3a3a]">klantenservice</a>
                    </div>
                </div>
                {/* down menu */}
                <div className={`bg-white top-0 z-20 py-4 px-1 ${isNavbarJumping ? "fixed w-full mx-auto shadow-md transition-all duration-500 ease-in-out" : "transition-all duration-300 ease-in-out"}`}>
                    <div className='flex justify-between items-center gap-4 md:max-w-screen-2xl w-11/12 mx-auto'>
                        <div className='flex items-center'>
                            <img src={logo} height={56} width={56} alt="" />
                        </div>
                        <div className=' lg:flex md:hidden hidden justify-between items-center gap-2'>
                            <HiOutlineBars3 className=' text-[25px] font-bold text-[#323232]' />
                            <h2 className=' font-semibold text-sm text-[#323232]'>categorieën</h2>
                            <IoIosArrowDown className='text-[#323232]' />
                        </div>
                        <div className=' flex justify-center items-center lg:w-[55%] md:w-[55%] w-[42%]'>
                            <input type="text" name="" id="" placeholder='Waar be je naar op Zoak?' className=' rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#efefef] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] transition-colors duration-700' />
                            <LuSearch className=' -ml-12 text-xl' />
                        </div>
                        <div className=' flex items-center gap-2 '>
                            <button className=' flex justify-center items-center gap-2 hover:bg-[#efefef] px-3 py-2 rounded-lg transition-colors duration-700'>
                                <FaRegUser className='text-[#323232]' />
                                <p className='  text-sm font-semibold text-[#323232]'>inloggen</p>
                            </button>
                            <button className=' hover:bg-[#efefef] px-2 py-2 rounded-lg transition-colors duration-500'>
                                <img className=' h-5 w-5' src={love} alt="" />
                            </button>
                            <button className=' hover:bg-[#efefef] px-2 py-2.5 rounded-lg transition-colors duration-500'>
                                <BsHandbag className=' text-lg text-[#323232]' />
                            </button>
                        </div>
                        <div className='lg:hidden md:flex flex'>
                            <HiOutlineBars3 className=' text-[25px] font-bold text-[#323232]' />
                        </div>
                    </div>
                </div>
            </div>
            {/* for mobile device */}
            <div className='md:hidden block'>
                {/* down menu */}
                <div className={`bg-white top-0 z-20 py-4 px-1 ${isNavbarJumping ? "fixed w-full mx-auto shadow-md transition-all duration-500 ease-in-out" : "transition-all duration-300 ease-in-out"}`}>
                    <div className='flex justify-between items-center gap-4 md:max-w-screen-2xl w-11/12 mx-auto'>
                        <div className='flex items-center'>
                            <img src={logo} height={50} width={50} alt="" />
                        </div>
                        <div className=' flex items-center gap-4'>
                            <div className={`${isNavbarJumping ? " flex transition-all duration-500 ease-in-out" : " hidden transition-all duration-300 ease-in-out"}`}>
                                <IoSearchSharp className=' text-[22px] font-bold text-[#323232]' />
                            </div>
                            <button className=' flex justify-center items-center gap-2 hover:bg-[#efefef] px-2 py-2 rounded-lg transition-colors duration-700'>
                                <FaRegUser className='text-[#323232] text-xl' />
                            </button>
                            <button className=' hover:bg-[#efefef] px-2 py-2.5 rounded-lg transition-colors duration-500'>
                                <BsHandbag className=' text-xl text-[#323232]' />
                            </button>
                            <div className='lg:hidden md:flex flex'>
                                <HiOutlineBars3 className=' text-[30px] font-bold text-[#323232]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center items-center w-[90%] pl-3'>
                    <input type="text" name="" id="" placeholder='Waar be je naar op Zoak?' className=' rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#efefef] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] transition-colors duration-700' />
                    <LuSearch className=' -ml-12 text-xl' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;