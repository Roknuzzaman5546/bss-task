import { HiOutlineBars3 } from 'react-icons/hi2';
import categoryImg2 from '../assets/category/HEMA-2024-inspiratie-800x800-wk3738-jassen2.webp';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import './Navbar.css'
import { useEffect, useState } from 'react';

const NavCategory = ({ isNavbarJumping }) => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(response => response.json())
            .then(data => setCategoryData(data));
    }, [categoryData]);


    return (
        <div>
            <div className=' group cursor-pointer'>
                <div className={`lg:flex md:hidden hidden justify-between items-center gap-2 mr-[33px] overflow-hidden z-10 h-[88px]`}>
                    <HiOutlineBars3 className='text-[25px] font-bold text-[#292929]' />
                    <h2 className='font-semibold text-sm text-[#323232]'>categorieën</h2>
                    <IoIosArrowDown className='text-[#323232] transition-transform duration-500 group-hover:rotate-180' />
                </div>
                {/* category dropdown */}
                <div className={`bottom-0 left-0 ${isNavbarJumping ? 'top-[88px]' : 'top-[130px]'} w-full bg-white transition-transform duration-700 transform scale-y-0 group-hover:scale-y-100 origin-top h-svh absolute overflow-y-auto`}>
                    <div className="max-w-[1280px] mx-auto px-12 relative">
                        <div className='border-t-2 flex justify-between items-start'>
                            <div className=' border-r-2 w-[33.33%]'>
                                <h2 className='font-bold font-hurme leading-5 pt-4 pb-6'>categorieën</h2>
                                {
                                    categoryData.map((category) => (
                                        <div key={category.id} className='hover:bg-[#efefef] category'>
                                            <div className='flex justify-between items-center gap-7 px-2'>
                                                <img src={categoryImg2} width={39} height={39} className=' rounded-full' alt="" />
                                                <div className=' w-full flex justify-start items-center py-4 gap-7 border-b'>
                                                    <p className=' w-full font-sans'>sinterklass</p>
                                                    <IoIosArrowForward></IoIosArrowForward>
                                                </div>
                                            </div>
                                            <div className='category-info absolute left-[365px] top-0 w-[33.33%] border-r-2'>
                                                <h2 className='font-bold font-hurme leading-5 pt-4 pb-6 pl-5'>categorieën</h2>
                                                <div className='hover:bg-[#efefef] pl-5 mt-0.5'>
                                                    <div className=' w-full flex justify-start items-center py-4 gap-5 border-y pr-3'>
                                                        <p className=' w-full font-sans'>sinterklass</p>
                                                        <IoIosArrowForward></IoIosArrowForward>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavCategory;