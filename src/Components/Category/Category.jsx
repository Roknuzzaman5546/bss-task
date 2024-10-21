import categoryImg1 from '../../assets/category/HEMA-2024-inspiratie-800x800-wk3738-jassen2.webp';
import categoryImg2 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk41-42-dbo-nieuw.webp';
import categoryImg3 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3940-jongenmeisje.webp';
import categoryImg4 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.webp';
import categoryImg5 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.webp';
import categoryImg6 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.webp';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import WithStyles from './WithStyles';

const Category = () => {
    return (
        <div className='md:max-w-screen-2xl w-11/12 mx-auto mt-0.5 px-1'>
            <div className=' mt-7 overflow-visible'>
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
                    itemClass="px-3"
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000, // for large desktop devices
                                min: 1440 // or whatever large desktop starts at
                            },
                            items: 8,
                            partialVisibilityGutter: 40
                        },
                        laptop: {
                            breakpoint: {
                                max: 1440, // for laptop
                                min: 1024
                            },
                            items: 7,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024, // for tablet
                                min: 700
                            },
                            items: 5,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {
                                max: 700, // for mobile
                                min: 0
                            },
                            items: 3.5, // for 3.5 items visible
                            partialVisibilityGutter: 20
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={7}
                    swipeable

                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg1}
                        />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg2} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg3} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg4} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg5} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg6} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg1} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg2} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg3} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg4} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg5} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={categoryImg6} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Category;


const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className=' absolute shadow-md'>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
const CustomRightArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.right} className=' absolute shadow-md'>
            <IoMdArrowForward className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};


// Custom styles for the arrows
const arrowStyles = {
    left: {
        position: 'absolute',
        top: '40%',
        left: '0', 
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: '1px solid #dfdfdf',
        borderRadius: '100%',
        padding: '17px',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 2,
    },
    right: {
        position: 'absolute',
        top: '40%',
        right: '0', 
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: '1px solid #dfdfdf',
        borderRadius: '100%',
        padding: '17px',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 3,
    },
};
