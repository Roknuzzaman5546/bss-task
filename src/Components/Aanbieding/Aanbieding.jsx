import cardcarosulImg from '../../assets/aanbieging/HEMA-2024-promoslider-600x750-wk43-44-wanddeco.webp'
import cardcarosulImg1 from '../../assets/aanbieging/HEMA-2024-promoslider-600x750-wk43-44-fotocadeaus.webp'
import cardcarosulImg2 from '../../assets/aanbieging/HEMA-2024-promoslider-600x750-wk43-44-fotoboeken.webp'
import cardcarosulImg3 from '../../assets/aanbieging/HEMA-2024-promoslider-600x750-wk43-44-afdrukken.webp'
import nextImg from '../../assets/shared/Next.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoArrowForward } from "react-icons/io5";
import './Aanbiending.css'
import CardStyles from "../CardSlide/CardStyles";

const Aanbieding = () => {
    return (
        <div className='' >
            <div className=" md:max-w-[1280px] max-w-full mx-auto  mt-20 ">
                {/* heading */}
                <div className=" flex justify-between items-center custom-range:px-12 md:px-[16px]">
                    <div>
                        <h2 className=" font-sans font-bold text-3xl text-[#3a3a3a]">aanbiedingen bij HEMA fotoservice</h2>
                    </div>
                    <div className=" flex justify-center items-center gap-2 font-sans">
                        <a className="hover:border-b-[1.5px] border-black text-xs font-semibold cursor-pointer md:flex hidden">bekijk alles</a>
                        <IoArrowForward></IoArrowForward>
                    </div>
                </div>
                <div className=' mt-8 custom-range:px-9 md:px-[10px]'>
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
                                boldText={'30%'}
                                bodyText={'korting'}
                                headline={'wanddecoratie'}
                                image={cardcarosulImg}
                            />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                boldText={'30%'}
                                bodyText={'korting'}
                                headline={'fotocadeous'}
                                image={cardcarosulImg1} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                boldText={'30%'}
                                bodyText={'korting'}
                                headline={'fotoboeken'}
                                image={cardcarosulImg2} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <CardStyles
                                boldText={'30%'}
                                bodyText={'korting'}
                                headline={"foto's afdrukken"}
                                image={cardcarosulImg3} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <NextCardStyle
                                nextText={'bekijk alls van HEMA foto'}
                                image={nextImg} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Aanbieding;

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className=' absolute shadow-md md:block hidden'>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import NextCardStyle from '../../Shared/NextCard/NextCardStyle';
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