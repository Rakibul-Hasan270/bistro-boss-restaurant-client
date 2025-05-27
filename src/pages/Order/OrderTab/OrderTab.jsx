import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({ item }) => {

    return (
        <div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    item.map(info => <FoodCard key={info._id} food={info}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;