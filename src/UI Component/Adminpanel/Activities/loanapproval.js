import React, { useState } from 'react';

const LoanApprovalPage = () => {
  // Dummy data for loan applications
  const loanApplications = [
    { id: 1, customerName: 'John Doe', loanAmount: 5000, status: 'Pending',comment: 'Blurry Bank Statement '},
    { id: 2, customerName: 'Jane Smith', loanAmount: 8000, status: 'Pending',  comment: 'incomplete document'},
    { id: 3, customerName: 'Bob Johnson', loanAmount: 10000, status: 'Pending', comment: 'incomplete document' },
    // Add more entries as needed
  ];

  const [applications, setApplications] = useState(loanApplications);

  const handleApproveReject = (id, action) => {
    const updatedApplications = applications.map((app) => {
      if (app.id === id) {
        return { ...app, status: action };
      }
      return app;
    });

    setApplications(updatedApplications);
  };

  return (
    <div className=" h-screen mx-auto mt-16">
      <h1 className="text-xl  border border-b-blue-900 font-bold mb-6">Loan Approval</h1>

      {/* Loan applications grid */}
      <div className="grid grid-cols-5  border border-b-blue-900 gap-4">
        <div className="col-span-1 font-bold">Customer Name</div>
        <div className="col-span-1 font-bold">Loan Amount</div>
        <div className="col-span-1 font-bold">Status</div>
        <div className="col-span-1 font-bold">Actions</div>
        <div className="col-span-1 font-bold">Comment</div>


        {applications.map((application) => (
          <React.Fragment key={application.id}>
            <div className="col-span-1">{application.customerName}</div>
            <div className="col-span-1">${application.loanAmount}</div>
            <div className="col-span-1">{application.status}</div>
            <div className="col-span-1">
              {application.status === 'Pending' && (
                <>
                  <button
                    className="bg-green-500 text-white px-2 py-1 mr-2"
                    onClick={() => handleApproveReject(application.id, 'Approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1"
                    onClick={() => handleApproveReject(application.id, 'Rejected')}
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
            <div className="col-span-1">{application.comment}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  
  );
};

export default LoanApprovalPage;
