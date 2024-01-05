import { FaUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";

const AdminIcons = () => {
    return(
        <div className="flex w-screen justify-end  justify-between">
        
 <div className="w-screen  flex   border-b-2 border-blue-900 py-1  mt-5 gap-8 justify-end ">
 <FaRegMessage  className="text-black-400"/>
     <IoIosNotificationsOutline className="text-black-400"/>
      <FaUser className="text-black-400" />
 </div>
    </div>
    )
}
export default AdminIcons;