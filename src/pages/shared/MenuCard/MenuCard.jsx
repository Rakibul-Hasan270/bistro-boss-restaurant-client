import React from 'react';

const MenuCard = ({ info }) => {
    const { image, recipe, name, price, } = info;

    return (
        <div className='flex gap-4 shadow-xl'>
            <img className='w-28 rounded-b-full rounded-tr-full' src={image} alt="" />
            <div>
                <p className='uppercase text-xl'>{name} ------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuCard;