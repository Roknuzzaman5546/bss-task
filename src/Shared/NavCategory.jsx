import { HiOutlineBars3 } from 'react-icons/hi2';
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
                <div className={`lg:flex md:hidden hidden justify-between items-center gap-2 mr-[33px] overflow-hidden z-10 xl:h-[58px] lg:h-[88px] md:h-[88px] h-[88px]`}>
                    <HiOutlineBars3 className='text-[25px] font-bold text-[#292929]' />
                    <h2 className='font-semibold text-sm text-[#323232]'>categorieën</h2>
                    <IoIosArrowDown className='text-[#323232] transition-transform duration-500 group-hover:rotate-180' />
                </div>
                {/* category dropdown */}
                <div className={`bottom-0 left-0 ${isNavbarJumping ? 'top-[88px]' : 'top-[130px]'} w-full bg-white transition-transform duration-700 transform scale-y-0 group-hover:scale-y-100 origin-top h-screen absolute overflow-y-auto`}>
                    <div className="max-w-[1280px] mx-auto custom-range:px-12 px-5 relative">
                        <div className='border-t-2 flex justify-between items-start'>
                            <div className=' border-r-2 w-[33.33%]'>
                                <h2 className='font-bold font-hurme leading-5 pt-4 pb-6'>categorieën</h2>
                                {
                                    categoryData.map((category) => (
                                        <div key={category?.id} className='hover:bg-[#efefef] category'>
                                            <div className='flex justify-between items-center gap-7 px-2'>
                                                <img src={category?.img} width={39} height={39} className=' rounded-full' alt="" />
                                                <div className=' w-full flex justify-start items-center py-4 gap-7 border-b'>
                                                    <p className=' w-full font-sans'>{category?.title}</p>
                                                    <IoIosArrowForward></IoIosArrowForward>
                                                </div>
                                            </div>
                                            <div className='category-info absolute left-[365px] top-0 w-[33.33%] border-r-2'>
                                                <h2 className='font-bold font-hurme leading-5 pt-4 pb-6 pl-5'>{category?.title}</h2>
                                                {
                                                    category?.subtitles.map((sub, idx) => (
                                                        <div key={idx} className='hover:bg-[#efefef] pl-5 mt-[1px] category'>
                                                            <div className=' w-full flex justify-start items-center py-4 gap-5 border-t pr-3'>
                                                                <p className=' w-full font-sans'>{sub?.name}</p>
                                                                <IoIosArrowForward></IoIosArrowForward>
                                                            </div>
                                                            {
                                                                sub?.items &&
                                                                    <div className='absolute left-[345px] w-[275px] top-0 category-info'>
                                                                        <h2 className='font-bold font-hurme leading-5 pt-4 pb-6 pl-5'>{sub?.name}</h2>
                                                                        {
                                                                            sub?.items.map((item, idx) => (
                                                                                <div key={idx} className='py-4 gap-5'>
                                                                                    <p className='font-sans pl-5 hover:underline underline-offset-2'>{item}</p>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                            }
                                                        </div>
                                                    ))
                                                }
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