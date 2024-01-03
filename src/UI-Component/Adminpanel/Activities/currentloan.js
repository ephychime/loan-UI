import React, { useState } from 'react';

const CurrentLoan = () => {
  // Assuming a random data for this    
  const loanData = [
    { id: 1, amount: 5000, repaid: true },
    { id: 2, amount: 8000, repaid: false },
    { id: 3, amount: 10000, repaid: true },
    // Add more entries as needed
  ];

  // State for filtering
  const [showRepaid, setShowRepaid] = useState(true);
  const [showUnpaid, setShowUnpaid] = useState(true);

  // Function to filter loans based on repaid status
  const filterloans = loanData.filter((loan) => (showRepaid && loan.repaid) || (showUnpaid && !loan.repaid));


  return (
    <div className="container w-screen h-screen mx-auto mt-20 p-4 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4">Loan Overview</h1>

      
      <div className="flex mb-4">
        <label className="mr-4">
          <input
            type="checkbox"
            checked={showRepaid}
            onChange={() => setShowRepaid(!showRepaid)}
            className="mr-2"
          />
          Show Repaid Loans
        </label>
        <label>
          <input
            type="checkbox"
            checked={showUnpaid}
            onChange={() => setShowUnpaid(!showUnpaid)}
            className="mr-2"
          />
          Show Unpaid Loans
        </label>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Loan ID</th>
            <th className="py-2 px-4 border-b">Loan Amount</th>
            <th className="py-2 px-4 border-b">Repaid Status</th>
          </tr>
        </thead>
        <tbody>
          {filterloans.length === 0 ? (
            <tr>
              <td colSpan="3" className="py-2 px-4 text-center">
                No loans found.
              </td>
            </tr>
          ) : (
            filterloans.map((loan) => (
              <tr key={loan.id}>
                <td className="py-2 px-4 border-b">{loan.id}</td>
                <td className="py-2 px-4 border-b">${loan.amount}</td>
                <td className="py-2 px-4 border-b">{loan.repaid ? 'Repaid' : 'Unpaid'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentLoan;
