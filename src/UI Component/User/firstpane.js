import { FaUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";

const FirstPane = () => {
    return(
        <div className="flex text-red  w-screen items-center justify-end  justify-between">
            {/* <h1 className="text-center font-bold text-2xl  mt-40 absolute inset-x-0 top-10">WELCOME ADMIN</h1> */}
 <div className="w-screen  flex items-center   border-b border-blue-900 py-1  mt-5 gap-8 pr-2 justify-end ">
 <div className="text-black-400"><FaRegMessage /></div>
      <div className="text-black-400"><IoIosNotificationsOutline /></div>
      <div className="text-black-400"><FaUser /></div>
 </div>
    </div>
    )
}
export default FirstPane;