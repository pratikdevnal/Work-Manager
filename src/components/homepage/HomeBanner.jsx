import React from "react";
import bannersvg from "../../assets/banner.svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const BannerSection = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="w-1/3 mr-6">
          <Image
            src={bannersvg}
            alt="Banner"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="text-white text-lg flex-grow">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Our Productivity App
          </h2>
          <p className="text-gray-200 text-lg mb-6">
            Supercharge your productivity with our feature-rich app.
          </p>
          <a
            href="#learn-more"
            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Learn More <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
