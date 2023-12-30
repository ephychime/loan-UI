// import React, { useState, useEffect } from "react";
// import PersonalInfo from "./personal";
// import EmploymentInfo from "./employerinfo";

// const ApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     // Initial form data here
//     // (...)
//   });

//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const isFormFilled = Object.values(formData).every((value) => value.trim() !== " ");

//     if (isFormFilled) {
//       setFormSubmitted(true);
//       alert("Form submitted");
//     } else {
//       alert("Please fill all form fields.");
//     }
//   };

//   useEffect(() => {
//     // Clear form data when formSubmitted changes
//     if (formSubmitted) {
//       setFormData({
//         // Reset form data here
//         // (...)
//       });
//       setFormSubmitted(false);
//     }
//   }, [formSubmitted]);

//   return (
//     <div className="mt-5 sm:ml-5  md:ml-10 lg:ml-20 xl:ml-64 shadow-lg  mx-auto shadow-teal-800 h-full">
//       <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 lg:p-10">
//         <h1 className="font-bold text-lg mb-4">Please fill out this form to get started:</h1>
//         <div className="flex flex-col gap-8 sm:flex-row md:flex-row lg:flex-row">
//           <PersonalInfo formData={formData} handleChange={handleChange} />
//           <EmploymentInfo formData={formData} handleChange={handleChange} />
//         </div>
//         <div className="flex justify-center items-center mt-8">
//           <button className="bg-blue-900 text-white border border-1-bg-blue-900 p-2 sm:w-32 md:w-40 lg:w-48 rounded-md" type="submit">
//             SUBMIT
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplicationForm;


import React, { useState, useEffect } from "react";
import PersonalInfo from "./personal";
import EmploymentInfo from "./employerinfo";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
            email: "",
            age: "",
            phoneNumber: "",
            address: "",
            employmentStatus: "",
            proofofIdentification: "",
            meansofIdentification: "",
            companyAddress: "",
            proofofFunds: "",
            jobTitle: "",
            companyName: "",
            workDuration: "",
            loanAmount: "",
            loanTerm: "",
            existingLoan: "",
            guarantorName: "",
            guarantorEmail : "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const isFormFilled = Object.values(formData).every((value) => value.trim() !== " ");

    if (isFormFilled) {
      setFormSubmitted(true);
      alert("Form submitted");
    } else {
      alert("Please fill all form fields.");
    }
  };

  useEffect(() => {
    // Clear form data when formSubmitted changes
    if (formSubmitted) {
      setFormData({
        name: "",
        email: "",
        age: "",
        phoneNumber: "",
        address: "",
        employmentStatus: "",
        proofofIdentification: "",
        meansofIdentification: "",
        companyAddress: "",
        proofofFunds: "",
        jobTitle: "",
        companyName: "",
        workDuration: "",
        loanAmount: "",
        loanTerm: "",
        existingLoan: "",
        guarantorName: "",
        guarantorEmail : "",
      });
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  return (
    <div className="mt-5 sm:ml-5 md:ml-10 lg:ml-20 xl:ml-64 shadow-lg mx-auto shadow-teal-800 h-full">
      <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="font-bold  text-black text-lg mb-4">Please fill out this form to get started:</h1>
        <div className="flex flex-col gap-8 sm:flex-row md:flex-row lg:flex-row">
          <PersonalInfo formData={formData} handleChange={handleChange} />
          <EmploymentInfo formData={formData} handleChange={handleChange} />
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            className="bg-blue-400 text-black  border-bg-blue-400 p-2 sm:w-32 md:w-40 lg:w-48 rounded-md"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
