import React from "react";


const AdminFirstBoard = () => {
  return (
    <div className="  font-bold text-center">
    
      <div className="flex flex-col md:flex-row justify-between mt-10 mx-auto">
        <div className="w-full md:w-8/12 h-1/2 bg-blue-400 text-black justify-between rounded-md flex mb-6 md:mb-0">
          <div className="border border-gray-400 rounded-md w-full md:w-2/5">
            <h1 className="text-sm font-semibold pl-2 py-2">ACTIVE USERS</h1>
            <p className="text-2xl pl-2 font-bold">400</p>
            <p className="text-sm pl-2 py-4">5.27% since last month</p>
          </div>
          <div className="border border-gray-400 rounded-md w-full md:w-2/5">
            <h1 className="text-sm font-semibold pl-2 py-2">ACTIVE USERS</h1>
            <p className="text-2xl pl-2 font-bold">400</p>
            <p className="text-sm pl-2 py-4">5.27% since last month</p>
          </div>
          
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mx-auto">
        <div className="w-full md:w-8/12 h-1/2 bg-blue-400 text-black justify-between rounded-md flex">
          <div className="border border-gray-400  rounded-md w-full md:w-2/5 mb-6 md:mb-0">
            <h1 className="text-sm font-semibold pl-2 py-2">NEW USERS</h1>
            <p className="text-2xl pl-2 font-bold">400</p>
            <p className="text-sm pl-2 py-4">5.27% since last month</p>
          </div>
          <div className="border border-gray-400 text-black rounded-md w-full md:w-2/5 mb-6 md:mb-0">
            <h1 className="text-sm font-semibold pl-2 py-2">NEW USERS</h1>
            <p className="text-2xl pl-2 font-bold">400</p>
            <p className="text-sm pl-2 py-4">5.27% since last month</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminFirstBoard;
