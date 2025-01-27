import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const dropdownRef = useRef();

  const toggleDropdown = (section) => {
    if (dropdown === section) {
      setDropdown(null);
    } else {
      setDropdown(section);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(null); // Close the dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[rgb(255,255,255,0.81)] backdrop-blur-[10.1px] fixed top-0 left-0 w-full z-50 h-[78px]">
      <div className="container mx-auto px-8  flex justify-between items-center py-2">
        {/* Logo */}
        <div>
          <img
            src="/kalplogo.svg"
            alt="Kalp Logo"
            className="pb-6 w-[200px] h-[70px]"
          />
        </div>

        {/* Menu */}
        <div
          className="hidden md:flex space-x-[26px] w-[760px] h-[23px] text-[18px] text-[#060606] items-center justify-center relative pb-8"
          ref={dropdownRef}
        >
          {/* Dropdown for Products */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("products")}
              className="flex items-center"
            >
              Products
              <ChevronDownIcon className="ml-2 w-5 h-5" />
            </button>
            {dropdown === "products" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-64">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  Blockchain-as-a-Service
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  Digital Asset Platform
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  Token Creator
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  IPFS Storage
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  CBDC
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  Smart Contract Management
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  API Gateway
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  Wallet
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  NFT Platform
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-gray-700"
                >
                  Communication
                </a>
              </div>
            )}
          </div>

          {/* Dropdown for Solutions */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("solutions")}
              className=" flex items-center"
            >
              Solutions
              <ChevronDownIcon className="ml-2 w-5 h-5" />
            </button>
            {dropdown === "solutions" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Solution 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Solution 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Solution 3
                </a>
              </div>
            )}
          </div>

          {/* Enterprise Section */}
          <a href="#" className="">
            Enterprise
          </a>

          {/* Dropdown for Company */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className=" text-[18px] flex items-center"
            >
              Company
              <ChevronDownIcon className="ml-2 w-5 h-5" />
            </button>
            {dropdown === "company" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Careers
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Contact
                </a>
              </div>
            )}
          </div>

          {/* Dropdown for Developers */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("developers")}
              className="text-[18px] flex items-center"
            >
              Developers
              <ChevronDownIcon className="ml-2 w-5 h-5" />
            </button>
            {dropdown === "developers" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  API Docs
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  SDKs
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Developer Blog
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 pr-3 pb-8">
          <Link to="/login">
            <button className="border border-black font-bold px-6 py-2 rounded-md w-[150px] h-[54px]">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-black font-bold text-white rounded-md w-[150px] h-[54px] hover:bg-[#CBFD13] hover:text-black">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
