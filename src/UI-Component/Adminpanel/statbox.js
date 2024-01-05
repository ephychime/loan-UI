
import React from "react";

const StatStyle = ({ title, value, subtitle }) => (
  <div className="border border-gray-400 rounded-md w-full lg:w-2/5 mb-6 lg:mb-0">
    <h1 className="text-sm font-semibold pl-2 py-2">{title}</h1>
    <p className="text-2xl pl-2 font-bold">{value}</p>
    <p className="text-sm pl-2 py-4">{subtitle}</p>
  </div>
);

export default StatStyle;
