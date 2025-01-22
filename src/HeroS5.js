import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Naveen Sachdeva",
    title: "CBO, SMART Dubai",
    text: "After going through different blockchain ecosystems, my experience with Kalp Studio has been incredible. Its service to integrate regulatory compliances has revolutionized our asset tokenization processes. Kalp Studio is a true game-changer in DeFi.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Prateek Jain",
    title: "Product Manager, SMART Dubai",
    text: "Kalp Studio has been phenomenal in assisting us with blockchain integration. Their support and expertise are unmatched.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Ashish Minocha",
    title: "CBO, Mayaverse",
    text: "Working with Kalp Studio has been an incredible experience. Their solutions have transformed the way we approach blockchain.",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="p-8">
      {/* Top Section */}
      <div className="flex items-center justify-between bg-[#F1F2FB] rounded-[37px] m-[68px] p-8 h-[425px]">
        <div>
          <h3 className="text-indigo-500 font-semibold uppercase text-sm">Enterprise</h3>
          <h1 className="text-[48px] h-[57px] font-bold mt-2">Ready to Scale your business?</h1>
          <p className="text-gray-600 mt-4">
            Our ISO-certified blockchain services are foundational for delivering the best-quality services and software.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
            Request a demo
          </button>
        </div>
        <div>
          <img
            src=""
            alt="Scale Your Business"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex items-center justify-between mt-12">
        {/* Text Section */}
        <div className="w-1/2 p-6">
          <h2 className="text-[48px] font-bold">
            <span className="text-black">Kalp Studio</span> 
          <span className="text-blue-500" > Stories</span>
          </h2>
          <p >
            Don't take our word for it, we have a list of </p>
            <p>happy clients and they want you to know.
          </p>
        </div>

        

        {/* Testimonial Card Section */}
        <div className="w-1/2">
        
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full mx-auto -mt-16 border-4 border-white"
            />
            <p className="mt-6 text-gray-600">{testimonials[current].text}</p>
            <h4 className="mt-4 font-bold text-lg">{testimonials[current].name}</h4>
            <p className="text-indigo-500 text-sm">{testimonials[current].title}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center mt-6 space-x-4">
         
            <button
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={handlePrev}
            >
              &larr;
            </button>
          <h4><span>{testimonials[(current - 1 + testimonials.length) % testimonials.length].name}</span></h4>
        <p> <span> {testimonials[(current - 1 + testimonials.length) % testimonials.length].title}</span></p>
        <span>{testimonials[current].name}</span>
        <span>{testimonials[current].title}</span>   
   <button
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={handleNext}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
