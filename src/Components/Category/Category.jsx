import categoryImg1 from '../../assets/category/HEMA-2024-inspiratie-800x800-wk3738-jassen2.webp';
import categoryImg2 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk41-42-dbo-nieuw.webp';
import categoryImg3 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3940-jongenmeisje.webp';
import categoryImg4 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.webp';
import categoryImg5 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.webp';
import categoryImg6 from '../../assets/category/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.webp';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

const Category = () => {

    return (
        <div className='md:max-w-screen-2xl w-11/12 mx-auto mt-2.5 px-1 overflow-hidden'>
            <div className=' flex justify-center items-center gap-2'>
                {/* img 1 */}
                <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                    <img
                        src={categoryImg1}
                        className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden'
                        alt=""
                    />
                </div>
                {/* img 2 */}
                <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                    <img
                        src={categoryImg2}
                        className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden'
                        alt=""
                    />
                </div>
                {/* img 3 */}
                <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                    <img
                        src={categoryImg3}
                        className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden'
                        alt=""
                    />
                </div>
                {/* img 4 */}
                <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                    <img
                        src={categoryImg4}
                        className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden'
                        alt=""
                    />
                </div>
                {/* img 5 */}
                <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                    <img
                        src={categoryImg5}
                        className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden'
                        alt=""
                    />
                </div>
                {/* img 6 */}
                <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                    <img
                        src={categoryImg6}
                        className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden'
                        alt=""
                    />
                </div>
            </div>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                slidesPerView={6}
                centeredSlides={true}
                spaceBetween={10}
                pagination={{
                    type: 'custom',
                }}
                navigation={true}
                virtual
            >

                <SwiperSlide>
                    <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                        <img
                            src={categoryImg1}
                            className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg'
                            alt=""
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                        <img
                            src={categoryImg2}
                            className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg'
                            alt=""
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                        <img
                            src={categoryImg3}
                            className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg'
                            alt=""
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                        <img
                            src={categoryImg4}
                            className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg'
                            alt=""
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                        <img
                            src={categoryImg5}
                            className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg'
                            alt=""
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="overflow-hidden rounded-full h-24 w-24 cursor-pointer">
                        <img
                            src={categoryImg6}
                            className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg'
                            alt=""
                        />
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Category;
