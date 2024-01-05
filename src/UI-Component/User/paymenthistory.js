
import React from 'react';
import paymentHistory from "../Adminpanel/Activities/dummydata/utilpaymenthistory"

const PaymentHistory = () => {
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
            {paymentHistory.map((entry) => (
              <tr key={entry.id} className="grid grid-cols-2 gap-2 border border-black">
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

