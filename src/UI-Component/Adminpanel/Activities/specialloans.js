import React from 'react';
import specialLoans from './dummydata/utilspecialloans';

const SpecialLoanRequest = () => {
  return (
    <div className="h-screen text-black mt-10 flex flex-col items-center">
      

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12">
        {specialLoans.map((request) => (
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialLoanRequest;
