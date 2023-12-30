// LoanRepaymentForm.js

import React from 'react';

const LoanRepaymentForm = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-xl font-bold mb-6">Post Loan Repayment Transaction</h1>
      <form className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="clientId" className="block text-blue-900 text-sm font-bold mb-2">
            Client ID:
          </label>
          <input
            type="text"
            id="clientId"
            name="clientId"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-blue-900 text-sm font-bold mb-2">
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-blue-900 text-sm font-bold mb-2">
            Transaction Date:
          </label>
          <input type="date" id="date" name="date" className="border rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label htmlFor="additionalComments" className="block text-blue-900 text-sm font-bold mb-2">
            Additional Comments:
          </label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-400"
        >
          Post Transaction
        </button>
      </form>
    </div>
  );
};

export default LoanRepaymentForm;
