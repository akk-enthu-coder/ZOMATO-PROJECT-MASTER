import React from "react";
import { FaUser } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { ImLocation } from "react-icons/im";

//small screen iphoneX
const MobileNav = () => {
  return(
    <>
    <div className="items-center justify-between flex w-full md:hidden">
    <div className="w-28">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="logo"
        className="w-full h-full"
      />
    </div>
    <div className="flex items-center gap-3">
      <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
      <span className="border p-2 border-gray-300 text-red-500 rounded-full">
       < FaUser/>
      </span>
    </div>
    </div>
    </>
  )
};


//desktop and ipad
const BiggerNav = () => {
  return(
    <>
    <div className="hidden md:flex lg:flex items-center w-full">
            <div className="w-32 m-2 mr-4">
                <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
                />
            </div>
            <div className="flex items-center shadow-md p-3 px-1 rounded-lg mt-1 w-3/5">
                <div className="w-2/5 flex items-center justify-between border-r-2 px-1">
                    <div className="flex">
                       <span className="h-6 w-6 text-zomato-300"><ImLocation className="w-full h-full" /></span>
                       <input type="text" placeholder="  Madurai" className= "outline-none"/>
                    </div>
                    <div className="h-6 w-6 text-gray-700">
                        <MdArrowDropDown className="w-full h-full" />
                    </div>
                </div>
                <div className="w-3/5 flex items-center px-1 text-gray-600">
                    <span className="h-5 w-12 text-gray-400">
                        <RiSearchLine className="w-full h-full"/>
                    </span>
                    <input type="text" placeholder="Search for a restaurant, cuisine or a dish" className="w-full outline-none" />
                </div>
            </div>
            <div className="flex items-center mx-9 text-lg">
                <button className="text-gray-400 hover:text-black px-12">Login</button>
                <button className="text-gray-400 hover:text-black">Sign Up</button>
            </div>
        </div>
    </>
  )
};


const Navbar = () => {
  return (
  <>
   <nav className="p-4 flex bg-white shadow-md items-center md:hidden lg:hidden">
   < MobileNav />
   </nav>

   <nav className="flex pt-3 items-center hidden md:flex lg:flex">
   < BiggerNav />
   </nav>
  </>
)
};

export default Navbar;
