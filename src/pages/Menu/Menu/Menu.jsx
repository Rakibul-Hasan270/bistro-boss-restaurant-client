import React from 'react';
import Cover from '../../shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div className='mt-14 md:mt-0'>
            <Cover img={img} heading={'OUR MENU'} subHeading={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={img} heading={'OUR MENU'} subHeading={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
            
            <Cover img={img} heading={'OUR MENU'} subHeading={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;