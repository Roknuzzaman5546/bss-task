import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import HemaStyles from './HemaStyles'
import Carousel from 'react-multi-carousel'
import cardcarosulImg from '../../assets/hema/HEMA-2024-homepage-carrousel-600x750-wk41-hemapas-logo.webp'
import cardcarosulImg1 from '../../assets/hema/HEMA-2024-promoslider-600x750-hemapas-vouchers-10pkorting-blauw-logo-NL.webp'
import cardcarosulImg2 from '../../assets/hema/HEMA-2024-promoslider-600x750-wk40-hemapas-pinkribbon.webp'
import cardcarosulImg3 from '../../assets/hema/HEMA-2024-promoslider-600x750-hemapas-vouchers-5ekorting-groen-logo-NL.webp'
import cardcarosulImg4 from '../../assets/hema/HEMA-2024-promoslider-600x750-wk40-hemapas-watjes.webp'
import cardcarosulImg5 from '../../assets/hema/HEMA-2024-promoslider-600x750-hemapas-vouchers-2ekorting-oranje-logo-NL.webp'
import cardcarosulImg6 from '../../assets/hema/HEMA-2024-promoslider-600x750-wk40-hemapas-shopper.webp'
import loveImg50 from '../../assets/hema/50.svg'
import loveImg75 from '../../assets/hema/75.svg'
import loveImg100 from '../../assets/hema/100.svg'
import loveImg150 from '../../assets/hema/150.svg'
import loveImg250 from '../../assets/hema/250.svg'
import NextCardStyle from '../../Shared/NextCard/NextCardStyle';
import nextImg from '../../assets/shared/Next.jpg'

const Hema = () => {
    return (
        <div className="md:max-w-[1280px] custom-range:px-9 md:px-[10px] mx-auto mt-20">
            {/* heading */}
            <div className=" flex justify-between items-center px-3">
                <div>
                    <h2 className=" font-hurme font-bold md:text-3xl text-2xl text-[#3a3a3a] text-ellipsis">spaar voor leuke {"extra's"}</h2>
                    <p className=" text-xs mt-2">wissel je punten in voor gratis producten</p>
                </div>
                <div className=" md:flex hidden justify-center items-center gap-2 font-sans">
                    <a className="hover:border-b-[1.5px] border-black text-xs font-semibold cursor-pointer">bekijk alles</a>
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
                    itemClass="px-2.5"
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
                        <HemaStyles
                            loveImg={loveImg150}
                            image={cardcarosulImg}
                            headline={'badtextiel'}
                        />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <HemaStyles
                            loveImg={loveImg100}
                            headline={'thremo onderGoed'}
                            image={cardcarosulImg1} />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <HemaStyles
                            loveImg={loveImg50}
                            headline={'dames basic-t-shirts'}
                            image={cardcarosulImg2} />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <HemaStyles
                            loveImg={loveImg75}
                            headline={'kofibonen  1 kg'}
                            image={cardcarosulImg3} />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <HemaStyles
                            loveImg={loveImg50}
                            headline={'dameshmend'}
                            image={cardcarosulImg4} />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <HemaStyles
                            loveImg={loveImg250}
                            headline={'damescoltruien'}
                            image={cardcarosulImg5} />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <HemaStyles
                            loveImg={loveImg100}
                            headline={'heren gebried mode'}
                            image={cardcarosulImg6} />
                    </div><div className=' flex flex-col items-center justify-center'>
                        <NextCardStyle
                            nextText={'bekijk alls'}
                            image={nextImg} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Hema;
const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className=' absolute shadow-md md:block hidden'>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};
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