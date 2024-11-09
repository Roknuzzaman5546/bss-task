import { BsHandbag } from 'react-icons/bs';
import { FaHeadset, FaRegUser } from 'react-icons/fa';
import { FiCamera, FiSearch } from 'react-icons/fi';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LuSearch, LuTicket } from 'react-icons/lu';
import './Navbar.css'
import { useEffect, useState } from 'react';
import love from '../assets/icon/love.png'
import { IoIosArrowForward } from 'react-icons/io';
import { FaXmark } from 'react-icons/fa6';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { AiOutlineCoffee } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

const NavMobile = ({ isNavbarJumping, logo }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(response => response.json())
            .then(data => setCategoryData(data));
    }, [categoryData]);

    return (
        <div>
            <div className={`bg-white top-0 z-20 ${isNavbarJumping ? "fixed w-full mx-auto shadow-md transition-all duration-500 ease-in-out pt-4 pb-3" : "py-3 transition-all duration-300 ease-in-out"}`}>
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
                        {/* sidebar part */}
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label onClick={() => setIsDrawerOpen(!isDrawerOpen)} htmlFor="my-drawer-4" className="drawer-button"><div className='lg:hidden md:flex flex'>
                                    <HiOutlineBars3 className=' text-[26px] font-bold text-[#323232]' />
                                </div></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className=" bg-white min-h-full w-screen">
                                    <div className='flex justify-between items-center gap-4 w-full mx-auto pt-3 pb-3 fixed bg-white px-4'>
                                        <div className='flex items-center'>
                                            <img src={logo} height={48} width={48} alt="" />
                                        </div>
                                        <div className='relative w-[45%] mx-auto'>
                                            <input type="text" name="" id="" placeholder='Waar ...' className=' rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#eaeaea] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] placeholder:text-sm transition-colors duration-700' />
                                            <LuSearch className='text-xl absolute top-[29%] right-4' />
                                        </div>
                                        <label onClick={() => setIsDrawerOpen(!isDrawerOpen)} htmlFor="my-drawer-4" className="drawer-button">
                                            <div className='lg:hidden md:flex flex'>
                                                <FaXmark className=' text-[20px] font-bold text-[#323232]' />
                                            </div>
                                        </label>
                                    </div>
                                    <div className='h-screen overflow-y-auto pt-2'>
                                        {
                                            categoryData.map((category) => (
                                                <div key={category?.id} className='hover:bg-[#efefef] category px-5'>
                                                    <div className='flex justify-between items-center gap-7 border-b'>
                                                        <img src={category?.img} className='w-[59px] h-[59px] rounded-full' alt="" />
                                                        <div className=' w-full flex justify-start items-center gap-7 py-6'>
                                                            <p className=' w-full font-sans'>{category?.title}</p>
                                                            <IoIosArrowForward className=' font-bold'></IoIosArrowForward>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className=' px-5 pb-24'>
                                            <h2 className=' text-xl font-hurme font-bold text-black pt-7 pb-5'>mijn HEMA</h2>
                                            <div>
                                                <div className=' flex justify-start items-center border-b py-5 gap-5'>
                                                    <FaRegUser className='text-[#323232] text-xl' />
                                                    <p>inloggen of registreren</p>
                                                </div>
                                                <div className=' flex justify-start items-center border-b py-5 gap-5'>
                                                    <img className=' w-[20px] h-[20px]' src={love} alt="" />
                                                    <p>fouvaretian</p>
                                                </div>
                                            </div>
                                            <h2 className=' text-xl font-hurme font-bold text-black py-5'>mijn HEMA</h2>
                                            <div>
                                                <div className=' flex justify-start items-center border-b py-5 gap-5'>
                                                    <FiCamera className='text-[#323232] text-xl' />
                                                    <p>Fotoservice</p>
                                                </div>
                                                <div className=' flex justify-start items-center border-b py-5 gap-5'>
                                                    <LuTicket className='text-[#323232] text-xl' />
                                                    <p>tickets & deals</p>
                                                </div>
                                                <div className=' flex justify-start items-center border-b py-5 gap-5'>
                                                    <MdOutlineMarkEmailUnread className='text-[#323232] text-xl' />
                                                    <p>verzekeringen</p>
                                                </div>
                                                <div className=' flex justify-start items-center border-b py-5 gap-5'>
                                                    <AiOutlineCoffee className='text-[#323232] text-xl' />
                                                    <p>inspiratie</p>
                                                </div>
                                                <div className=' flex justify-start items-center border-b py-5 gap-5'>
                                                    <IoLocationOutline className='text-[#323232] text-xl' />
                                                    <p>winkels</p>
                                                </div>
                                                <div className=' flex justify-start items-center border-b py-5 gap-5'>
                                                    <FaHeadset className='text-[#323232] text-xl' />
                                                    <p>klantenservice</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isDrawerOpen ? ' relative w-11/12 mx-auto' : 'hidden'}>
                <input type="text" name="" id="" placeholder='Waar be je naar op Zoak?' className=' rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#efefef] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] placeholder:text-sm transition-colors duration-700' />
                <LuSearch className='text-xl absolute top-[29%] right-4' />
            </div>
        </div>
    );
};

export default NavMobile;