import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";

const MobileTab = () => {

  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      icon: < BsHandbag/>,
      name: "Delivery",
      isActive: false
    },
    {
      id: `night`,
      icon: < IoBeerOutline/>,
      name: "NightLife",
      isActive: false
    },
    {
      id: `dining`,
      icon: < GiMorgueFeet/>,
      name: "Dining Out",
      isActive: false
    }
  ]);

    const {type} = useParams();
    useEffect(() => {
      if(type) {
        const updateTypes = allTypes.map((item) => {
          if(item.id===type) {
            return { ...item, isActive:true};
          }

          return item;
        });
        setAllTypes(updateTypes);
      }
    },[type]);

  return(
    <>
        <div className="lg:hidden bg-white border p-3 fixed bottom-0 z-index:10 w-full flex justify-between items-center text-gray-500">
          {
            allTypes.map((items)=> {
              <div className={
                items.isActive ? "flex pl-4 flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-400" : "flex pl-4 flex-col items-center text-xl"
              }>
              {items.icon}
              <h5>{items.name}</h5>
              </div>
            })
          }
        </div>
    </>
  );
};



const FoodTab = () => {
  return(
    <>
    <div>
    <MobileTab />
    </div>
    </>
  );
};

export default FoodTab;
