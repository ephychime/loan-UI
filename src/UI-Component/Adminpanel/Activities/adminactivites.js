import ViewVerified from "../Activities/verifyloan";
import AllLoanApplications from "../Activities/allloanapplication";
import CurrentLoan from "../Activities/currentloan";


const AdminActivity =() =>{
    return(
<div className="w-screen h-screen">
<ViewVerified />
<AllLoanApplications />
<CurrentLoan />
</div>
    );
}
export default AdminActivity;