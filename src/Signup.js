// Register.js
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-sm p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Create Kalp Studio Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Ready to discover the amazing Kalp Studio products
        </p>

        {/* Form */}
        <form className="space-y-4 mt-6">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-indigo-600 hover:underline text-sm"
            >
              Verify Email
            </button>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed"
            disabled
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          By clicking "Register" you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>
        </p>
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link to ="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
