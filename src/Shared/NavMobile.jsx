import { BsHandbag } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { LuSearch } from 'react-icons/lu';
import './Navbar.css'
import { useState } from 'react';

const NavMobile = ({ isNavbarJumping, logo }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

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
                                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    {/* Sidebar content here */}
                                    <label onClick={() => setIsDrawerOpen(!isDrawerOpen)} htmlFor="my-drawer-4" className="drawer-button"><div className='lg:hidden md:flex flex'>
                                        <HiOutlineBars3 className=' text-[26px] font-bold text-[#323232]' />
                                    </div></label>
                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>
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