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
    <div className="p-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Main Feature Card */}
        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl h-[600px]">
          {/* Slider Background */}
          <div
            className={`absolute inset-0 ${slides[ currentSlide].bg} bg-cover bg-center`}
            style={{
              clipPath:
                "path('M0,0 L100%,0 L100%,90% C75%,100% 25%,100% 0,90% Z')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>

          {/* Slider Content */}
          <div className="relative h-full p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mt-4 mb-2">
                {slides[currentSlide].title}
              </h1>
            </div>
          </div>

          {/* Navigation Arrows and Dots */}
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
        <div className="bg-[#CBFD1326] rounded-3xl p-8 space-y-6 flex flex-col justify-between h-[600px] ">
          <div>
            <h2 className="text-[64px] font-bold w-[248px] h-[87px]">90%</h2>
            <p className="text-gray-600 text-[16px] w-[212px] h-[21px] mt-2">Reduction in cost & time</p>
          </div>
          <div>
            <h2 className="text-[64px] font-bold w-[248px] h-[87px]">10x</h2>
            <p className="text-[16px] text-gray-600 mt-2">Faster deployments</p>
          </div>
          <div>
            <h2 className="text-[64px] font-bold w-[248px] h-[87px]">20+</h2>
            <p className="text-[16px] text-gray-600 w-[212px] h-[21px] mt-2">DApps</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-[24px] h-[600px]">
          <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col justify-between h-[288px]">
            <div className="flex justify-start items-start">
              <div>
                <h3 className="text-2xl font-bold text-indigo-600">
                  Elevate with Kalp Chain
                </h3>
              </div>
              <button className="p-2 rounded-full border border-indigo-200 hover:bg-indigo-100 ml-auto">
                <ArrowRight className="w-5 h-5 text-indigo-600" />
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 flex flex-col justify-between  h-[288px]">
            <div className="flex justify-start items-end">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Integrate Kalp Wallet
                </h3>
              </div>
              <button className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 ml-auto">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;