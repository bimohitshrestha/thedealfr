import React from "react";
import ButtonText from "../button/ButtonText";
import ButtonWhiteText from "../button/ButtonWhiteText";
import { FaMobileAlt } from "react-icons/fa";
import { LuStore } from "react-icons/lu";
import { features, stats } from "./HeroSectionConstant";

const HeroSection = () => {
  return (
    <section className="py-16 bg-black text-white" id="/">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">
        <h1 className="text-5xl sm:text-7xl font-[1000] leading-tight mb-2">
          Discover <span className="text-gradient">Local Deals</span>,
          Effortlessly.
        </h1>
        <p className="text-xl text-slate-300 max-w-xl mx-auto">
          TheDealsFr connects you with exclusive discounts from nearby stores.
          Save smarter, support local.
        </p>

        <div className="flex flex-wrap justify-center mt-10 gap-6">
          <ButtonText
            name="Get The App"
            icon={<FaMobileAlt className="text-white w-4 h-4" />}
          />
          <ButtonWhiteText
            name="List Your Store"
            icon={<LuStore className="w-4 h-4" />}
          />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 px-4 sm:px-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-all"
            >
              {item.icon}
              <p className="font-medium text-sm text-white">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto px-4 sm:px-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl text-center border border-white/20"
            >
              <p className="text-2xl font-bold text-level">{item.number}</p>
              <p className="text-sm text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
