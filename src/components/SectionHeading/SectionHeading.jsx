import React from 'react';

const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className='text-center space-y-3 md:w-3/12 mx-auto'>
            <p className='text-yellow-500'>--- {subHeading} ---</p>
            <h3 className='text-3xl border-y-2 p-3'>{heading}</h3>
        </div>
    );
};

export default SectionHeading;