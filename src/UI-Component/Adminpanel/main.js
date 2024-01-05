import React, { useState } from "react";
import ViewVerified from "./Activities/verifyloan/verifyloan";
import CurrentLoan from "./Activities/currentloan";
import AllLoanApplications from "./Activities/allloanapplication";
import AdminHome from "./adminhome";
import LoanApprovalPage from "./Activities/loanapproval"
import SpecialLoanRequest from "./Activities/specialloans.js";
import PostTransactionForm from "./Activities/postloanrepayment/post-transactionform";
import classNames from "classnames";
import buttonNames  from "./button_names";
import AdminIcons from "../User/adminicons";



const Button = ({ name, activeButton, onClick }) => (
  <button
    className={classNames(
      "bg-blue-400 font-bold rounded-lg text-black px-4 py-2 mr-4",
      { "bg-blue-700": activeButton === buttonNames[name] }
    )}
    onClick={() => onClick(buttonNames[name])}
  >
    {name}
  </button>
);

const AdminPageLayout = () => {
  const [activeButton, setActiveButton] = useState(buttonNames.adminHome);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="mt-20">
      <div>
        <AdminIcons />
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center py-5 space-y-2 sm:space-x-2 sm:space-y-0">
        <Button name="adminHome" activeButton={activeButton} onClick={handleButtonClick} />
        <Button name="verifyLoan" activeButton={activeButton} onClick={handleButtonClick} />
        <Button name="loanApplications" activeButton={activeButton} onClick={handleButtonClick} />
        <Button name="currentLoans" activeButton={activeButton} onClick={handleButtonClick} />
        <Button name="loanApproval" activeButton={activeButton} onClick={handleButtonClick} />
        <Button name="specialRequest" activeButton={activeButton} onClick={handleButtonClick} />
        <Button name="postTransactionForm" activeButton={activeButton} onClick={handleButtonClick} />
      </div>

      <div className="flex flex-col items-center">
  {(() => {
    switch (activeButton) {
      case buttonNames.verifyLoan:
        return <ViewVerified />;
      case buttonNames.loanApplications:
        return <AllLoanApplications />;
      case buttonNames.currentLoans:
        return <CurrentLoan />;
      case buttonNames.adminHome:
        return <AdminHome />;
      case buttonNames.loanApproval:
        return <LoanApprovalPage />;
      case buttonNames.specialRequest:
        return <SpecialLoanRequest />;
      case buttonNames.postTransactionForm:
        return <PostTransactionForm />;
      default:
        return <AdminPageLayout/>
    }
  })()}
</div>

    </div>
  );
};

export default AdminPageLayout;