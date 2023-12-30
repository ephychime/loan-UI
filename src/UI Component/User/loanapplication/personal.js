import React from 'react';

const PersonalInfo = ({ formData, handleChange }) => {
    return (
        <form className="flex text-sm flex-col">
            <label className="text-sm text-black  font-bold mb-2">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border  text-blue-900 rounded p-2 mb-4"
                placeholder="Enter your name"
                
            />

            <label className="text-sm text-black font-bold mb-2">Email Address</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded text-blue-900 p-2 mb-4"
                placeholder="Enter your email address"
               
            />

            <label className="text-sm text-black font-bold mb-2">Address</label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded text-blue-900 p-2 mb-4"
                placeholder="123 Main St, City, Country"
             
            />

            <label className="text-sm text-black font-bold  mb-2">Phone Number</label>
            <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border rounded  text-blue-900 p-2 mb-4"
                placeholder="123-456-7890"
                
            />

<label className="text-sm text-black font-bold mb-2">
   Means of Identification
    </label>
      
   <select
  name="meansofIdentification"
  value={formData.meansofIdentification}
  onChange={handleChange}
  className=" text-sm text-black border rounded p-2 mb-4"
  
>
  <option value=" select" >Select an option</option>
  <option value="someOption">International Passport</option>
  <option value="otherOption">Drivers License</option>
  <option value="otherOption">Birth Certificate</option>
  
</select>
            <label className="text-sm font-bold text-black mb-2">
      Proof Of Identification
        </label>
        <input
        name="proofofIdentification"
        type="file"
        accept=".pdf, .doc, .docx" 
        value={formData.proofofIdentification}
        onChange={handleChange}
      
        className="border  text-black rounded p-2 mb-4"
      />


<label className="text-sm font-bold text-black mb-2">
        Guarantor's Name
      </label>
      <input
        type="text"
        name="guarantorName"
        value={formData.guarantorName}
        onChange={handleChange}
        className="border rounded p-2 mb-4"
        placeholder="John Doe"
      />
      <label className="text-sm font-bold text-black mb-2">
    Loan Term (in months):
    </label>
  
    <select
  name="loanTerm"
  value={formData.loanTerm}
  onChange={handleChange}
  className=" border rounded p-2 mb-4"
  
  >
  <option value=" select" >Select an option</option>
  <option value="someOption">0-6 months</option>
  <option value="otherOption">6 months to 1 years</option>
  <option value="otherOption">2 years</option>
  </select>

  <label className="text-sm  font-bold text-black mb-2">Relationship with Guarantor</label>
            <input
                type="text"
                name="gurantorRelationship"
                value={formData.guarantorRelationship}
                onChange={handleChange}
                className="border text-black rounded p-2 mb-4"
                placeholder="ABC Coporation"
                
            />
        </form>
    );
};

export default PersonalInfo;

