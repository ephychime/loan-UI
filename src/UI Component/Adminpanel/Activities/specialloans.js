


import React, { useState, useEffect } from 'react';



const SpecialLoanRequest = () => {
  // Dummy data for loan requests
  const loanRequests = [
    {
      id: 1,
      name: 'Adaeze Umeh',
      email: 'asgdh@gmail.com',
      location: 'New York, NY',
      createdDate: '2023-01-15',
      purpose: 'Home Improvement',
      // Add other details as needed
    },
    {
      id: 2,
      name: 'Jeff Dogh',
      email: 'jeff@yaoo.com',
      location: 'Los Angeles, CA',
      createdDate: '2023-02-10',
      purpose: 'Education',
      // Add other details as needed
    },
    // Add more entries as needed
  ];

  return (
    <div className="container h-screen  mx-auto mt-10">
      <h1 className="text-xl font-bold mb-6">Loan Request Details</h1>

      {/* Loan requests list */}
      <ul className="grid grid-cols-4 gap-4">
        {loanRequests.map((request) => (
          <li key={request.id} className="border p-4 hover:bg-gray-100">
            <div>
              <strong>Name:</strong> {request.name}
            </div>
            <div>
              <strong>Email:</strong> {request.email}
            </div>
            <div>
              <strong>Location:</strong> {request.location}
            </div>
            <div>
              <strong>Created Date:</strong> {request.createdDate}
            </div>
            <div>
              <strong>Purpose:</strong> {request.purpose}
            </div>
            {/* Add other details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialLoanRequest;
