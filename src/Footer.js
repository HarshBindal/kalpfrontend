import React from 'react';

const FooterDesign = () => {
  return (
    
    <div className="relative w-full bg-black text-white h-[504px]">
      {/* Overlapping Purple Box */}
      <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[80%]  h-[100px]  bg-blue-400  rounded-[20px]  shadow-lg flex justify-around items-center  ">
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
      <footer className="pt-20 pb-10 px-6">
        {/* Footer Top Section */}
        <div className="flex justify-between items-start mt-[87px] space-x-10">
          {/* Left Section */}
          <div>
            <h3 className="font-bold text-lg">KALP STUDIO</h3>
            <p className="mt-2">Get the best of blockchain</p>
            <p className="text-gray-400 text-sm">
              Latest news from web3’s leading developer platform
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-black rounded-full">
              Subscribe
            </button>
          </div>

          {/* Links Section */}
          <div className="flex space-x-10">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-md mb-3">Platform</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Digital Asset</li>
                <li>CBDC</li>
                <li>Metaverse</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-md mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Blog</li>
                <li>Newsletter</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-md mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Security</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-md mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-[92px] flex justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            Kalp Studio © 2024, All Rights Reserved
          </p>
          <p className="text-gray-500 text-sm">Powered by KALP</p>
        </div>
        
      </footer>
    </div>
    
  );
};

export default FooterDesign;
