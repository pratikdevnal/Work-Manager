import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ActionSection = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Take the first step toward improved productivity with our app.
        </p>
        <div className="mt-8">
          <a
            href="#get-started"
            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Get Started <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
