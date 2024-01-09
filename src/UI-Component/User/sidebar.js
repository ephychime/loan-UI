import React from "react";
import { FiHome, FiLogOut } from "react-icons/fi";
import { AiOutlineTransaction } from "react-icons/ai";
import { SiContactlesspayment } from "react-icons/si";
import { GiHelp } from "react-icons/gi";
import { PiGiftThin } from "react-icons/pi";
import { FaUsersGear } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="  text-sm text-black font-bold ">
     
 <nav className="py-16 ml-8">
 <ul className="">
        <li className="flex items-center mb-4">
          <FiHome className="mr-2 w-7" />
          Home
          </li>
          <li className="flex items-center mb-4">
            <AiOutlineTransaction className="mr-2 w-7" />
            Transaction
          </li>
          <li className="flex items-center mb-4">
          <SiContactlesspayment className="mr-2 w-7" />
           Payment
          </li>
          <li className="flex items-center mb-4">
          <GiHelp className="mr-2 w-7" />
            Support
          </li>
          <li className="flex items-center mb-4">
            <PiGiftThin className="mr-2 w-7" />
           Refer
          </li>
          <li className="flex items-center mb-4">
          <FaUsersGear className="mr-2 w-7" />
          Setting
          </li>  
        </ul>
 </nav>
    
      <div className="absolute ml-10 inset-x-0 bottom-10">
      
      
        <nav className="flex  text-center ">
        <ul>
         
          <li className="flex items-center mb-4">
            <FiLogOut className="mr-2 w-7" />
            Logout
          </li>
        </ul>
      </nav>
      
      </div>
    </div>
  );
};

export default Sidebar;
