import React from 'react';

const FoodCard = ({ food }) => {
    const { image, name, recipe } = food;
    return (
        <div className="card bg-base-100 shadow-2xl md:border">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;