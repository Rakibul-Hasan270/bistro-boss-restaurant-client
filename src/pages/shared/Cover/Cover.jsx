import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ coverImg, heading, subHeading }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={coverImg}
            bgImageAlt="the menu"
            strength={-200}
            className='mb-8'
        >
            <div
                className="hero h-[300px] md:h-[700px]">
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-bold">{heading}</h1>
                        <p className="mb-5">
                            {subHeading}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;