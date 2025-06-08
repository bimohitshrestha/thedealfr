"use client";

import React from "react";
import { motion } from "framer-motion";

import HeaderText from "@/components/text/HeaderText";
import { steps } from "./GetStartConstant";

const GetStarted = () => {
  return (
    <section
      className="relative mb-16 py-16 px-4 sm:px-6 lg:px-8"
      id="features"
    >
      <div className="max-w-5xl mx-auto text-center">
        <HeaderText
          title="Get Started in 3 Simple Steps"
          required={false}
          className="text-white"
        />

        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 cursor-pointer">
          {steps.map(({ id, title, description, icon }, index) => (
            <motion.div
              key={id}
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[400px] group px-4 sm:px-0"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center flex-col sm:flex-row text-center sm:text-left">
                <div className="bg-blue-500 text-white p-2 sm:p-3 rounded-full text-2xl sm:text-3xl group-hover:bg-blue-400 transition-colors mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                  {icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0 sm:mt-3 mb-2 transition-all group-hover:text-blue-400">
                    {title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 text-base sm:text-lg">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
