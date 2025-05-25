import React from 'react';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div className='space-y-18'>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;