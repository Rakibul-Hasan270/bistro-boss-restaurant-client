import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import MenuCard from '../../shared/MenuCard/MenuCard';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular');
                setMenu(popularMenu);
            })
    }, [])

    return (
        <section className='max-w-6xl mx-auto space-y-8'>
            <SectionHeading heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionHeading>
            <div className='grid md:grid-cols-2 gap-4 space-y-5'>
                {
                    menu.map((info, idx) => <MenuCard key={idx} info={info}></MenuCard>)
                }
            </div>
           <div className='flex justify-center'> <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button></div>
        </section>
    );
};

export default PopularMenu;