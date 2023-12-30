import React, { useState } from "react";
import ViewVerified from "./Activities/verifyloan/verifyloan";
import CurrentLoan from "./Activities/currentloan";
import AllLoanApplications from "./Activities/allloanapplication";
import FirstPane from "../User/firstpane";
import AdminHome from "./adminhome";
import LoanApprovalPage from "./Activities/loanapproval"
import SpecialLoanRequest from "./Activities/specialloans.js";
import PostTransactionForm from "./Activities/postloanrepayment/posttransactionform";

const Button = ({ name, activeButton, onClick }) => (
  <button
    className={`bg-blue-400 font-bold rounded-lg text-black px-4 py-2 mr-4 ${
      activeButton === name && "bg-blue-700"
    }`}
    onClick={() => onClick(name)}
  >
    {name}
  </button>
);

const MainPage = () => {
  const [activeButton, setActiveButton] = useState("adminHome");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="mt-20">
      <div>
        <FirstPane />
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center py-5 space-y-2 sm:space-x-2 sm:space-y-0">
        <Button name="adminHome" activeButton={activeButton} onClick={handleButtonClick} />
        <Button name="verifyLoan" activeButton={activeButton} onClick={handleButtonClick}></Button>
        <Button name="loanApplications" activeButton={activeButton} onClick={handleButtonClick}></Button>
        <Button name="currentLoans" activeButton={activeButton} onClick={handleButtonClick}></Button>
        <Button name="loanApproval" activeButton={activeButton} onClick={handleButtonClick}></Button>
        <Button name="specialRequest" activeButton={activeButton} onClick={handleButtonClick}></Button>
        <Button name="postTransactionForm" activeButton={activeButton} onClick={handleButtonClick}></Button>
      </div>

      <div className="flex flex-col items-center">
        {/* Render the active component based on the selected button */}
        {activeButton === "verifyLoan" && <ViewVerified />}
        {activeButton === "loanApplications" && <AllLoanApplications />}
        {activeButton === "currentLoans" && <CurrentLoan />}
        {activeButton === "adminHome" && <AdminHome />}
        {activeButton === "loanApproval" && <LoanApprovalPage />}
        {activeButton === "specialRequest" && <SpecialLoanRequest />}
        {activeButton === "postTransactionForm" && <PostTransactionForm />}
      </div>
    </div>
  );
};

export default MainPage;
