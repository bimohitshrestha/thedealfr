"use client";
import ButtonWhiteText from "@/components/button/ButtonWhiteText";
import HeaderText from "@/components/text/HeaderText";
import { FiCheck } from "react-icons/fi";
import { plans } from "./PlansConstant";

const ClearPlans = () => {
  return (
    <section
      className="min-h-screen py-16  md:flex md:flex-col md:items-center md:justify-center text-white px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-gray-950 to-black"
      id="pricing"
    >
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <HeaderText
            title="Clear Plans. Fair Prices."
            description="Choose a plan that scales with your business. No hidden fees, cancel anytime."
            className="text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative group h-full">
              {plan.highlight && plan.badge && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1 sm:gap-2">
                    {plan.badge.icon}
                    <span className="whitespace-nowrap">{plan.badge.text}</span>
                  </div>
                </div>
              )}

              <div
                className={`relative border rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 h-full flex flex-col shadow-md hover:shadow-xl hover:scale-[1.01] ${
                  plan.highlight
                    ? "border-cyan-500 bg-black/80 backdrop-blur-md shadow-cyan-500/30"
                    : `${plan.borderColor} ${plan.shadow} backdrop-blur-md`
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div
                    className={`p-2 sm:p-3 bg-gradient-to-r ${plan.gradientFrom} ${plan.gradientTo} rounded-lg sm:rounded-xl shadow-lg flex-shrink-0`}
                  >
                    {plan.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white truncate">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-1 sm:gap-2">
                    <span
                      className={`text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-l ${plan.gradientFrom} ${plan.gradientTo} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    {plan.name !== "Enterprise" && (
                      <span className="text-gray-400 text-sm sm:text-base md:text-lg">
                        /month
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <div
                        className={`mt-0.5 sm:mt-1 p-1 sm:p-1.5 rounded-full bg-gradient-to-r ${plan.gradientFrom} ${plan.gradientTo} flex-shrink-0`}
                      >
                        <FiCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                      </div>
                      <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <ButtonWhiteText
                    name={plan.buttonText}
                    className={`w-full flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 text-black text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl transition-all duration-300 ${
                      plan.highlight
                        ? "bg-black text-black shadow-lg hover:bg-gray-100"
                        : `${plan.gradientFrom} ${plan.gradientTo} text-black`
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClearPlans;
