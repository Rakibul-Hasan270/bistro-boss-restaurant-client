import React from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className='max-w-6xl mx-auto pt-5 md:pt-10'>
                <SectionHeading heading={'Featured Item'} subHeading={'Check it out'}></SectionHeading>
                <div className='md:flex items-center justify-center gap-5 mt-3 lg:pt-12 lg:pb-12 lg:px-32'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='text-center md:text-start mt-3'>
                        {/* <p>Aug 20,2028</p> */}
                        <p>{new Date().toLocaleDateString()}</p>
                        <p className='uppercase'>where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam doloremque deleniti reprehenderit voluptate debitis iusto nostrum quia voluptas quam hic perspiciatis odit incidunt vero aut, adipisci mollitia cupiditate dolorem earum eaque. Aliquam perspiciatis reiciendis deserunt voluptatum earum asperiores ipsa iste, deleniti doloribus optio maxime officia cupiditate nostrum? Ratione, fugiat.</p>
                        <button className='btn btn-outline border-0 border-b-4 mt-2'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;