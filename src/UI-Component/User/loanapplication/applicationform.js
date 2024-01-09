
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalInfo from "./personal";
import EmploymentInfo from "./employerinfo"


const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    company: "",
    duration: "",
    jobTitle: "",
    meansofidentification: "",
    proofofIdentification: "",
    guarantorName: "",
    loanTerm: "",
    guarantorRelationship: "",
    companyAddress: "",
    employmentStatus: "",
    proofofFunds: "",
    existingLoan: "",
    guarantorEmail: "",
    loanAmount: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const isFormFilled = Object.values(formData).every((value) => value.trim() !== "");

    if (isFormFilled) {
      alert("Form submitted");
      setFormSubmitted(true);
    } else {
      toast.error("Please fill all form fields.");
    }
  };

  useEffect(() => {
    // Clear form data when formSubmitted changes
    if (formSubmitted) {
      setFormData({
        // Reset form data to initial state
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
        company: "",
        duration: "",
        jobTitle: "",
        meansofidentification: "",
        proofofIdentification: "",
        guarantorName: "",
        loanTerm: "",
        guarantorRelationship: "",
        companyAddress: "",
        employmentStatus: "",
        proofofFunds: "",
        existingLoan: "",
        guarantorEmail: "",
        loanAmount: "",
      });
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  return (
    <div className="mt-5 sm:ml-5 md:ml-10 lg:mx-52 xl:ml-64 shadow-md mx-auto shadow-teal-800 h-full">
      
      <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="font-bold  text-black text-m mb-4">Please fill out this form to get started:</h1>
        <div className="flex flex-col gap-8 sm:flex-row md:flex-row lg:flex-row">
        <PersonalInfo formData={formData} handleChange={handleChange} />
        <EmploymentInfo formData={formData} handleChange={handleChange} />
        </div>
        <div className="text-center mt-8">
        <button type="submit" className="bg-blue-400 text-blue-900 font-bold border-bg-blue-400 p-2 sm:w-32 md:w-40 lg:w-48 rounded-md">Submit</button>

        </div>
      </form>
      <ToastContainer
      position="top-center"
      autoClose={2000}  />
    </div>
  );
};

export default ApplicationForm;