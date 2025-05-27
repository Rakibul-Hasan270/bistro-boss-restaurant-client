import React from 'react';
import MenuCard from '../MenuCard/MenuCard';
import Cover from '../Cover/Cover';

const MenuCategory = ({ item, coverImg, title, subTitle }) => {

    return (
        <div>
            {title && <Cover coverImg={coverImg} heading={title} subHeading={subTitle}></Cover>}
            <div className='grid md:grid-cols-2 gap-4 space-y-5'>
                {
                    item.map((info, idx) => <MenuCard key={idx} info={info}></MenuCard>)
                }
            </div>
            <div className='flex justify-center'><button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button></div>
        </div>
    );
};

export default MenuCategory;