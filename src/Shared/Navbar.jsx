// import categoryImg1 from '../../assets/category/download.jpeg';
import categoryImg2 from '../assets/category/HEMA-2024-inspiratie-800x800-wk3738-jassen2.webp';
// import categoryImg3 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3940-jongenmeisje.webp';
// import categoryImg4 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.webp';
// import categoryImg5 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3940-kleding.webp';
// import categoryImg6 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk41-42-dbo-nieuw.webp';
// import categoryImg7 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk1718-kaletaart.webp';
// import categoryImg8 from '../../assets/category/HEMA-2023-categoryslider-280x280-wk22-vrije-tijd-1.webp';
// import categoryImg9 from '../../assets/category/HEMA-2024-categoryslider-280x280-keuken.webp';
// import categoryImg10 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk37-cadeaus-feest.webp';
// import categoryImg11 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk09-makeup.webp';
// import categoryImg12 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk1718-educatiefspeelgoed.webp';
// import categoryImg13 from '../../assets/category/HEMA-2023-categoryslider-280x280-wk24-foto.webp';
// import categoryImg14 from '../../assets/category/HEMA-2024-categoryslider-280x280-vriendenprijsjes.webp';
// import categoryImg15 from '../../assets/category/HEMA-categoryslider-2023-280x280-aanbiedingen.webp';
// import categoryImg16 from '../../assets/category/HEMA-categoryslider-2023-280x280-nieuw.webp';
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
    // for jumping effect
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
            {/* for destop & tab device */}
            <div className={`md:block hidden relative`}>
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
                <div className="w-full ">
                    <div className={`flex ${isNavbarJumping ? 'xl:py-[16px]' : 'xl:py-[15px]'}  justify-between items-center custom-range:px-12 px-5 max-w-[1280px] mx-auto `}>
                        <div className='flex items-center '>
                            <img className='mr-[102px]' src={logo} height={56} width={56} alt="" />
                        </div>
                        <div className='category group cursor-pointer'>
                            <div className={`lg:flex md:hidden hidden justify-between items-center gap-2 mr-[33px] overflow-hidden z-10 h-[88px]`}>
                                <HiOutlineBars3 className='text-[25px] font-bold text-[#292929]' />
                                <h2 className='font-semibold text-sm text-[#323232]'>categorieën</h2>
                                <IoIosArrowDown className='text-[#323232] transition-transform duration-500 group-hover:rotate-180' />
                            </div>
                            <div className=" category-info bottom-0 left-0 top-[88px] w-full bg-white transition-transform duration-700 transform scale-y-0 group-hover:scale-y-90 origin-top h-[450px] absolute">
                                <div className="max-w-[1280px] mx-auto px-12 ">
                                    <div className='border-t-2 flex justify-between items-start'>
                                        <div className=' border-r-2 w-[33.33%]'>
                                            <h2 className='font-bold font-hurme leading-5 pt-5'>categorieën</h2>
                                            <div className=' flex justify-between items-center gap-2'>
                                                <img src={categoryImg2} width={36} height={39} className=' rounded-full' alt="" />
                                                <p className=' border-b pt-2'>sinterklass</p>
                                            </div>
                                            <div className=' flex justify-between items-center gap-2 mt-5'>
                                                <img src={categoryImg2} width={36} height={39} className=' rounded-full' alt="" />
                                                <p>Karest</p>
                                            </div>
                                        </div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center w-full mr-[55px]'>
                            <input type="text" placeholder='Waar be je naar op Zoak?' className='rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#efefef] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] placeholder:lowercase placeholder:font-hurme font-hurme placeholder:text-[16px] placeholder:leading-5 placeholder:font-normal transition-colors duration-700' />
                            <LuSearch className='-ml-11 text-[21px] font-semibold' />
                        </div>

                        <div className='flex items-center gap-3 mr-2'>
                            <button className='flex justify-center items-center gap-2 text-[18px] hover:bg-[#efefef] px-3 py-2 rounded-lg transition-colors duration-700'>
                                <FaRegUser className='text-[#323232]' />
                                <p className='text-sm font-semibold text-[#323232]'>inloggen</p>
                            </button>
                            <button className='hover:bg-[#efefef] px-2 py-2 h-9 w-9 rounded-lg transition-colors duration-500'>
                                <img src={love} alt="" />
                            </button>
                            <button className='hover:bg-[#efefef] px-2 py-2.5 rounded-lg transition-colors duration-500'>
                                <BsHandbag className='text-[20px] text-[#323232]' />
                            </button>
                        </div>
                        <div className='lg:hidden md:flex flex'>
                            <HiOutlineBars3 className='text-[25px] font-bold text-[#323232]' />
                        </div>
                    </div>
                </div>

                {/* <div className={`flex ${isNavbarJumping ? 'xl:py-[16px]' : 'xl:py-[15px]'}  lg:py-[16px] md:py-[15px] py-[15px] justify-between items-center custom-range:px-12 px-5  max-w-[1280px] mx-auto`}>
                    <div className='flex items-center '>
                        <img className='mr-[102px] ' src={logo} height={56} width={56} alt="" />
                    </div>
                    <div className='category group cursor-pointer relative'>
                        <div className={`lg:flex md:hidden hidden justify-between items-center gap-2 mr-[33px] overflow-hidden`}>
                            <HiOutlineBars3 className='text-[25px] font-bold text-[#292929]' />
                            <h2 className='font-semibold text-sm text-[#323232]'>categorieën</h2>
                            <IoIosArrowDown className='text-[#323232] transition-transform duration-500 group-hover:rotate-180' />
                        </div>
                        <div className='bg-white w-svw h-[0px] group-hover:h-[150px] absolute top-7 left-0 p-5 transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top category-info'>
                            <h2 className='text-black'>ami sojib</h2>
                            <h2 className='text-black'>ami rokon</h2>
                            <h2 className='text-black'>ami habib</h2>
                        </div>
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
                </div> */}
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