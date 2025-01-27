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
    <div className="p-8 container mx-auto">
      {/* Top Section */}
      <div className="flex items-center justify-between bg-[#F1F2FB] rounded-[37px]   h-[425px] relative">
  <div className=" p-[68px]">
    <h3 className="text-indigo-500 font-semibold uppercase text-sm">Enterprise</h3>
    <h1 className="text-[48px] h-[57px] font-bold mt-2">Ready to Scale your business?</h1>
    <p className="text-gray-600 mt-4 text-[24px] w-[954px] h-[63px] pt-6">
      Our ISO-certified blockchain services are foundational for 
      <br />
      delivering the best-quality services and software.
    </p>
    <button className="w-[154px] h-[52px] mt-[60px] bg-black text-white text-[16px] font-semibold rounded hover:bg-[#CBFD13] hover:text-black">
      Request a demo
    </button>
  </div>

  {/* Image Section */}
  <div
    style={{
      width: "460px",
      height: "417.85px",
      top: "-21px",
      right: "60px",
      gap: "0px",
      opacity: "0.7",
      
    }}
    className="absolute"
  >
    <img
      src="./Clip path group.svg"
      alt="Scale Your Business"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* Testimonials Section */}
      <div className="flex items-center justify-between mt-16 mb-20">
  {/* Text Section */}
  <div className="w-1/2 p-6">
    <h2 className="text-[48px] font-bold">
      <span className="text-black">Kalp Studio</span>
      <span className="text-[#4A3FC5]"> Stories</span>
    </h2>
    <p className="text-[24px]">Don't take our word for it, we have a list of </p>
    <p className="text-[24px]">happy clients and they want you to know.</p>
  </div>

  {/* Testimonial Card Section */}
  <div className="w-1/2 flex items-center justify-center relative">
    {/* Parent Card (Green Card) */}
    <div
      style={{
        width: "613px",
        height: "350px",
        borderRadius: "58px ",
        backgroundColor: "#CBFD13",

        opacity: "1",
        position: "absolute",
        
        right: "-1px", // Move part of the green card outside the container on the right
        top: "-20px", // Move part of the green card outside the container on the top
        boxShadow: "0px 12px 32px -4px #00000014",
        zIndex: 1, // Ensure it is behind the white card
      }}
    ></div>

    {/* Child Card (White Card) */}
    <div
      style={{
        width: "583px",
        height: "350px",
        borderRadius: "54px",
        backgroundColor: "white",
        opacity: "1",
        position: "relative",
        zIndex: 2, // Ensure it appears above the green card
        boxShadow: "0px 12px 32px -4px #00000014",
      }}
      className="p-8"
    >
      {/* Image Placeholder */}
      <div
        style={{
          width: "131px",
          height: "131px",
          borderRadius: "50%",
          backgroundColor: "#EFEFEF",
          border: "6px solid white",
          position: "absolute",
          top: "-50px", // Position above the white card
          left: "256px", // Center horizontally within the card
        }}
        className="flex items-center justify-center"
      >
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <p className="mt-12 text-gray-600">{testimonials[current].text}</p>
      <h4 className="mt-4 font-bold text-lg text-center">{testimonials[current].name}</h4>
      <p className="text-indigo-500 text-sm text-center">{testimonials[current].title}</p>
    </div>
  </div>
</div>
{/* Navigation Arrows */}
<div
  className="flex flex-col items-center mt-[24px] "
  style={{
    width: "644px", // Fixed width for the navigation container
    gap: "24px", // Space between child box and navigation
  }}
>
  {/* Navigation Arrows and Name/Title Section */}
  {/* Container for Navigation */}
<div
  className="flex flex-col justify-end ml-[1600px] items-center mt-[16px]"
  style={{
    width: "100%", // Ensure it spans the full width
    alignItems: "center", // Center align
  }}
>
  {/* Navigation Arrows and Name/Title Section */}
  <div
    className="flex justify-between items-center"
    style={{
      width: "644px", // Fixed width of navigation container
      height: "52px", // Fixed height of the container
    }}
  >
    {/* Left Arrow with Previous Name and Title */}
    <div className="flex items-center">
      <button
        className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded-full hover:bg-[#CBFD13]"
        onClick={handlePrev}
      >
        &larr;
      </button>
      <div className="ml-4 text-left">
        <p className="text-[24px] font-bold">
          {testimonials[(current - 1 + testimonials.length) % testimonials.length].name}
        </p>
        <p className="text-sm text-gray-600">
          {testimonials[(current - 1 + testimonials.length) % testimonials.length].title}
        </p>
      </div>
    </div>

    {/* Right Arrow with Current Name and Title */}
    <div className="flex items-center">
      <div className="mr-4 text-right">
        <p className="text-[24px] font-bold">{testimonials[current].name}</p>
        <p className="text-sm text-gray-600">{testimonials[current].title}</p>
      </div>
      <button
        className="w-[50px] h-[50px] flex items-center justify-center bg-gray-200 rounded-full hover:bg-[#CBFD13]"
        onClick={handleNext}
      >
        &rarr;
      </button>
    </div>
  </div>
</div>

</div>



    </div>
    
  );
};

export default TestimonialSection;
