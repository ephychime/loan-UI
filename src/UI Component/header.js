import React, { useState } from "react";
import SignIn from "./Login/login";
import AdminDashboard from "./Adminpanel/dashboard";
import UserDashboard from "./User/userdashboard";
import PageBody from "./pagebody";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [activeButton, setActiveButton] = useState(""); // to track which button is active
  const [userType, setUserType] = useState(""); // to track whether admin or user



  const handleUserClick = () => {
    setShowLogin(true);
    
  };

  return (
    <div className=" text-blue-900">
      <nav className="container  mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div>
          <span className="text-lg font-semibold logo">Quick Collect.co</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex  font-bold items-center space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

     
        <div className="flex font-bold items-center space-x-4">
          
          <button 
            onClick={handleUserClick}
        >
            LOG IN
          </button>
        </div>
      </nav>

      {/* Show Login Component if needed */}
      {showLogin && (
        <div>
          <SignIn userType={userType} />
        </div>
      )}
     
    </div>
   
  );
};

export default Navbar;
