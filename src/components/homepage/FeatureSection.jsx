import React from "react";
import {
  FaTasks,
  FaClock,
  FaChartLine,
  FaClipboard,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

const FeatureSection = () => {
  const featureData = [
    {
      icon: <FaTasks className="w-12 h-12" />,
      title: "Task Management",
      description:
        "Organize your tasks efficiently and stay on top of your work.",
    },
    {
      icon: <FaClock className="w-12 h-12" />,
      title: "Time Tracking",
      description:
        "Monitor your time and boost productivity with insightful analytics.",
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Productivity Insights",
      description:
        "Gain valuable insights into your productivity to optimize your workflow.",
    },
    {
      icon: <FaClipboard className="w-12 h-12" />,
      title: "Task Prioritization",
      description:
        "Prioritize your tasks effectively and focus on what matters most.",
    },
    {
      icon: <FaCheckCircle className="w-12 h-12" />,
      title: "Goal Achievement",
      description:
        "Set and achieve your goals with our goal tracking features.",
    },
    {
      icon: <FaUsers className="w-12 h-12" />,
      title: "Collaboration",
      description:
        "Collaborate seamlessly with your team on tasks and projects.",
    },
  ];

  const animationStyle = {
    animation: "upDownAnimation 2s infinite ease-in-out",
  };

  return (
    <section className="py-16 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Unlock the power of our productivity app with these features.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap -m-4">
            {featureData.map((feature, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div
                  className="rounded-md shadow-md p-6 bg-white"
                  style={animationStyle}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
