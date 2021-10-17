import React from 'react'

import { AiFillStar } from "react-icons/ai";


const DeliveryFoodCard = () => {
    return (
        <>
            <div className="bg-white rounded-md shadow-lg mb-4">
                <div className='w-full h-30'>
                    <img
                    src="https://b.zmtcdn.com/data/pictures/3/19281593/f2f33ff4d76779e2e2a1769ea4c5f47f_o2_featured_v2.jpg"
                    alt="Burger"
                    className="w-full h-full rounded-t-md"
                    />
                </div>
                <div className="flex items-center justify-between pr-2">
                    <h3 className="p-4 pb-0 my-1 text-sm text-lg text-bold">Mithai waala</h3>
                    <h3 className="pr-3 flex items-center pl-3 border bg-green-700 border-green-700 rounded-lg items-center text-white text-bold">5.4< AiFillStar/></h3>
                </div>
                <div className="flex text-sm justify-between">
                  <h5 className="pl-4 my-1 text-sm text-gray-500">Bakery, Dessert, Shakes, Cake</h5>
                  <h5 className="pr-3 text-gray-500">250/- one</h5>
                </div>
             </div>
        </>
    );
};


export default DeliveryFoodCard;
