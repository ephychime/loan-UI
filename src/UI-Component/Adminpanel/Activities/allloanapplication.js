import React, { useState } from 'react';
import ApplicationLoans from './dummydata/utliallloanapplications';

const AllLoanApplications = () => {

  const headingStyle = "col-span-1 text-left font-bold text-sm border-b-2 bg-gray-400"
  const bodyStyle = "col-span-1 border-b-2 text-sm"

  const [loanApplications, setLoanApplications] = useState(ApplicationLoans);

  return (
    <div className="mx-auto container text-black justify-center content-center mt-20">

      <div className="grid grid-cols-8 w-full sm:w-10/12 bg-white border mx-auto mb-80">
        <div className={headingStyle}>Id</div>
        <div className={headingStyle}>Name</div>
        <div className={headingStyle}>Amount</div>
        <div className={headingStyle}>Company Name</div>
        <div className={headingStyle}>Job Title</div>
        <div className={headingStyle}>Loan Term</div>
        <div className={headingStyle}>Created On</div>
        <div className={headingStyle}>Status</div>

        {loanApplications.map((application) => {
          const { id, name, amount, company_name, job_title, loan_term, createdOn, status } = application;
          return (
            <React.Fragment key={id}>
              <div className={bodyStyle}>{id}</div>
              <div className={bodyStyle}>{name}</div>
              <div className={bodyStyle}>{amount}</div>
              <div className={bodyStyle}>{company_name}</div>
              <div className={bodyStyle}>{job_title}</div>
              <div className={bodyStyle}>{loan_term}</div>
              <div className={bodyStyle}>{createdOn}</div>
              <div className={bodyStyle}>{status}</div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AllLoanApplications;
