import React, { useState } from "react";
import { Package, Gamepad, Home, Heart, Film, ArrowRight } from "lucide-react";

const industries = [
  { title: "SUPPLY CHAIN", icon: <Package size={67} /> },
  { title: "GOVERNMENT & PUBLIC", icon: <Gamepad size={67} /> },
  { title: "GAMING", icon: <Gamepad size={67} /> },
  { title: "RWA TOKENIZATION", icon: <Home size={67} /> },
  { title: "HEALTHCARE", icon: <Heart size={67} /> },
  { title: "METAVERSE", icon: <Film size={67} /> },
  { title: "MEDIA", icon: <Film size={67} /> },
  { title: "VIRTUAL ASSET EXCHANGE", icon: <ArrowRight size={67} /> },
];

const App = () => {
  const [active, setActive] = useState("MEDIA");

  return (
    <div className="bg-[#EFEFEF] flex flex-col items-center justify-center w-full  py-16 ">
      <div  className="container mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-[16px] mb-7 uppercase text-purple-600 font-bold tracking-widest">
          Industries
        </h4>
        <div className="w-full max-w-[1340px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Get to production <span className="text-purple-600">10x faster</span>
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">and secure</h1>
        </div>
        <p className="text-gray-600 max-w-[1120px] mx-auto text-[16px] mt-4">
          Various industries, from banking to entertainment, are recognizing the innovative potential of blockchain.
          Streamlining the implementation of blockchain for companies, providing all essential components for
          enterprise-grade networks and deployments.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1340px] w-full mx-auto">
        {industries.map((industry) => (
          <div
            key={industry.title}
            onClick={() => setActive(industry.title)}
            className={`flex flex-col items-center justify-center rounded-[30px] shadow-lg cursor-pointer w-[294px] h-[248px] bg-white text-black hover:bg-black hover:text-white hover:rounded-bl-[80px] transition-all ${
              active === industry.title ? "bg-white text-black" : ""
            }`}
          >
            <div className="mb-4">{industry.icon}</div>
            <h3 className="text-[20px] font-semibold">{industry.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default App;
