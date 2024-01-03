


import React, { useState } from 'react';

const AllLoanApplications = () => {
  // Dummy data for demonstration
  const dummyLoanApplications = [
    { id: 1, name: 'John Doe', amount: 5000, company_name: 'Joe Construction', job_title:'Security', loan_term: '3 months', status: 'Pending', createdOn: '2023-01-10' },
    { id: 2, name: 'John Doe', amount: 5000, company_name: 'Joe Construction', job_title:'Security', loan_term: '3 months', status: 'Pending', createdOn: '2023-01-10' },
    { id: 3, name: 'Jane Smith', amount: 10000, company_name: 'Joe Construction', job_title:'Cleaner',  loan_term: '9 months', status: 'Approved', createdOn: '2023-02-15' },
    // ... other entries
  ];

  const [loanApplications, setLoanApplications] = useState(dummyLoanApplications);

  return (
    <div className='ml-20 h-screen mx-auto container justify-center content-center mt-20'>
      <table className='w-10/12 bg-white border mx-auto mb-80'>
        <thead>
          <tr className='py-5'>
            <th className='text-left text-sm p-5 border-b-2 bg-gray-400'>ID</th>
            <th className='text-left text-sm border-b-2 bg-gray-400'>Name</th>
            <th className='text-left text-sm border-b-2 bg-gray-400'>Amount</th>
            <th className='text-left text-sm border-b-2 bg-gray-400'>Company Name</th>
            <th className='text-left text-sm border-b-2 bg-gray-400'>Job Title</th>
            <th className='text-left text-sm border-b-2 bg-gray-400'>Loan Term</th>
            <th className='text-left text-sm border-b-2 bg-gray-400'>Created On</th>
            <th className='text-left text-sm border-b-2 bg-gray-400'>Status</th>
          </tr>
        </thead>
        <tbody>
          {loanApplications.map((application) => {
            const { id, name, amount, company_name, job_title, loan_term, createdOn, status } = application;
            return (
              <tr key={id}>
                <td className='border-b-2 text-sm'>{id}</td>
                <td className='border-b-2 text-sm'>{name}</td>
                <td className='border-b-2 text-sm'>{amount}</td>
                <td className='border-b-2 text-sm'>{company_name}</td>
                <td className='border-b-2 text-sm'>{job_title}</td>
                <td className='border-b-2 text-sm'>{loan_term}</td>
                <td className='border-b-2 text-sm'>{createdOn}</td>
                <td className='border-b-2 text-sm'>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllLoanApplications;
