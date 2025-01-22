import React, { useState } from "react";
import { Package,  Gamepad, Home, Heart, Film, ArrowRight, } from "lucide-react"; 

const industries = [
  { title: "SUPPLY CHAIN", icon: <Package /> },
  { title: "GOVERNMENT & PUBLIC", icon: <Gamepad /> },
  { title: "GAMING", icon: <Gamepad /> },
  { title: "RWA TOKENIZATION", icon: <Home /> },
  { title: "HEALTHCARE", icon: <Heart /> },
  { title: "METAVERSE", icon: <Film /> },
  { title: "MEDIA", icon: <Film /> },
  { title: "VIRTUAL ASSET EXCHANGE", icon: <ArrowRight /> },
];

const App = () => {
  const [active, setActive] = useState("MEDIA");

  return (
    <div className="bg-[#EFEFEF] min-h-screen flex flex-col items-center w-[1693px] h-[1067] py-[70px] px-[0px]">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-[16px] py-[129.88] px-[32] mb-7 rounded-md border-none uppercase text-purple-600 font-bold tracking-widest ">
          Industries
        </h4>
        <div className="w-[1340px] h-[144px]">
        <h1 className="text-[48px] md:text-5xl font-extrabold text-gray-900">
          Get to production <span className="text-purple-600">10x faster</span>{" "}</h1>
          <h1 className="text-48[px] md:text-5xl font-extrabold text-gray-900">and secure
        </h1></div>
        <p className="text-gray-600 w-[1120px] h-[41px] text-[16px] ml-[100px]">
          Various industries, from banking to entertainment, are recognizing
          the innovative potential of blockchain. Streamlining the
          implementation of blockchain for companies, providing all essential
          components for enterprise-grade networks and deployments.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-[1340px] h-[548px]  ">
        {industries.map((industry) => (
          <div
            key={industry.title}
            onClick={() => setActive(industry.title)}
            className={`flex flex-col items-center justify-center rounded-[30px] shadow-lg cursor-pointer w-[294px] h-[248px] bg-white hover:bg-black hover:text-white hover:rounded-bl-[80px] transition-all  ${
              active === industry.title
        
            }`}
          >
            <div className="text-4xl mb-4">{industry.icon}</div>
            <h3 className="text-sm font-semibold">{industry.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
