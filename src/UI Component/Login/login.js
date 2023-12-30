
import React, { useState } from "react";
import SignUpPage from "./signuppage"
import AdminDashboard from "../Adminpanel/dashboard";
import UserDashBoard from "../User/userdashboard";


const SignIn = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials are valid
    const adminCredentials = {
      email: "admin@mail.com",
      password: "password123",
    };

    const userCredentials = {
      email: "ephy@mail.com",
      password: "password123",
    };

    if (
      formInput.email === adminCredentials.email &&
      formInput.password === adminCredentials.password
    ) {
      setIsLoggedIn(true);
    } else if (
      formInput.email === userCredentials.email &&
      formInput.password === userCredentials.password
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleBackToLoginClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="">
      {isLoggedIn ? (
        formInput.email === "admin@mail.com" ? (
          <AdminDashboard />
        ) : (
          <UserDashBoard />
        )
      ) : !isSignUp ? (
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto my-32 mt-20  p-10 bg-zinc-100 shadow-xl rounded text-center">
            <div className="p-10">
        <h1 className="text-center p-4 font-bold text-2xl">Welcome back</h1>
        <p className="text-center py-5 text-sm">Please login to get started</p>
      </div>
      <div className="py-0.5 m-2 mx-auto">
        <input
          name="email"
          required
          type="text"
          placeholder="Email"
          onChange={handleChange}
          className="p-2 sm:w-64 lg:w-72 rounded text-sm"
        />
      </div>
      <div className="py-0.5 m-2 mx-auto">
        <input
          name="password"
          required
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="p-2 sm:w-64 lg:w-72 rounded text-sm"
        />
      </div>
      <button
        type="submit"
        className="p-1  sm:w-72 w-full  mx-auto bg-blue-400 mt-10 rounded-full text-sm"
      >
        LOGIN
      </button>

      {/* <p className="ml-4 sm:ml-24 py-8 ml-4 sm:ml-32 text-sm">Forgot your password?</p> */}
      <div className="flex gap-1 mt-16 sm:w-96 mx-auto items-center">
        <p className="text-sm">Don't have an account?{" "}</p>
        <button
          type="button"
          className="text-blue-400 text-sm"
          onClick={handleSignUpClick}
        >
          Create one
        </button>
      </div>
          {/* ... (your existing form code) */}
        </form>
      ) : (
        <SignUpPage onBackToLoginClick={handleBackToLoginClick} />
      )}
    </div>
  );
};

export default SignIn;