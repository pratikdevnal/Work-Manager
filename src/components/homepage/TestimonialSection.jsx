"use client";
import React, { useState } from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Product Manager",
      text: "I love how this task manager keeps me organized and helps me stay on top of my tasks. It has improved my productivity significantly.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Freelancer",
      text: "As a freelancer, I rely on task management tools to keep track of my projects. This one is simple to use and has all the features I need.",
    },
    {
      id: 3,
      name: "David Johnson",
      role: "Entrepreneur",
      text: "Task Manager has become an essential part of my business operations. It is user-friendly and has helped me ,streamline my work.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1
    );
  };

  return (
    <div className="w-full h-48 flex justify-center items-center text-center bg-blue-100 mx-auto py-8">
      <div className="relative">
        <div className="bg-white max-w-lg h-40 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-black font-semibold">
            {testimonials[currentTestimonial].text}
          </p>
          <p className="mt-4 text-gray-600">
            - {testimonials[currentTestimonial].name},{" "}
            {testimonials[currentTestimonial].role}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between space-x-4 mt-4">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 mb-4"
          >
            &lt;
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-500 text-white rounded-full transition duration-300 mb-4"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
