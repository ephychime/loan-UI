

import React, { useState } from "react";
import * as Yup from "yup";
import SignIn from "../Login/login";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const schema = Yup.object().shape({
      firstname: Yup.string().required("Firstname is required"),
      lastname: Yup.string().required("Lastname is required"),
      email: Yup.string().email("Email is not valid").required("Email is required"),
      password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    });


    schema.validate(formData, { abortEarly: false })
      .then(() => {
        
        alert("Successful Sign Up!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setIsSignUpSuccess(true);
        setErrors({});
      })
      .catch((validationErrors) => {
    
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      });
  };

  return (
    <div className="h-screen">
      {showLogin ? (
        <SignIn />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto mt-20 p-10 bg-zinc-100 shadow-xl rounded"
        >
          <div className="text-center p-5">
            <p className="text-2xl font-bold p-1 text-center">Welcome</p>
            <p className="text-sm">Create an account</p>
          </div>

          <div className="py-0.5 m-2 mx-auto">
            <input
              name="firstname"
              required
              type="text"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="p-2 sm:w-64 lg:w-72 rounded text-sm"
            />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
          </div>

          <div className="py-0.5 m-2 mx-auto">
            <input
              name="lastname"
              required
              type="text"
              value={formData.lastname}
              placeholder="Lastname"
              onChange={handleChange}
              className="p-2 sm:w-64 lg:w-72 rounded text-sm"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname}</p>
            )}
          </div>

          <div className="py-0.5 m-2 mx-auto">
            <input
              name="email"
              required
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 sm:w-64 lg:w-72 rounded text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="py-0.5 m-2 mx-auto">
            <input
              name="password"
              required
              type="password"  
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 sm:w-64 lg:w-72 rounded text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="py-0.5 m-2 mx-auto">
            <input
              name="confirmPassword"
              required
              type="password"  
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-2 sm:w-64 lg:w-72 rounded text-sm"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <button type="submit" className="p-1 w-full bg-blue-400 mt-5 rounded-full text-sm">
            Sign Up
          </button>

          <div className="flex text-sm w-84 justify-center gap-3 py-10">
            <button className="text-blue-400 " onClick={handleToggleForm}>
              Login
            </button>
            <p>Already created an account?</p>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUpPage;
