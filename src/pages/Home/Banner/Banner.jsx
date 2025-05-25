import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

const Banner = () => {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <Carousel
            showThumbs={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            stopOnHover={false}
            emulateTouch= {true}
        >
            {images.map((img, index) => (
                <div key={index} className="relative md:h-[700px]">
                    <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f1f] to-[rgba(31,31,31,0.2)] z-10 opacity-80"></div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
