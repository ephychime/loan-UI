import React from 'react';

const LoanInformation = ({ formData, handleChange }) => {
  return (
    <form className='flex text-sm flex-col'>
        <label className="text-sm text-black font-bold mb-2">Company Name</label>
            <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="border  text-blue-900 rounded p-2 mb-4"
                placeholder="ABC Coporation"
                
                
            />
 

 <label className="text-sm text-black font-bold mb-2">Job Title</label>
            <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="border text-black rounded p-2 mb-4"
                placeholder="Banker"
               
            />
            <label className="text-sm font-bold text-black mb-2">Company's Address</label>
            <input
                type="text"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                className="border rounded  text-blue-900 p-2 mb-4"
                placeholder="123 Main St, Ciyt,Country"
                
            />
  <label className="text-sm font-bold  text-black mb-2">
      Duration of work
    </label>
    <select
  name="workDuration"
  value={formData.workDuration}
  onChange={handleChange}
  className=" border text-black rounded p-2 mb-4"
  
  >
  <option value=" select" >Select </option>
  <option value="someOption">0-2years</option>
  <option value="otherOption">3-5years</option>
  <option value="otherOption">6 years and above</option>
  
  </select>
    <label className="text-sm font-bold text-black mb-2">
    Employment Status
    </label>
  
    <select
  name="employmentStatus"
  value={formData.employmentStatus}
  onChange={handleChange}
  className=" border  text-black rounded p-2 mb-4"
  
  >
  <option value=" select" >Select an option</option>
  <option value="someOption">Self Employed</option>
  <option value="otherOption">Unemployed</option>
  <option value="otherOption">Employed</option>
  </select>

  
 
  
    <label className="text-sm font-bold  text-black mb-2">
          Proof of Funds 
          </label>
          <input
          value={formData.proofofFunds}
          onChange={handleChange}
          name="proofofFunds"
          type="file"
          accept=".pdf, .doc, .docx" 
          className="border text-black rounded p-2 mb-4"/>


<label className="text-sm font-bold text-black mb-2">
    Do you have any existing Loan?:
    </label>
    <select
  name="existingLoan"
  value={formData.existingLoan  }
  onChange={handleChange}
  className=" border text-black rounded p-2 mb-4"

  >
  <option value=" select" >Select an option</option>
  <option value="someOption">No</option>
  <option value="otherOption">Yes</option>

  </select>

  <label className="text-sm font-bold  text-black mb-2">Guarantor's Email</label>
            <input
                type="text"
                name="guarantorEmail"
                value={formData.guarantorEmail}
                onChange={handleChange}
                className="border text-blue-900 rounded p-2 mb-4"
                placeholder="abc@gmail.com"
               
            />
            <label className="text-sm font-bold  text-black mb-2">
      Loan Amount
    </label>
    <select
  name="loanAmount"
  value={formData.loanAmount}
  onChange={handleChange}
  className=" border  text-black rounded p-2 mb-4"
  
  >
  <option value=" select" >Select (CAD)</option>
  <option value="someOption">0-500</option>
  <option value="otherOption">500-1500</option>
  <option value="otherOption">1500 to 3000</option>
  
  </select>
  
    </form>
      
  );
};

export default LoanInformation;