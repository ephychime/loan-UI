
import buttonNames from "../../button_names";
import AllLoanApplications from "../allloanapplication";
import CurrentLoan from "../currentloan";
import AdminHome from "../../adminhome";
import LoanApprovalPage from "../loanapproval"
import SpecialLoanRequest from "../specialloans"
import PostTransactionForm from "../postloanrepayment/post-transactionform"
import AdminPageLayout from "../../main";
import ViewVerified from "../verifyloan/verifyloan"

const buttonSwitch = (activeButton) => {
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
      return <AdminPageLayout />;
  }
};

export default buttonSwitch;
