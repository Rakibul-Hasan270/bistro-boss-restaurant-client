import React from 'react';

const MenuCard = ({ info }) => {
    const { image, recipe, name, price, category } = info;

    return (
        <div className='max-w-6xl mx-auto md:w-[600px] flex gap-4 shadow-xl'>
            <img className='w-28 rounded-b-full rounded-tr-full' src={image} alt="" />
            <div>
                <p className='uppercase text-xl'>{name} ------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
            <p className='text-yellow-500'>{category}</p>
        </div>
    );
};

export default MenuCard;