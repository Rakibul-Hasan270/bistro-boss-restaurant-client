import React from 'react';
import Cover from '../../shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import img1 from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import MenuCategory from '../../shared/MenuCategory/MenuCategory';
import useItem from '../../../hooks/useItem';


const Menu = () => {
    const [loading, offered, desserts, pizzas, salads, soups] = useItem();
    // console.log(loading, offered);

    if (loading) return <p className='text-center mt-14'>loading...</p>
    return (
        <div className='mt-14 md:mt-0'>
            <Cover coverImg={img} heading={'OUR MENU'} subHeading={'Would you like to try a dish?'}></Cover>
            <SectionHeading heading="TODAY'S OFFER" subHeading="Don't miss"></SectionHeading>


            <div className='space-y-12 mt-10'>
                <MenuCategory item={offered}></MenuCategory>
                
                <MenuCategory item={desserts} coverImg={img1} title='DESSERTS' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>

                <MenuCategory item={pizzas} coverImg={pizza} title='PIZZA' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>

                <MenuCategory item={salads} coverImg={salad} title='SALAd' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>

                <MenuCategory item={soups} coverImg={soup} title='SOUP' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;