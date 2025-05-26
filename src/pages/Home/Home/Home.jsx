import React from 'react';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import BistroComment from '../BistroComment/BistroComment';
import CallOnly from '../Callonly/CallOnly';
import RecommendedFood from '../RecommendedFood/RecommendedFood';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='space-y-5 md:space-y-18'>
            <Banner></Banner>
            <Slider></Slider>
            <BistroComment></BistroComment>
            <PopularMenu></PopularMenu>
            <CallOnly></CallOnly>
            <RecommendedFood></RecommendedFood>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;