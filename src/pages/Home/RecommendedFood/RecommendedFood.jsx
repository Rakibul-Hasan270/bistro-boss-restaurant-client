import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import FoodCard from '../../../components/FoodCard/FoodCard';

const RecommendedFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto'>
            <SectionHeading subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}></SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    foods.map((food, idx) => <FoodCard key={idx} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default RecommendedFood;