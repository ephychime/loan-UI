import React, { useState, useEffect } from "react";
import SignIn from "../Login/login"


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

  useEffect(() => {
    if (isSignUpSuccess) {
      // Clear form fields upon successful sign-up
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [isSignUpSuccess]);

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

    // Perform validation
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no validation errors, you can submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Alert successful sign-up
      alert("Successful Sign Up!");

      // Set the sign-up success status
      setIsSignUpSuccess(true);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.firstname.trim()) {
      errors.firstname = "Firstname is required";
    }
    if (!data.lastname.trim()) {
      errors.lastname = "Lastname is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is not valid";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div >
      {showLogin ? (
        <SignIn />
      ) : (
        <form
          onSubmit={handleSubmit}
          className=" max-w-md  w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto mt-20 p-10 bg-zinc-100  shadow-xl rounded">
          
          <div className="text-center p-5">
            <p className="text-2xl font-bold p-1 text-center">Welcome</p>
          <p className="text-sm">Create an account</p></div>

          <div className="py-0.5 m-2 mx-auto">
        <input
          name="firstname"
          required
          type="text"
          value={formData.firstname}
          placeholder="Firstname"
          onChange={handleChange}
          className="p-2 sm:w-64 lg:w-72 rounded text-sm"
        />
        {errors.firstname && (
          <p className="text-red-500 text-sm">{errors.firstname}</p>
        )}
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
        {errors.firstname && (
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
        {errors.firstname && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>
      <div className="py-0.5 m-2 mx-auto">
  <input
    name="password"
    required
    type="text"
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
    type="text"
    placeholder="Confirm Password"
    value={formData.confirmPassword}
    onChange={handleChange}
    className="p-2 sm:w-64 lg:w-72 rounded text-sm"
  />
  {errors.confirmPassword && (
    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
  )}
</div>

      <button
        type="submit"
            className="p-1 w-full bg-blue-400 mt-5 rounded-full text-sm"
      >
        Sign Up
      </button>
      <div className="flex text-sm w-84 justify-center gap-3 py-10">
            <button className=" text-blue-400 " onClick={handleToggleForm}>
              Login
            </button>
            <p className="">
              Already created an account?
            </p>
          </div>
    </form>
      )}
    </div>
  );
};

export default SignUpPage;