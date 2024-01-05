import React, { useState } from 'react';

const CurrentLoan = () => {

  const loanData = [
    { id: 1, amount: 5000, repaid: true },
    { id: 2, amount: 8000, repaid: false },
    { id: 3, amount: 10000, repaid: true },
    
  ];
const cellStyle = "py-2 px-4 text-black border-b"

  // State for filtering
  const [showRepaid, setShowRepaid] = useState(true);
  const [showUnpaid, setShowUnpaid] = useState(true);

  // Function to filter loans based on repaid status
  const filterloans = loanData.filter((loan) => (showRepaid && loan.repaid) || (showUnpaid && !loan.repaid));


  return (
    <div className="h-screen text-black mt-20">
      <h1 className="text-2xl font-bold mb-4">Loan Overview</h1>

      
      <div className="flex mb-4">
        <label className="mr-4">
          <input
            type="checkbox"
            checked={showRepaid}
            onChange={() => setShowRepaid(!showRepaid)}
            className="mr-2 "
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

      <table className=" w-96 border">
        <thead>
          <tr>
            <th className={cellStyle}>Loan ID</th>
            <th className={cellStyle}>Loan Amount</th>
            <th className={cellStyle}>Repaid Status</th>
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
                <td className={cellStyle}>{loan.id}</td>
                <td className={cellStyle}>${loan.amount}</td>
                <td className={cellStyle}>{loan.repaid ? 'Repaid' : 'Unpaid'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentLoan;
