import React from 'react';

const PaymentHistory = () => {
  // Dummy data for loan repayment history
  const paymentHistory = [
    { date: '2023-01-01', amount: 1000,  },
    { date: '2023-02-01', amount: 1200 },
    { date: '2023-03-01', amount: 800 },
    // Add more entries as needed
  ];

  return (
    <div className="container h-screen text-black mx-auto mt-10 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-6">Payment History</h1>
      <div className="min-w-full overflow-hidden border border-black">
        <table className="min-w-full">
          <thead>
            <tr className="grid grid-cols-2 gap-2 font-bold border border-black">
              <th className="col-span-1 py-2 px-4 text-left">Date</th>
              <th className="col-span-1 py-2 px-4 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((entry, index) => (
              <tr key={index} className="grid grid-cols-2 gap-2 border border-black">
                <td className="col-span-1 py-2 px-4">{entry.date}</td>
                <td className="col-span-1 py-2 px-4">${entry.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
