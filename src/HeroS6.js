import React from "react";

const BlockchainDevelopmentSection = () => {
  return (      <div className="container mx-auto px-8">

    <div className="bg-gradient-to-r from-black to-[#0f0f0f] text-12 text-white   py-20  h-[453px] rounded-[37px]    mb-20 ">
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
        <button className="w-[154px] h-[52px] text-[12px] bg-white text-black  py-3 rounded-lg shadow-lg hover:bg-[#CBFD13] hover:text-black transition font-semibold">
          Start Building
        </button>
      </div>
      </div>
    </div>
  );
};
const TrustedBySection = () => {
  return (
    <div className="bg-[#191919]">
      <div className="container mx-auto px-8">
    <div className=" h-[140px] mb-20 flex items-center justify-between  ">
      {/* Left Section: Title */}
      <div className="text-left ">
        <h2 className="text-white text-[28px] md:text-[38px] font-semibold">
          Trusted by Leaders & Innovators
        </h2>
      </div>

      {/* Right Section: Logos */}
      <div className="flex items-center pl-40 space-x-8">
        <img
          src="/mayaa.png"
          alt="Mayaa Logo"
          className="w-[90px] h-[40px] filter grayscale hover:filter-none transition"
        />
        <img
          src="/niftiq.png"
          alt="Niftiq Logo"
          className="w-[90px] h-[40px] filter grayscale hover:filter-none transition"
        />
        <img
          src="/myipr.png"
          alt="MyIPR Logo"
          className="w-[90px] h-[40px] filter grayscale hover:filter-none transition"
        />
        <img
          src="/kalpify.png"
          alt="Kalpify Logo"
          className="w-[90px] h-[40px] filter grayscale hover:filter-none transition"
        />
        <img
          src="/Stoex.webp"
          alt="Logo 5"
          className="w-[100px] h-[40px] filter grayscale hover:filter-none transition"
        />
      </div>
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
