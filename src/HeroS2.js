import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Scale Your Business as You Go!",
      bg: 'bg-[url("https://www.kalp.studio/_next/image?url=https%3A%2F%2Fprod-kalpstudio-website.s3.ap-south-1.amazonaws.com%2Fcard1.webp&w=640&q=75")]',
    },
    {
      title: "Ready to use Smart Contracts",
      bg: "bg-[url('https://www.kalp.studio/_next/image?url=https%3A%2F%2Fprod-kalpstudio-website.s3.ap-south-1.amazonaws.com%2Fcard3.webp&w=640&q=75')]",
    },
    {
      title: "Built on Legally Compliant Chain",
      bg: "bg-[url('https://www.kalp.studio/_next/image?url=https%3A%2F%2Fprod-kalpstudio-website.s3.ap-south-1.amazonaws.com%2Fcard2.webp&w=640&q=75')]",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container mx-auto px-8 py-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Main Feature Card */}
        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl h-[600px]">
          <div
            className={`absolute inset-0 ${slides[currentSlide].bg} bg-cover bg-center `}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative h-full p-8 flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-white mt-4 mb-2">
              {slides[currentSlide].title}
            </h1>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-[#CBFD1326] rounded-3xl p-8 space-y-6 flex flex-col justify-between h-[600px]">
          {[
            { label: "Reduction in cost & time", value: "90%" },
            { label: "Faster deployments", value: "10x" },
            { label: "DApps", value: "20+" },
          ].map((stat, index) => (
            <div key={index}>
              <h2 className="text-[64px] font-bold">{stat.value}</h2>
              <p className="text-gray-600 text-[16px] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-6 h-[600px]">
          {[
            {
              title: "Elevate with Kalp Chain",
              bg: "bg-indigo-50",
              textColor: "text-indigo-600",
              borderColor: "border-indigo-200",
              hoverBg: "hover:bg-indigo-100",
            },
            {
              title: "Integrate Kalp Wallet",
              bg: "bg-gray-900",
              textColor: "text-white",
              borderColor: "border-gray-700",
              hoverBg: "hover:bg-gray-800",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-3xl p-8 flex flex-col justify-between h-[288px]`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <button
                  className={`p-2 rounded-full border ${feature.borderColor} ${feature.hoverBg}`}
                >
                  <ArrowRight className={`w-5 h-5 ${feature.textColor}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
