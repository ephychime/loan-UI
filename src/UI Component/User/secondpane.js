import React, { useState } from 'react';
import ApplicationForm from "./loanapplication/applicationform";
import PaymentHistory from './paymenthistory';
import Sidebar from './sidebar';

const SecondPane = () => {
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [showPaymentHistory, setShowPaymentHistory] = useState(false);

    const handleGetLoanClick = () => {
        setShowApplicationForm(true);
        setShowPaymentHistory(false); // Close payment history when getting a loan
    };

    const handleViewPaymentClick = () => {
        setShowPaymentHistory(true);
        setShowApplicationForm(false); // Close application form when viewing payment history
    };

    return (
        <div className=" bg-gray-400 gap-20 flex ">
            {showApplicationForm ? (
                <ApplicationForm />
            ) : showPaymentHistory ? (
                <PaymentHistory />
            ) : (
                <>
        <div className='w-screen h-screen flex'>
                        <div className='w-48  h-screen bg-blue-400'>
                            <Sidebar />
                        </div>
                        <div className=' justify-center py-5 gap-20 flex flex-1'>
                            <div className='text-center justify-center mx-auto items-center mt-24'>
                                <h1 className='font-extrabold text-black items-center mx-auto text-3xl py-10'>
                                    Welcome Back User
                                </h1>
                                <h1 className='pl-3 text-black'>
                                    Everything seems okay and up to date with your account.
                                </h1>
                                <button
                                    onClick={handleGetLoanClick}
                                    type="submit"
                                    className='mr-10 mt-10 bg-white  ml-32 text-black font-bold hover:bg-blue-400 text-xl w-40 border-bg-blue-900 border-blue-900 p-3 rounded-full'
                                >
                                    GET LOAN
                                </button>
                                <button
                                    onClick={handleViewPaymentClick}
                                    className='p-3 bg-white border-bg-white hover:bg-blue-400 font-bold text-xl text-black items-center mt-24 justify-center text-center border rounded-full'
                                >
                                    VIEW ALL LOAN AND PAYMENT
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SecondPane;
