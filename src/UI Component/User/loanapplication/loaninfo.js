import React from 'react';

const LoanInfo = ({ formData, handleChange }) => {
  return (
    <form className='flex flex-col'>
 
  
    <label className="text-sm text-gray-600 mb-2">
    Loan Term (in months):
    </label>
  
    <select
  name="loan term"
  value={formData.loanTerm}
  onChange={handleChange}
  className=" border rounded p-2 mb-4"
  required
  >
  <option value=" select" >Select an option</option>
  <option value="someOption">0-6 months</option>
  <option value="otherOption">6 months to 1 years</option>
  <option value="otherOption">2 years</option>
  </select>

  <label className="text-sm text-gray-600 mb-2">
          Proof of Funds 
          </label>
          <input
          type="file"
          accept=".pdf, .doc, .docx" 
      
          className="border rounded p-2 mb-4"
        />
  <label className="text-sm text-gray-600 mb-2">
    Do you have any existing Loan?:
    </label>
  
    <select
  name="existing loan"
  value={formData.existingLoan  }
  onChange={handleChange}
  className=" border rounded p-2 mb-4"
  required
  >
  <option value=" select" >Select an option</option>
  <option value="someOption">No</option>
  <option value="otherOption">Yes</option>

  </select>
  
    </form>
      
  );
};

export default LoanInfo;