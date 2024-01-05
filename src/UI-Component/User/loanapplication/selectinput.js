
import React from 'react';

const SelectInput = ({ name, value, onChange, options }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className="border font-light text-black rounded p-2 mb-4"
  >
    <option value="">Select an option</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default SelectInput;
