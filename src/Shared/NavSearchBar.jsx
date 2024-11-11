import { FaXmark } from 'react-icons/fa6';
import { LuSearch } from 'react-icons/lu';

const NavSearchBar = ({ isSearchClick, logo, setIsSearchClick, isNavbarJumping }) => {
    return (
        <div className={`side_bar 
            ${isSearchClick ?
                isNavbarJumping ? '-mt-[83px]'
                    : '-mt-[125px]' : '-mt-[900px]'}
                    w-full bg-white transition-all duration-500 ease-in-out z-[310] pt-[18.5px] fixed h-fit`}>
            <div className=' max-w-[1280px] mx-auto custom-range:px-12 px-5'>
                <div className=' flex justify-between items-center'>
                    <div className='flex items-center '>
                        <img className='mr-[102px]' src={logo} height={56} width={56} alt="" />
                    </div>
                    <div className='flex justify-center items-center w-[45%] mx-auto'>
                        <input type="text" placeholder='Waar be je naar op Zoak?' className='rounded-3xl h-[44px] w-full outline-0 ring-0 bg-[#efefef] hover:bg-[#dfdfdf] py-3 px-6 placeholder:text-[#767676] placeholder:lowercase placeholder:font-hurme font-hurme placeholder:text-[16px] placeholder:leading-5 placeholder:font-normal transition-colors duration-700' />
                        <LuSearch className='-ml-11 text-[21px] font-semibold' />
                    </div>
                    <div className=' flex justify-center items-center gap-3 hover:bg-[#efefef] px-3 py-2 rounded-lg transition-colors duration-700 cursor-pointer' onClick={() => setIsSearchClick(!isSearchClick)}>
                        <p className=' font-hurme font-semibold'>annuleren</p>
                        <FaXmark className=' text-xl'></FaXmark>
                    </div>
                </div>
                <div className=' w-2/5 mx-auto mt-12 pb-10'>
                    <h2 className=' text-lg font-bold font-hurme text-black pb-4'>populair</h2>
                    <div className=' flex justify-start gap-3 hover:bg-[#efefef] rounded-md transition-colors duration-700 cursor-pointer py-2.5 pl-2'>
                        <LuSearch className='text-[21px] font-semibold' />
                        <p>Kid</p>
                    </div>
                    <div className=' flex justify-start gap-3 hover:bg-[#efefef] rounded-md transition-colors duration-700 cursor-pointer py-2.5 pl-2'>
                        <LuSearch className='text-[21px] font-semibold' />
                        <p>Shoes</p>
                    </div>
                    <div className=' flex justify-start gap-3 hover:bg-[#efefef] rounded-md transition-colors duration-700 cursor-pointer py-2.5 pl-2'>
                        <LuSearch className='text-[21px] font-semibold' />
                        <p>tank top</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavSearchBar;