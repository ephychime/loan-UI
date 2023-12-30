import { FileText,CheckCircle, DollarSign } from "react-feather";

const PageBody = ()  =>{

    return (
        <div className=" fixed w-screen ">
            
            <div className="text-center  p-24 bg-gray-300 ">
            <h1 className="  text-black-900 font-bold text-2xl  ">Personal Loan</h1>
            <p className="p-3 text-2xl text-black-900">Get Up to $3,000</p>
            <h1 className="text-m">One Loan at a time, your financial  Journey begins here</h1>
            <p className="p-3 bg-yellow-500  border-bg-yellow-500 hover:bg-blue-400 mt-4 font-bold items-center mx-auto w-48 border rounded-full">Apply Now</p>
            </div>
            

<div className="bg-blue-400  mx-auto text-sm text-black p-10 ">
<h1 className="font-bold text-lg text-center mb-10 ">EASY STEPS</h1>
<div className="grid grid-cols-3 gap-2 bt-96 justify-items-center mx-auto">
    
<div className=""><FileText className="w-8 h-8 ml-2" /></div>
<div><CheckCircle className=" w-8 h-8 ml-2" /></div>
<div><DollarSign className="w-8 h-8 ml-2" /></div>
<div className='font-bold'>SUBMIT FORM</div>
<div className=' font-bold'>QUICK DECISION</div>
<div className=' font-bold'>GET YOUR CASH</div>
    </div>
    </div>
    </div>
    )
}

export default PageBody;
