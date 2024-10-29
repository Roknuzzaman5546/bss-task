import FeestdagenStyle from './FeestdagenStyle';
import cardcarosulImg from '../../assets/feestdagen/HEMA-2024-homepage-inspiratie-800x800-wk41-sint-takkieensiepie.webp'
import cardcarosulImg1 from '../../assets/feestdagen/HEMA-2024-homepage-inspiratie-800x800-wk41-sint-verkleden.webp'
import cardcarosulImg2 from '../../assets/feestdagen/HEMA-2024-homepage-inspiratie-800x800-wk41-42-kerst.webp'
import cardcarosulImg3 from '../../assets/feestdagen/HEMA-2024-homepage-inspiratie-800x800-wk41-42-sint-letters-tony.webp'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Feestdagen = () => {
    return (
        <div className=' '>
            <div className="md:max-w-[1280px] custom-range:px-9 md:px-3 mx-auto mt-20">
                {/* heading */}
                <div className=" flex justify-between items-center px-3">
                    <div>
                        <h2 className=" font-hurme font-bold md:text-3xl text-2xl text-[#3a3a3a]">maak je klaar voor de feestdagen</h2>
                    </div>
                </div>
                <div className=' mt-5 '>
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
                        itemClass="md:px-2 px-[6px]"
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
                                items: 3,
                                partialVisibilityGutter: 40,
                                slidesToSlide: 3 
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1.2,
                                partialVisibilityGutter: 30,
                                slidesToSlide: 1
                            },
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
                            <FeestdagenStyle
                                bgColor={'#007f63'}
                                image={cardcarosulImg} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <FeestdagenStyle
                                bgColor={'#da1f73'}
                                image={cardcarosulImg1} />                    </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <FeestdagenStyle
                                bgColor='#b68a52'
                                image={cardcarosulImg2} />                    </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <FeestdagenStyle
                                bgColor='#007f63'
                                image={cardcarosulImg3} />                    </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Feestdagen;

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className=' absolute shadow-md md:block hidden'>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
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