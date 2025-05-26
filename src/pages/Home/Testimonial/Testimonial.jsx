import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { GiConvergenceTarget } from "react-icons/gi";

const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto mb-10'>
            <SectionHeading subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'}></SectionHeading>
            <div className='mt-8'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map((info, idx) =>
                            <SwiperSlide key={idx}>
                                <div className='text-center space-y-10'>
                                    <Rating className='mx-auto' style={{ maxWidth: 180 }} value={info?.rating} readOnly />
                                    <GiConvergenceTarget className='text-8xl mx-auto' />
                                    <p>{info?.details}</p>
                                    <h3 className='text-2xl text-orange-400'>{info?.name}</h3>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;