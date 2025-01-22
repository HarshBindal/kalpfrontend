import React from "react";

const BlockchainDevelopmentSection = () => {
  return (
    <div className="bg-gradient-to-r from-black to-[#0f0f0f] text-12 text-white  px-20 py-20  h-[453px] rounded-[37px]   mx-20 mb-20 ">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Start Your Blockchain Application Development
        <h2> with <span className="text-green-400">Kalp Studio</span></h2>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300">
          Create an account to get started and get{" "}
          <span className="text-green-400 font-semibold">$50 Free Credits</span>.
        </p>

        {/* Call-to-action button */}
        <button className="bg-white text-black px-8 py-3 rounded-lg shadow-lg hover:bg-[#CBFD13] hover:text-black transition font-semibold">
          Start Building
        </button>
      </div>
    </div>
  );
};

const TrustedBySection = () => {
  return (
    <div className="bg-[#191919] h-[155px] mb-20">
      <div className=" ">
        <h2 className="text-white  pl-[24px] pt-[40px] text-[48px] font-semibold">
          Trusted by Leaders & Innovators
        </h2>
        <div className="flex items-center justify-end space-x-8  ">
          <img
            src="/path-to-logo1.png"
            alt="Logo 1"
            className="h- opacity-75 hover:opacity-100 transition"
          />
          <img
            src="/path-to-logo2.png"
            alt="Logo 2"
            className="h- opacity-75 hover:opacity-100 transition"
          />
          <img
            src="/path-to-logo3.png"
            alt="Logo 3"
            className="h- opacity-75 hover:opacity-100 transition"
          />
          <img
            src="/path-to-logo4.png"
            alt="Logo 4"
            className="h opacity-75 hover:opacity-100 transition"
          />
          <img
            src="/path-to-logo5.png"
            alt="Logo 5"
            className="h opacity-75 hover:opacity-100 transition"
          />
        </div>
      </div>
    </div>
  );
};

const CombinedSection = () => {
  return (
    <div>
      {/* Blockchain Development Section */}
      <TrustedBySection />
      <BlockchainDevelopmentSection />
      
      {/* Trusted By Section */}
     
    </div>
  );
};

export default CombinedSection;
