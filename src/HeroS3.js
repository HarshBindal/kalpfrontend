import React, { useState } from "react";
import {
  Lock,
  Wallet,
  Boxes,
  BarChart3,
  DollarSign,
  Layout,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

// Options for the feature cards
const options = [
  {
    title: "IPFS Storage",
    icon: <Lock />,
    description:
      "Explore a new frontier in decentralized data storage with Kalp Studio's IPFS Integration. Our platform seamlessly incorporates the InterPlanetary File System (IPFS), enabling users to store and retrieve data in a distributed and censorship-resistant manner.",
  },
  {
    title: "Smart Contract",
    icon: <Wallet />,
    description:
      "Effortlessly deploy, manage, and Kalp Studio presents Smart Contract Management, a dynamic solution for seamlessly overseeing the lifecycle of smart contracts within your projects.",
  },
  {
    title: "Digital Asset Platform",
    icon: <Boxes />,
    description:
      "Empower your digital assets with Kalp Studio's Digital Asset Platform. Designed to empower both individual developers and technical teams, the platform streamlines the process with intuitive features.",
  },
  {
    title: "NFT Platform",
    icon: <Lock />,
    description:
      "Manage and trade NFTs effortlessly with Kalp Studio's feature-rich NFT platform, utilizing blockchain technology for secure ownership verification.",
  },{
    
  }
  ,
  {
    title: "Token Creator",
    icon: <Wallet />,
    description:
      "Quickly create and deploy your own tokens with our intuitive token creation tool.",
  },
  
  {
    title: "CBDC",
    icon: <Boxes />,
    description:
      "Leverage Kalp Studio's tools to explore Central Bank Digital Currencies with secure and scalable solutions.",
  },
  {
    title: "BAAS",
    icon: <Lock />,
    description:
      "Simplify blockchain integration with our managed Blockchain-as-a-Service (BaaS).",
  },
  {
    title: "API Gateway",
    icon: <Wallet />,
    description:
      "Seamlessly integrate functionalities through our API gateway.",
  },
];

// Feature Card Component
const FeatureCard = ({ icon, title, onClick, isSelected }) => (
  <div
    className={`flex flex-col items-center justify-center p-4 transition rounded-lg cursor-pointer ${
      isSelected ? "bg-purple-600 text-white" : "hover:bg-gray-200"
    }`}
    onClick={onClick}
  >
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

// Feature Box Component
const FeatureBox = ({ title, description, icon: Icon, className }) => (
  <div
    className={`relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800 max-w-md ${className}`}
  >
    <div className="absolute -top-6 -right-6 p-4 bg-indigo-600/20 rounded-full backdrop-blur-sm">
      <Icon className="w-6 h-6 text-indigo-400" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

// Main App Component
const App = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]); // Default to the first feature

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center py-12">
          <h1 className="text-[64px] font-extrabold text-gray-900">
            <span className="text-purple-500">Scale</span> your project on our
          </h1>
          <h1 className="text-[64px] font-extrabold">robust platform</h1>
        </div>

        {/* Grid layout for feature cards and content display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature Cards Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {options.map((option, index) => (
              <FeatureCard
                key={index}
                icon={option.icon}
                title={option.title}
                onClick={() => setSelectedOption(option)}
                isSelected={selectedOption.title === option.title}
              />
            ))}
          </div>

          {/* Dynamic Content Section */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedOption.title}
            </h2>
            <p className="mt-4 text-gray-600">{selectedOption.description}</p>
            <Link to="/signup">
              <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-[#CBFD13] hover:text-black">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// BuildWith Component
const BuildWith = () => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center p-8 mt-20">
    <div className="text-center mb-20">
      <h1 className="text-4xl font-bold mb-4">
        <span className="text-lime-400">Build</span>{" "}
        <span className="text-white">with Kalp Studio</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Elevate your projects effortlessly. From creation to deployment, unlock
        innovation with Kalp Studio's powerful and user-friendly platform.
      </p>

      <div className="relative p-[40px]">
        {/* Central diamond shape */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-lime-400/20 transform rotate-45"></div>
            <div className="absolute inset-2 bg-gray-900/60 transform rotate-45 backdrop-blur-sm"></div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-2 gap-x-64 gap-y-32">
          <FeatureBox
            title="Analytics"
            description="Gain insights with Kalp Studio's analytics. Optimize decision-making, track performance, and elevate your project's success."
            icon={BarChart3}
            className="transform hover:-translate-y-2 transition-transform"
          />
          <FeatureBox
            title="Flexible pricing"
            description="Tailor costs to your needs with Kalp Studio's flexible pricing."
            icon={DollarSign}
            className="transform hover:-translate-y-2 transition-transform"
          />
          <FeatureBox
            title="Ready to use templates"
            description="Start with ease using Kalp Studio's smart contract templates."
            icon={Layout}
            className="transform hover:-translate-y-2 transition-transform"
          />
          <FeatureBox
            title="Faster MVP launch"
            description="Accelerate your MVP launch with Kalp Studio's low-code efficiency."
            icon={Rocket}
            className="transform hover:-translate-y-2 transition-transform"
          />
        </div>
      </div>
    </div>
  </div>
);

// Combined Component
const Combine = () => (
  <div>
    <App />
    <BuildWith />
  </div>
);

export default Combine;
