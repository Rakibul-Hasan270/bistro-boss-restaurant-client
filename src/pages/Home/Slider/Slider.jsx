import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-6xl mx-auto"
            >
                <SwiperSlide>
                    <img src={img1} alt="Slide 1" className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Slide 1" className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Slide 1" className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Slide 1" className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Slide 1" className="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;