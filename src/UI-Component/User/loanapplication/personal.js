


import React from 'react';
import SelectInput from './selectinput';

const PersonalInfo = ({ formData, handleChange }) => {
  const meansOfIdentificationOptions = [
    { label: 'Select', value: '' },
    { label: 'Drivers Licence', value: 'driversLicence' },
    { label: 'International Passport', value: 'internationalPassport' },
  ];

  const loanTermOptions = [
    { label: 'Select', value: '' },
    { label: '0-6 months', value: '0-6months' },
    { label: '6 months to 1 year', value: '6months-1year' },
    { label: '2 years', value: '2years' },
  ];

  return (
    <div className='flex font-bold text-sm flex-col'>
      

      <label className="  text-black  font-bold mb-2" >   </label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border  rounded p-2 mb-4" />
   
     
      <label className=" text-black  font-bold mb-2"> </label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="abc@gmail.com"   className="border  rounded p-2 mb-4"/>
     
  
      <label className=" text-black  font-bold mb-2"></label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main Street, City, Country "className="border rounded p-2 mb-4" />
      
      <label className="  text-black font-bold mb-2" > </label>
      Phone Number
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border  rounded p-2 mb-4" />
     

      <label className=" text-black  text-blue-900 font-bold mb-2">Means of Identification:</label>
      <SelectInput
        name="meansofidentification"
        value={formData.meansofidentification}
        onChange={handleChange}
        options={meansOfIdentificationOptions}
      />

      <label htmlFor="file" className=" text-blue-900 font-bold mb-2">Proof of Identification</label>
      <input
        type="file"
        id="file"
        name="proofofIdentification"
        onChange={handleChange}
        className="border text-blue-900 rounded p-2 mb-4"
      />

      <label className=" text-blue-900 font-bold mb-2">Guarantor's Name</label>
      <input
        type="text"
        name="guarantorName"
        value={formData.guarantorName}
        onChange={handleChange}
        className="border  rounded p-2 mb-4"
      />

      <label className=" text-blue-900 font-bold mb-2">Loan Term</label>
      <SelectInput
        name="loanTerm"
        value={formData.loanTerm}
        onChange={handleChange}
        options={loanTermOptions}
      />

      <label className=" text-blue-900 font-bold mb-2">Relationship With Guarantor</label>
      <input
        type="text"
        name="guarantorRelationship"
        value={formData.guarantorRelationship}
        onChange={handleChange}
        className="border  rounded p-2 mb-4"
      />
    </div>
  );
};

export default PersonalInfo;
