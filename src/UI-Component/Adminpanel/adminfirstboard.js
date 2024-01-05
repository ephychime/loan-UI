
import React from "react";
import StatStyle from "./statbox";

const AdminFirstBoard = () => {

  const adminStat = "flex flex-col sm:flex-row justify-between mt-10 mx-auto"

  return (
    <div className="font-bold text-center">
      <div className= {adminStat}>
        <div className="w-full lg:w-8/12 h-1/2 bg-blue-400 text-black justify-between rounded-md flex mb-6 lg:mb-0">
          <StatStyle title="ACTIVE USERS" value="400" subtitle="5.27% since last month" />
          <StatStyle title="ACTIVE USERS" value="400" subtitle="5.27% since last month" />
        </div>
      </div>

      <div className={adminStat}>
        <div className="w-full lg:w-8/12 h-1/2 bg-blue-400 text-black justify-between rounded-md flex">
          <StatStyle title="NEW USERS" value="400" subtitle="5.27% since last month" />
          <StatStyle title="NEW USERS" value="400" subtitle="5.27% since last month" />
        </div>
      </div>
    </div>
  );
};

export default AdminFirstBoard;
