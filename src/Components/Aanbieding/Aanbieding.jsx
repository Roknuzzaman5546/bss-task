import cardcarosulImg from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-beddengoed.webp'
import cardcarosulImg1 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-bedtextiel 1.webp'
import cardcarosulImg2 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-bloempottenvaasjes.webp'
import cardcarosulImg3 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-kaarsen.webp'
import cardcarosulImg4 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-keukentextiel.webp'
import cardcarosulImg5 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-servies.webp'
import cardcarosulImg6 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-warmtekussens-kruik.webp'
import cardcarosulImg7 from '../../assets/cardSlide/HEMA-2024-promoslider-600x750-wk41-42-woonacces1.webp'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoArrowForward } from "react-icons/io5";
import './Aanbiending.css'
import CardStyles from "../CardSlide/CardStyles";

const Aanbieding = () => {
    return (
        <div className="md:max-w-screen-2xl w-11/12 mx-auto mt-20">
            {/* heading */}
            <div className=" flex justify-between items-center px-2">
                <div>
                    <h2 className=" font-sans font-bold text-2xl text-[#3a3a3a]">nu in de aanbieding</h2>
                    <p className=" text-xs mt-2">geldig t/m 20 oktober</p>
                </div>
                <div className=" flex justify-center items-center gap-2 font-sans">
                    <a className="navAfter relative text-xs font-semibold cursor-pointer">bekijk alles</a>
                    <IoArrowForward></IoArrowForward>
                </div>
            </div>
            <div className=' mt-5'>
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
                    itemClass=""
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
                                min: 1024
                            },
                            items: 4,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1.5,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={3}
                    swipeable

                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    <div className=' flex flex-col items-center justify-center'>
                        <CardStyles
                            image={cardcarosulImg}
                        />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <CardStyles
                            image={cardcarosulImg1} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <CardStyles
                            image={cardcarosulImg2} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <CardStyles
                            image={cardcarosulImg3} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <CardStyles
                            image={cardcarosulImg4} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <CardStyles
                            image={cardcarosulImg5} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <CardStyles
                            image={cardcarosulImg6} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <CardStyles
                            image={cardcarosulImg7} />
                        <p className=' text-[#323232] text-xs font-sans font-semibold mt-4'>This is rokon</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Aanbieding;

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left}>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
const CustomRightArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.right}>
            <IoMdArrowForward className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};


// Custom styles for the arrows
const arrowStyles = {
    left: {
        position: 'absolute',
        top: '50%',
        left: '-5px',
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: '1px solid #dfdfdf',
        borderRadius: '100%',
        overflow: 'visible',
        padding: '17px',
        boxShadow: '0px 8px 16px 0px rgba(50,50,50,0.16)',
        fontSize: '30px',
        cursor: 'pointer',
    },
    right: {
        position: 'absolute',
        top: '50%',
        right: '-8px',
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: '1px solid #dfdfdf',
        borderRadius: '100%',
        overflow: 'visible',
        padding: '17px',
        boxShadow: '0px 8px 16px 0px rgba(50,50,50,0.16)',
        fontSize: '30px', // Customize size
        cursor: 'pointer',
    },
};