"use client";
import HeaderText from "@/components/text/HeaderText";
import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiMobile2 } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePeople, MdOutlineVerifiedUser } from "react-icons/md";
import { PiStorefront } from "react-icons/pi";
import { VscPercentage } from "react-icons/vsc";

const serviceData = [
  {
    icon: <FaLocationDot />,
    title: "Local Discovery",
    desc: "Find deals from stores near you with smart location tech.",
    color: "text-rose-500",
  },
  {
    icon: <FaBell />,
    title: "Instant Alerts",
    desc: "Get notified when favorite stores drop new deals.",
    color: "text-yellow-500",
  },
  {
    icon: <VscPercentage />,
    title: "Exclusive Discounts",
    desc: "Access member-only deals and early bird offers.",
    color: "text-rose-500",
  },
  {
    icon: <CiMobile2 />,
    title: "Mobile Optimized",
    desc: "Seamless experience across all your devices.",
    color: "text-green-500",
  },
  {
    icon: <PiStorefront />,
    title: "Easy Store Management",
    desc: "Simple tools for businesses to create and manage deals.",
    color: "text-gray-500",
  },
  {
    icon: <MdOutlinePeople />,
    title: "Community Powered",
    desc: "Share and discover deals with smart shoppers.",
  },
  {
    icon: <AiFillThunderbolt />,
    title: "Real-Time Sync",
    desc: "Live deal updates and inventory tracking.",
    color: "text-orange-500",
  },
  {
    icon: <MdOutlineVerifiedUser />,
    title: "Verified & Secure",
    desc: "All deals are verified, ensuring authenticity and safety.",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="mb-16 sm:mb-24 lg:mb-32 py-8 sm:py-12 lg:py-16 bg-shape border-y-2 border-[#353735] relative group"
      id="features"
    >
      <div className="absolute inset-0 bg-blue-800/20 rounded-3xl blur-2xl transition-colors duration-300" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <HeaderText
            title="Everything You Need. Nothing You Don't"
            required={false}
            description="TheDealsFr is packed with powerful features to make saving money and discovering local businesses easier than ever."
            className="text-white"
          />
        </div>

        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-level hidden lg:block"></div>

              {serviceData.map((service, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-6 sm:mb-8 lg:mb-12 ${
                    index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div
                    className={`bg-black/70 rounded-2xl border-2 border-gray-100 shadow-lg p-4 sm:p-6 w-full max-w-md hover:shadow-xl transition-all duration-300 ${
                      index % 2 === 0
                        ? "lg:mr-auto lg:ml-8"
                        : "lg:ml-auto lg:mr-8"
                    }`}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-lg sm:text-xl ${service.color}`}
                      >
                        {service.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                          {service.title}
                        </h3>
                        <p className="text-white text-xs sm:text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
