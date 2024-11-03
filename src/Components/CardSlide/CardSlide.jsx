import cardSlideImg from '../../assets/cardSlide/HEMADD_Header_F5F5F5.svg'
import cardcarosulImg from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-beddengoed.webp'
import cardcarosulImg1 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-bedtextiel 1.webp'
import cardcarosulImg2 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-bloempottenvaasjes.webp'
import cardcarosulImg3 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-kaarsen.webp'
import cardcarosulImg4 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-keukentextiel.webp'
import cardcarosulImg5 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-servies.webp'
import cardcarosulImg6 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-warmtekussens-kruik.webp'
import nextImg6 from '../../assets/shared/Next.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardSlide = () => {
    return (
        <div>
            <div className='max-w-[1350px] bg-[#f5f5f5]  rounded-md mx-auto md:mt-7 mt-20 pt-[38px] pb-32'>
                <div className=" md:max-w-screen-2xl w-11/12 flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between items-center mx-auto">
                    <div className=' lg:w-[47%] md:full w-full lg:pt-0 md:pt-16 pt-0 '>
                        <h2 className=' xl:text-[33px] lg:text-[30px] md:text-[28px] text-[33px] font-extrabold text-[#323232] xl:w-[300px] lg:w-[300px] md:w-[60%] w-full text-justify'>profiteer nu van te gekke acties</h2>
                        <p className=' my-4 text-[#323232] font-hurme'>en scoor je favorieten met dolle doordraai prijzen</p>
                        <button className=' mt-2 border-2 border-[#323232] text-[#323232] hover:text-[#fff] hover:bg-[#323232] font-bold font-hurme text-lg py-3 px-5 rounded-lg w-[63%]'>shop nu</button>
                    </div>
                    <div className='xl:w-[60%] lg:w-[53%] md:w-full w-full'>
                        <img className=' rounded-lg object-cover' src={cardSlideImg} alt="" />
                    </div>
                </div>
            </div>
            {/* carosul part */}
            <div className=''>
                <div className=' md:-mt-20 -mt-116 md:max-w-[1280px] custom-range:px-9 md:px-[10px] mx-auto'>
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
                                boldText={'30%'}
                                bodyText={'korting'}
                                headline={'badtextiel'}
                                titleText={'in 14 kleuren'}
                            />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                boldText={'1+1'}
                                bodyText={'gratis'}
                                headline={'thremo onderGoed'}
                                titleText={'allie combinets zijn mogelijk'}
                                image={cardcarosulImg1} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                boldText={'1+1'}
                                bodyText={'gratis'}
                                headline={'dames basic-t-shirts'}
                                titleText={'alle combinties zijn mogelijk'}
                                image={cardcarosulImg2} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                boldText={'30%'}
                                bodyText={'korting'}
                                headline={'kofibonen  1 kg'}
                                titleText={'alle combinties zijn mogelijk'}
                                image={cardcarosulImg3} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                boldText={'1+1'}
                                bodyText={'korting'}
                                headline={'dameshmend'}
                                titleText={'alle combinties zijn mogelijk'}
                                image={cardcarosulImg4} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                boldText={'30%'}
                                bodyText={'korting'}
                                headline={'damescoltruien'}
                                titleText={'diverse kleuren, S t/m XL'}
                                image={cardcarosulImg5} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                bodyText={'korting'}
                                boldText={'30%'}
                                headline={'heren gebried mode'}
                                titleText={'diverse shorten'}
                                image={cardcarosulImg6} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <NextCardStyle
                                nextText={'bekijk alls'}
                                image={nextImg6} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CardSlide;

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className=' absolute shadow-md md:block hidden'>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import CardStyles from './CardStyles';
import NextCardStyle from '../../Shared/NextCard/NextCardStyle'
const CustomRightArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.right} className=' absolute shadow-md md:block hidden'>
            <IoMdArrowForward className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};


// Custom styles for the arrows
const arrowStyles = {
    left: {
        position: 'absolute',
        top: '45%',
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
        top: '45%',
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