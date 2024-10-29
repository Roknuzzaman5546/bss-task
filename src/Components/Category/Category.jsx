import categoryImg1 from '../../assets/category/download.jpeg';
import categoryImg2 from '../../assets/category/HEMA-2024-inspiratie-800x800-wk3738-jassen2.webp';
import categoryImg3 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3940-jongenmeisje.webp';
import categoryImg4 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.webp';
import categoryImg5 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3940-kleding.webp';
import categoryImg6 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk41-42-dbo-nieuw.webp';
import categoryImg7 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk1718-kaletaart.webp';
import categoryImg8 from '../../assets/category/HEMA-2023-categoryslider-280x280-wk22-vrije-tijd-1.webp';
import categoryImg9 from '../../assets/category/HEMA-2024-categoryslider-280x280-keuken.webp';
import categoryImg10 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk37-cadeaus-feest.webp';
import categoryImg11 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk09-makeup.webp';
import categoryImg12 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk1718-educatiefspeelgoed.webp';
import categoryImg13 from '../../assets/category/HEMA-2023-categoryslider-280x280-wk24-foto.webp';
import categoryImg14 from '../../assets/category/HEMA-2024-categoryslider-280x280-vriendenprijsjes.webp';
import categoryImg15 from '../../assets/category/HEMA-categoryslider-2023-280x280-aanbiedingen.webp';
import categoryImg16 from '../../assets/category/HEMA-categoryslider-2023-280x280-nieuw.webp';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithStyles from './WithStyles';

const Category = () => {
    return (
        <div className='custom-range:px-9 lg:px-[52px] md:px-3'>
            <div className=' md:mt-[25px] mt-4 max-w-[1280px] mx-auto overflow-visible text-center'>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass="md:px-3 px-2"
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1350
                            },
                            items: 8,
                            partialVisibilityGutter: 40,
                            slidesToSlide: 8 // Number of slides to slide at once on desktop
                        },
                        laptop: {
                            breakpoint: { max: 1350, min: 1024 },
                            items: 7,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 7 // Number of slides to slide at once on laptop
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 700 },
                            items: 5,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 5 // Number of slides to slide at once on tablet
                        },
                        mobile: {
                            breakpoint: { max: 700, min: 0 },
                            items: 3.5,
                            partialVisibilityGutter: 20,
                            slidesToSlide: 3 // Number of slides to slide at once on mobile
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    swipeable
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg1} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>sinterklass</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg2} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>baby</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg3} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>kind</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg4} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>dames</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg5} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>heren</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg6} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>wonen en slapen</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg7} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>taart eten en drinken</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg8} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>vrije tijd en kantoor</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg9} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>koken en tafelen</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg10} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>cadeau</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg11} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>mooi en gezond</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg12} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>speelgoed</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg13} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>fotservice</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg14} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>vriendenprijsjes</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg15} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>aanbiedingen an sale</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg16} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>nieuwe collectie</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Category;


const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className='shadow-md md:block hidden'>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
const CustomRightArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.right} className='shadow-md md:block hidden'>
            <IoMdArrowForward className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};


// Custom styles for the arrows
const arrowStyles = {
    left: {
        position: 'absolute',
        top: '37%',
        left: 0,
        // bottom: 0,
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: '1px solid #dfdfdf',
        borderRadius: '100%',
        padding: '16px',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 3,
    },
    right: {
        position: 'absolute',
        top: '37%',
        right: 0,
        // bottom: 0,
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: '1px solid #dfdfdf',
        borderRadius: '100%',
        padding: '16px',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 3,
    },
};