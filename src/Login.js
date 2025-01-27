import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Logo Image */}
      <div className="absolute top-6 left-6">
        <Link to="/">
          <img
            src="/kalplogo.svg" // Replace with the actual path to your image
            alt="Kalp Studio Logo"
            className=" ml-4 w-32 h-auto"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="absolute top-6 right-6 space-x-6 text-gray-500">
        <a href="#" className="hover:underline">
          Help
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
      </div>

      {/* Sign-In Card */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Sign in</h2>
        <p className="text-gray-500 text-center mt-2">
          Ready to discover the amazing Kalp Studio products
        </p>

        <form className="space-y-4 mt-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
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

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-indigo-600 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed"
            disabled
          >
            Sign In
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
