import React from 'react';

const GuarantorInfo = ({ formData, handleChange }) => {
  return (
   
    <div className="flex flex-col">
    

    <label className="text-sm text-gray-600 mb-2">Guarantor's Email</label>
            <input
                type="text"
                name="gurantorEmail"
                value={formData.guarantorEmail}
                onChange={handleChange}
                className="border rounded p-2 mb-4"
                placeholder="abc@gmail.com"
                required
            />

<label className="text-sm text-gray-600 mb-2">Relationship with Guarantor</label>
            <input
                type="text"
                name="gurantorRelationship"
                value={formData.guarantorRelationship}
                onChange={handleChange}
                className="border rounded p-2 mb-4"
                placeholder="ABC Coporation"
                required
            />


       <label className="text-sm text-gray-600 mb-2">
        Phone Number
      </label>
      <input
        type="tel"
        name="guarantorNumber"
        value={formData.guarantorNumber}
        onChange={handleChange}
        className="border rounded p-2 mb-4"
        placeholder="123-456-7890"
     required />
    
      <label className="text-sm text-black font-bold  mb-2">
        Relationship with Guarantor
      </label>
      <input
        name="text"
        value={formData.address}
        onChange={handleChange}
        rows="3"
        className="tborder rounded p-2 mb-4"
        placeholder=".."
      required/> */
  

  
  

  </div>
  );
};

export default GuarantorInfo;