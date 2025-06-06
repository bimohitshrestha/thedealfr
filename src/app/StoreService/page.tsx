"use client";
import ButtonText from "@/components/button/ButtonText";
import HeaderText from "@/components/text/HeaderText";
import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { FiTarget } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";

const storeData = [
  {
    icon: <MdOutlinePeople />,
    title: "New Customers",
    desc: "Connect with locals actively seeking deals.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: <AiOutlineRise />,
    title: "Boost Sales",
    desc: "Drive revenue with targeted promotions.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: <FaRegChartBar />,
    title: "Track Performance",
    desc: "Real-time analytics on customer engagement.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: <FcAdvertising />,
    title: "Launch Product",
    desc: "Announce new arrivals effectively.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: <FiTarget />,
    title: "Precise Marketing",
    desc: "Reach users by location and interest.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: <IoRocketOutline />,
    title: "Quick Setup",
    desc: "Get started in minutes, no hassle.",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

const StoreSection = () => {
  return (
    <section className="mb-32  relative" id="features">
      <div className="absolute inset-0 bg-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <HeaderText
            title="Amplify Your Local Reach."
            required={false}
            description="Empower your business with TheDealsFr. Attract more customers, increase sales, and gain valuable insights with our easy-to-use platform."
            className="text-white"
          />
          <div className="flex items-center justify-center mt-8">
            <ButtonText name="Partner With Us" />
          </div>
        </div>

        <div className="relative ">
          <div className="backdrop-blur-xl  bg-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {storeData.map((store, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px]">
                    <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
                  </div>

                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.05] group-hover:shadow-2xl group-hover:border-white/30">
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 ${store.bgColor} ${store.iconColor} group-hover:scale-110 group-hover:rotate-6`}
                      >
                        {store.icon}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                        {store.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        {store.desc}
                      </p>
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

export default StoreSection;
