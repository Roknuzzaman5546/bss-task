import cardSlideImg from '../../assets/cardSlide/cardSlideBanner.png'
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

const CardSlide = () => {
    return (
        <div>
            <div className='w-[98%] mx-auto mt-20 px-2'>
                <div className=" w-full bg-[#ce8dff] flex justify-center px-12 py-36 rounded-3xl mx-auto">
                    <div className=' w-[40%] -mt-16'>
                        <h2 className=' font-sans text-[33px] font-bold text-[#323232] w-[65%] text-justify'>alles om van je huis seen vrolijik thuis te maken</h2>
                        <p className=' text-xs my-4 text-[#323232]'>van klurjki kaarsen lot beddengoed om  ub weg te <br /> dromen</p>
                        <button className=' border-2 border-[#323232] text-[#323232] hover:text-[#fff] hover:bg-[#323232] font-semibold py-3 px-8 rounded-lg'>wontedek wonen & slapen</button>
                    </div>
                    <div className=' -mt-48 w-[65%]'>
                        <img className=' rounded-lg' src={cardSlideImg} alt="" />
                    </div>
                </div>
            </div>
            {/* carosul part */}
            <div className=' -mt-24 md:max-w-screen-2xl w-11/12 mx-auto px-2'>
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
    )
}

export default CardSlide;

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left}>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import CardStyles from './CardStyles';
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