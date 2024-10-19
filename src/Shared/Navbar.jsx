import {FaRegUser } from 'react-icons/fa';
import logo from '../assets/logo/logo.svg'
import love from '../assets/icon/love.png'
import './Navbar.css'
import { BsHandbag } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LuSearch } from 'react-icons/lu';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className='md:max-w-screen-2xl w-11/12 mx-auto mt-2.5 px-1'>
            {/* Upper menu */}
            <div className=" flex justify-between items-center border-b border-[#f5f5f5] pb-3">
                <div className="flex justify-around items-center gap-6 text-sm font-semibold">
                    <a className="navAfter relative font-medium cursor-pointer ">fotoservice</a>
                    <a className="navAfter relative font-medium cursor-pointer ">tickets & deals</a>
                    <a className="navAfter relative font-medium cursor-pointer ">verzekeringen</a>
                    <a className="navAfter relative font-medium cursor-pointer ">inspiratie</a>
                </div>
                <div className="flex justify-around items-center gap-6 text-sm font-semibold">
                    <a className="navAfter relative font-medium cursor-pointer ">winkels</a>
                    <a className="navAfter relative font-medium cursor-pointer ">oklantenpas</a>
                    <a className="navAfter relative font-medium cursor-pointer ">klantenservice</a>
                </div>
            </div>
            {/* down menu */}
            <div className=' flex justify-between items-center gap-5 mt-4'>
                <div className='flex items-center hover:bg-'>
                    <img src={logo} height={56} width={56} alt="" />
                </div>
                <div className=' flex justify-between items-center gap-2'>
                    <HiOutlineBars3 className=' text-[25px] font-bold' />
                    <h2 className=' font-semibold'>categorieën</h2>
                    <IoIosArrowDown />
                </div>
                <div className=' flex justify-center items-center w-[45%]'>
                    <input type="text" name="" id="" placeholder='Waar be je naar op Zoak?' className=' rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#efefef] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] transition-colors duration-700' />
                    <LuSearch className=' -ml-12 text-xl' />
                </div>
                <div className=' flex items-center gap-3 '>
                    <button className=' flex justify-center items-center gap-2 hover:bg-[#efefef] px-3 py-2 rounded-lg transition-colors duration-700'>
                        <FaRegUser />
                        <p className=' font-semibold'>inloggen</p>
                    </button>
                    <button className=' hover:bg-[#efefef] px-2.5 py-2.5 rounded-lg transition-colors duration-500'>
                        <img className=' h-5 w-5' src={love} alt="" />
                    </button>
                    <button className=' hover:bg-[#efefef] px-2 py-2.5 rounded-lg transition-colors duration-500'>
                        <BsHandbag className=' text-lg' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;