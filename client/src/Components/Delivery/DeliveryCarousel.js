import React from 'react';

//Icons
import { RiSearchLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

//Components
import DeliveryFoodCategory from './DeliveryFoodCategory';
import {DeliveryFoodCategory2, DeliveryFoodCategory3 , DeliveryFoodCategory4, DeliveryFoodCategory5, DeliveryFoodCategory6} from './DeliveryFoodCategory2';
import DeliveryFoodCard from "./DeliveryFoodCard";

const DeliveryCorousal = () => {
    return (
        <>
        <div className="md:hidden">
            <div className="flex items-center justify-between border-b-2 pb-2 border-gray-100">
                <div className="flex gap-1 text-gray-500 px-2">
                    <span className="h-6 w-6 text-zomato-300"><MdLocationOn className="w-full h-full" /></span>
                    <input type="text" placeholder="Madurai" className="outline-none"/>
                </div>
                <div className="h-10 w-10 text-gray-600 bg-gray-50 border-2 border-gray-100 flex items-center justify-center rounded-full">
                    <RiSearchLine className="w-5 h-5"/>
                </div>
            </div>
           <h1 className="text-xl font-semibold my-3">Eat what makes you happy</h1>
           <div className="flex flex-wrap justify-evenly gap-2 mb-20">
            <DeliveryFoodCategory />
            <DeliveryFoodCategory2 />
            <DeliveryFoodCategory3 />
            <DeliveryFoodCategory4 />
            <DeliveryFoodCategory5 />
            <DeliveryFoodCategory6 />
            <span className="pb-4">
            <img
            src="https://b.zmtcdn.com/web/assets/8d13109e07c5d49d54427f044d7b7d281620042855.png?output-format=webp"
            alt="offer"/>
            </span>
            <h1 className="text-xl font-semibold my-3">Delivery Restaurants</h1>
            <DeliveryFoodCard />
           </div>

        </div>
        </>
    )
};

export default DeliveryCorousal;
