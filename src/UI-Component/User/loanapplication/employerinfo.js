

import React from 'react';
import SelectInput from './selectinput';

const EmploymentInfo = ({ formData, handleChange }) => {
  const employmentStatusOptions = [
    { label: 'Self Employed', value: 'selfEmployed' },
    { label: 'Unemployed', value: 'unemployed' },
    { label: 'Employed', value: 'employed' },
  ];

  const workDurationOptions = [
    { label: '0-2 years', value: '0-2years' },
    { label: '3-5 years', value: '3-5years' },
    { label: '6 years and above', value: '6yearsAbove' },
  ];

  const existingLoanOptions = [
    { label: 'No', value: 'no' },
    { label: 'Yes', value: 'yes' },
  ];

  const loanAmountOptions = [
    { label: '0-500', value: '0-500' },
    { label: '500-1500', value: '500-1500' },
    { label: '1500 to 3000', value: '1500-3000' },
  ];

  return (
    <div className="flex font-bold text-sm flex-col">
      
      <label className="text-black font-bold mb-2">  </label>
        Company Name:
        <input type="text" name="company" value={formData.company} onChange={handleChange} className="border rounded p-2 mb-4" />
    
  
      <label className=" text-black  font-bold mb-2"> </label>
        Job Title:
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange}  className="border  rounded p-2 mb-4"/>
     
      <label className="text-sm text-black  font-bold mb-2"></label>
       Company Address
        <input type="text" name="companyAddress" value={formData.companyAddress} onChange={handleChange}  className="border rounded p-2 mb-4"/>
      
      <label className="text-black  font-bold mb-2"> </label>
        Work Duration:
        <SelectInput name="duration" value={formData.duration} onChange={handleChange}  className="border  rounded p-2 mb-4"  options={workDurationOptions}/>
     
      <label className="text-black  font-bold mb-2"></label>  
        Employment Status
        <SelectInput type="text" name="employmentStatus" value={formData.employmentStatus} onChange={handleChange}  className="border  rounded p-2 mb-4" options={employmentStatusOptions}/>
      

      <label className="font-bold  text-blue-900 mb-2">
        Proof of Funds 
        </label>
        <input
        onChange={handleChange}
        name="proofofFunds"
        type="file"
        id="file"
        accept=" .pdf"
        className="border text-blue-900 rounded p-2 mb-4"/>

<label className="font-bold text-blue-900 mb-2">
  Do you have any existing Loan?:
  </label>
  <SelectInput
name="existingLoan"
value={formData.existingLoan  }
onChange={handleChange}
className=" border text-black rounded p-2 mb-4"
options={existingLoanOptions}/>

<label className=" font-bold  text-blue-900 mb-2">Guarantor's Email</label>
          <input
              type="text"
              name="guarantorEmail"
              value={formData.guarantorEmail}
              onChange={handleChange}
              className="border text-blue-900 rounded p-2 mb-4"
              placeholder="abc@gmail.com"  />
          
          <label className=" font-bold  text-blue-900 mb-2">
    Loan Amount (up to $1500)
  </label>
  <input
              type="text"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              className="border text-blue-900 rounded p-2 mb-4"
             />
    </div>
  );
};
export default EmploymentInfo;

