import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const texts = ["Metaverse","NFT Marketplace", "Smart Contracts"]; // Add more texts here
  const [currentText, setCurrentText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); 
    }, 1000); // Change text every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]); // Update the displayed text
  }, [currentIndex, texts]);

  return (
    <div className="bg-slate-200 flex items-center justify-center">
      <div className="container mx-auto px-7 lg:flex items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-gray-600 text-[24px] uppercase">Build</span>
<img src="./Vector.webp" />
            <span className="px-3 py-1 text-[24px] bg-white text-[#4A3FC5] font-semibold">
              {currentText} {/* Dynamically updating text */}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
            <span className="text-purple-600">Simplify</span> blockchain
            development with Kalp Studio.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Swiftly create and manage digital assets, transforming complexity
            into seamless efficiency.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 border border-black text-black rounded-lg text-lg hover:bg-[#CBFD13] hover:text-black">
              Talk to an Expert
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-[#CBFD13] hover:text-black">
              Start Building
            </button>
          </div>
        </div>

        {/* Right Content (Image/Graphic) */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="/bg-image1.webp" // Replace with your image path
            alt="Blockchain Illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;