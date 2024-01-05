import { FileText,CheckCircle, DollarSign } from "react-feather";

const LandingPage = ()  =>{
const stepStyle = "font-bold"
const iconStyle = " w-8 h-8 ml-2"

    return (
        <div className=" h-screen fixed w-screen ">
            
            <div className="text-center text-blue-900 p-24   ">
            <h1 className=" font-bold text-2xl  ">Personal Loan</h1>
            <p className="p-3 text-2xl ">Get Up to $3,000</p>
            <h1 className="text-m">One Loan at a time, your financial  Journey begins here</h1>
            <p className="p-3 bg-yellow-500  border-bg-yellow-500 hover:bg-blue-400 mt-4 font-bold items-center mx-auto w-48 border rounded-full">Apply Now</p>
            </div>
            

<div className="bg-blue-400 mt-24 text-sm text-black p-10 ">
<h1 className="font-bold text-lg text-center mb-10 ">EASY STEPS</h1>
<div className="grid grid-cols-3 gap-2 bt-96 justify-items-center mx-auto">
    
<FileText className={iconStyle} />
<CheckCircle className={iconStyle} />
<DollarSign className={iconStyle} />
<div className={stepStyle}>SUBMIT FORM</div>
<div className={stepStyle}>QUICK DECISION</div>
<div className={stepStyle}>GET YOUR CASH</div>
    </div>
    </div>
    </div>
    )
}

export default LandingPage;
