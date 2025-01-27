import React from 'react';
import { DiBlackberry } from 'react-icons/di';

const FooterDesign = () => {
  return (
    <div className='bg-black'>
      <div className='container mx-auto px-8'>
        <div className="relative h-[545px] text-white mx-auto mt-[87px]">

          {/* Overlapping Section */}
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[80%] h-[100px] bg-blue-400 rounded-[20px] shadow-lg flex justify-around items-center">
            {/* Icon and Text 1 */}
            <div className="flex items-center space-x-2">
              <div className="text-black text-2xl">
                <i className="fas fa-credit-card"></i>
              </div>
              <p className="text-black font-medium">No Credit Card Required</p>
            </div>
            <div className="h-12 border-r border-white"></div>
            {/* Icon and Text 2 */}
            <div className="flex items-center space-x-2">
              <div className="text-black text-2xl">
                <i className="fas fa-shield-alt"></i>
              </div>
              <p className="text-black font-medium">ISO 27001 Compliant</p>
            </div>
            <div className="h-12 border-r border-white"></div>
            {/* Icon and Text 3 */}
            <div className="flex items-center space-x-2">
              <div className="text-black text-2xl">
                <i className="fas fa-question-circle"></i>
              </div>
              <p className="text-black font-medium">Free Training & Support</p>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="pt-[100px]">
            {/* Footer Top Section */}
            <div className="flex justify-between items-start gap-[114px]">
              {/* Left Section */}
              <div className="flex flex-col w-[353px] gap-[24px]">
                {/* Logo */}
                <img
                  src="/kalp-logo-white.svg"
                  alt="Kalp Studio Logo"
                  className="w-[150px]"
                />
                {/* Social Media Icons */}
                <div className="flex space-x-[24px]">
                  <a href="#" className="text-gray-400 hover:text-white text-xl">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-xl">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white text-xl">
                    <i className="fab fa-telegram"></i>
                  </a>
                </div>
                <p className="text-[24px]">Get the best of blockchain</p>
                <p className='text-[16px]'>Latest news from web3's leading developer platform
                </p>
                {/* Subscribe Button */}
                <button className="w-[150px] h-[52px]  py-2 bg-white text-black rounded-lg hover:bg-[#CBFD13] hover:text-black">
                  Subscribe
                </button>
              </div>

              {/* Right Section */}
              <div className="flex w-[726px] gap-[150px]">
                {/* Column 1 */}
                <div className="w-[68px] h-[136px]">
                  <h4 className="font-bold text-md mb-3">Platform</h4>
                  <ul className="space-y-2 text-white text-sm">
                    <li>Digital Asset</li>
                    <li>CBDC</li>
                    <li>Metaverse</li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="w-[68px] h-[136px]">
                  <h4 className="font-bold text-md mb-3">Resources</h4>
                  <ul className="space-y-2 text-white text-sm">
                    <li>Blog</li>
                    <li>Newsletter</li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div className="w-[68px] h-[136px]">
                  <h4 className="font-bold text-md mb-3">Company</h4>
                  <ul className="space-y-2 text-white text-sm">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Security</li>
                  </ul>
                </div>
                {/* Column 4 */}
                <div className="w-[68px] h-[136px]">
                  <h4 className="font-bold text-md mb-3">Support</h4>
                  <ul className="space-y-2 text-white text-sm">
                    <li>Help Center</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-[80px] mb-7 flex justify-between items-center border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                Kalp Studio © 2025, All Rights Reserved
              </p>
              <p className="text-gray-500 text-sm">Powered by KALP</p>
            </div>
          </footer>
        </div>
      </div>
    </div>

  );
};

export default FooterDesign;
