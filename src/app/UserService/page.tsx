"use client";
import HeaderText from "@/components/text/HeaderText";
import React from "react";
import { serviceData } from "./ServiceDataConstant";

const ServicesSection = () => {
  return (
    <section
      className="mb-16 py-6  bg-shape border-y-2 border-[#353735] relative group"
      id="features"
    >
      <div className="absolute inset-0 bg-blue-800/20 rounded-3xl blur-2xl transition-colors duration-300" />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <HeaderText
            title="Everything You Need. Nothing You Don't"
            required={false}
            description="TheDealsFr is packed with powerful features to make saving money and discovering local businesses easier than ever."
            className="text-white"
          />
        </div>

        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-level hidden xl:block"></div>

              {serviceData.map((service, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-12 ${
                    index % 2 === 0
                      ? "xl:justify-start justify-center"
                      : "xl:justify-end justify-center"
                  }`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#33b5e5] rounded-full border-2 border-white hidden lg:block "></div>

                  <div
                    className={`bg-black/70 rounded-xl sm:rounded-2xl border-2 border-gray-100 shadow-lg p-3 sm:p-4 md:p-5 lg:p-6 w-full hover:shadow-xl transition-all duration-300 ${
                      index % 2 === 0
                        ? "xl:mr-auto xl:ml-8 max-w-xs sm:max-w-sm md:max-w-md"
                        : "xl:ml-auto xl:mr-8 max-w-xs sm:max-w-sm md:max-w-md"
                    }`}
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div
                        className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-lg md:text-xl ${service.color}`}
                      >
                        {service.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-white text-xs sm:text-sm md:text-sm leading-relaxed opacity-90">
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
