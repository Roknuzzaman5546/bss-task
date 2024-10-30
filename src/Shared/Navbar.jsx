import { FaRegUser } from 'react-icons/fa';
import logo from '../assets/logo/logo.svg'
import love from '../assets/icon/love.png'
import './Navbar.css'
import { BsHandbag } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LuSearch } from 'react-icons/lu';
import { IoIosArrowDown } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

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
        <div className={`w-full sticky top-0 left-0 right-0 bg-white mx-auto transition-all duration-500 ease-in-out z-[310] ${isNavbarJumping ? "shadow-md" : "transition-all duration-300 ease-in-out"}`}>
            {/* for destop device */}
            <div className={`md:block hidden`}>
                {/* Upper menu */}
                <div className={`max-w-[1280px] mx-auto custom-range:px-12 px-5 pt-[12px] ${isNavbarJumping ? "h-0 opacity-0 hidden transition-all duration-300 ease-in-out" : "h-auto opacity-100"}`}>
                    <div className=' border-b border-[#f5f5f5] lg:flex md:hidden hidden justify-between items-center pb-[10px]'>
                        <div className="flex items-center">
                            <a className="navAfter relative font-semibold mr-6 text-[#323232] text-[13px] font-sans cursor-pointer">fotoservice</a>
                            <a className="navAfter relative font-semibold mr-6 text-[#323232] text-[13px] font-sans cursor-pointer">tickets & deals</a>
                            <a className="navAfter relative font-semibold mr-6 text-[#323232] text-[13px] font-sans cursor-pointer">verzekeringen</a>
                            <a className="navAfter relative font-semibold text-[#323232] text-[13px] font-sans cursor-pointer">inspiratie</a>
                        </div>
                        <div className="flex items-center">
                            <a className="navAfter relative mr-6 font-semibold text-[#323232] text-[13px] font-sans cursor-pointer">winkels</a>
                            <a className="navAfter relative mr-6 font-semibold text-[#323232] text-[13px] font-sans  cursor-pointer">oklantenpas</a>
                            <a className="navAfter relative font-semibold text-[#323232] text-[13px] font-sans cursor-pointer">klantenservice</a>
                        </div>
                    </div>
                </div>
                {/* down menu */}
                <div className='flex xl:py-[15px] lg:py-[16px] md:py-[15px] py-[15px] justify-between items-center custom-range:px-12 px-5  max-w-[1280px] mx-auto'>
                    <div className='flex items-center '>
                        <img className='mr-[102px] ' src={logo} height={56} width={56} alt="" />
                    </div>
                    <div className=' lg:flex md:hidden hidden justify-between items-center gap-2 mr-[33px] '>
                        <HiOutlineBars3 className=' text-[25px] font-bold text-[#292929]' />
                        {/* <FontAwesomeIcon icon={faBars} className='' /> */}
                        <h2 className=' font-semibold text-sm text-[#323232]'>categorieën</h2>
                        <IoIosArrowDown className='text-[#323232]' />
                    </div>
                    <div className=' flex justify-center items-center w-full mr-[55px]'>
                        <input type="text" name="" id="" placeholder='Waar be je naar op Zoak?' className=' rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#efefef] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] placeholder:lowercase placeholder:font-hurme font-hurme placeholder:text-[16px] placeholder:leading-5 placeholder:font-normal transition-colors duration-700' />
                        <LuSearch className=' -ml-11 text-[21px] font-semibold' />
                    </div>
                    <div className=' flex items-center gap-3 mr-2'>
                        <button className=' flex justify-center items-center gap-2 text-[18px] hover:bg-[#efefef] px-3 py-2 rounded-lg transition-colors duration-700'>
                            <FaRegUser className='text-[#323232]' />
                            <p className='  text-sm font-semibold text-[#323232]'>inloggen</p>
                        </button>
                        <button className=' hover:bg-[#efefef] px-2 py-2 h-9 w-9 rounded-lg transition-colors duration-500'>
                            <img src={love} alt="" />
                        </button>
                        <button className=' hover:bg-[#efefef] px-2 py-2.5 rounded-lg transition-colors duration-500'>
                            <BsHandbag className=' text-[20px] text-[#323232]' />
                        </button>
                    </div>
                    <div className='lg:hidden md:flex flex'>
                        <HiOutlineBars3 className=' text-[25px] font-bold text-[#323232]' />
                    </div>
                </div>
            </div>
            {/* for mobile device */}
            <div className='md:hidden block'>
                {/* down menu */}
                <div className={`bg-white top-0 z-20 py-3 ${isNavbarJumping ? "fixed w-full mx-auto shadow-md transition-all duration-500 ease-in-out" : "transition-all duration-300 ease-in-out"}`}>
                    <div className='flex justify-between items-center gap-4 w-11/12 mx-auto'>
                        <div className='flex items-center'>
                            <img src={logo} height={48} width={48} alt="" />
                        </div>
                        <div className=' flex items-center gap-4'>
                            <div className={`${isNavbarJumping ? " flex transition-all duration-500 ease-in-out" : " hidden transition-all duration-300 ease-in-out"}`}>
                                <FiSearch className=' text-[22px] font-bold text-[#323232]' />
                            </div>
                            <button className=' flex justify-center items-center gap-2 hover:bg-[#efefef] px-2 py-2 rounded-lg transition-colors duration-700'>
                                <FaRegUser className='text-[#323232] text-xl' />
                            </button>
                            <button className=' hover:bg-[#efefef] px-2 py-2.5 rounded-lg transition-colors duration-500'>
                                <BsHandbag className=' text-xl text-[#323232]' />
                            </button>
                            <div className='lg:hidden md:flex flex'>
                                <HiOutlineBars3 className=' text-[26px] font-bold text-[#323232]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' relative w-11/12 mx-auto'>
                    <input type="text" name="" id="" placeholder='Waar be je naar op Zoak?' className=' rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#efefef] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] placeholder:text-sm transition-colors duration-700' />
                    <LuSearch className='text-xl absolute top-[30%] right-4' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;