import Carousel from "react-multi-carousel";
import CardStyles from "../CardSlide/CardStyles";
import "react-multi-carousel/lib/styles.css";
import cardcarosulImg from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-beddengoed.webp'
import cardcarosulImg1 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-bedtextiel 1.webp'
import cardcarosulImg2 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-bloempottenvaasjes.webp'
import cardcarosulImg3 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-kaarsen.webp'
import cardcarosulImg4 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-keukentextiel.webp'
import cardcarosulImg5 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-servies.webp'
import cardcarosulImg6 from '../../assets/cardSlide/HEMA-2024-homepage-carrousel-600x750-wk41-42-warmtekussens-kruik.webp'
import nextImg from '../../assets/shared/Next.jpg'

const MachineProduct = () => {
    return (
        <div>
            <div className='max-w-[1350px] bg-[#9c1aff] rounded-3xl mx-auto mt-10 '>
                <div className=" md:max-w-screen-2xl w-11/12 flex md:flex-row flex-col justify-between md:items-center items-start gap-2 xl:pb-28 lg:pb-20 md:pb-20 pb-20 md:pt-14 pt-8 mx-auto">
                    <div>
                        <h2 className=' font-sans font-bold text-[#ffff] text-justify'>Ontdek onze vriendenprijsjes</h2>
                        <p className=' text-xs md:my-3 ny-1 text-[#ffff]'>HEMA biedt veel, maar neilt alles ontvang de deste deels beaz <br /> onze behaviour bedrijiven</p>
                    </div>
                    <div className=" flex justify-center items-center gap-2 font-sans">
                        <a className="hover:border-b border-white overflow-hidden text-xs text-white font-semibold cursor-pointer">bekijk alles</a>
                        <IoArrowForward className=" text-white"></IoArrowForward>
                    </div>
                </div>
            </div>
            {/* carosul part */}
            <div className="custom-range:px-9">
                <div className=' -mt-16 md:max-w-[1280px] mx-auto'>
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
                                bodyText={'korting'}
                                boldText={'30%'}
                                headline={'heren gebried mode'}
                                titleText={'diverse shorten'}
                                image={cardcarosulImg6} />
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
                                headline={'kofibonen  1 kg'}
                                titleText={'alle combinties zijn mogelijk'}
                                image={cardcarosulImg3} />
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
                                boldText={'1+1'}
                                bodyText={'gratis'}
                                headline={'thremo onderGoed'}
                                titleText={'allie combinets zijn mogelijk'}
                                image={cardcarosulImg1} />
                        </div>
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
                            <NextCardStyle
                                nextText={'bekijk alls bekijk'}
                                image={nextImg} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default MachineProduct;

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className=' absolute shadow-md md:block hidden'>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import NextCardStyle from "../../Shared/NextCard/NextCardStyle";
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