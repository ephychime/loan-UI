
import AdminFirstBoard from "./adminfirstboard";
// import PostTransactionForm from "./activities/posttransactionform";

const AdminHome = () =>{
    return(
        <div className="lg:w-7/12 mx-auto lg:mr-8 mt-24  rounded-md h-screen">
      <div>
        <AdminFirstBoard />
        {/* Other components */}
      </div>
    </div>
    )
}
export default AdminHome;