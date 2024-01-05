

import React, { useState, useEffect } from 'react';

const LoanRepaymentForm = () => {
  const [formData, setFormData] = useState({
    clientId: '',
    amount: '',
    date: '',
    additionalComments: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const formStyle = "border rounded w-full py-2 px-3"
const labelStyle = "block text-black text-sm font-bold mb-2"
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if all form fields are filled
    if (formData.clientId && formData.amount && formData.date) {
      // Perform any additional form submission logic here

      // Show alert after form submission logic
      alert('Transaction Posted');

      // Clear form fields immediately
      setFormData({
        clientId: '',
        amount: '',
        date: '',
        additionalComments: '',
      });
    } else {
      // If any field is empty, show an alert
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      
      <form className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="clientId" className={labelStyle}>
            Client ID:
          </label>
          <input
            type="text"
            name="clientId"
            className={formStyle}
            value={formData.clientId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className={labelStyle}>
            Amount:
          </label>
          <input
            type="text"
            name="amount"
            className={formStyle}
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className={labelStyle}>
            Transaction Date:
          </label>
          <input
            type="date"
            name="date"
            className={formStyle}
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="additionalComments" className={labelStyle}>
            Additional Comments:
          </label>
          <textarea
            name="additionalComments"
            className="border resize-none rounded w-full py-2 px-3"
            value={formData.additionalComments}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-black font-bold py-2 px-4 rounded hover:bg-gray-400"
        >
          Post Transaction
        </button>
      </form>
    </div>
  );
};

export default LoanRepaymentForm;
