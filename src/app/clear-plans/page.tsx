"use client";
import ButtonWhiteText from "@/components/button/ButtonWhiteText";
import HeaderText from "@/components/text/HeaderText";
import { FiCheck } from "react-icons/fi";
import { plans } from "./PlansConstant";

const ClearPlans = () => {
  return (
    <section
      className="min-h-screen py-20 text-white px-6 relative overflow-hidden bg-gradient-to-b from-gray-950 to-black"
      id="pricing"
    >
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <HeaderText
            title="Clear Plans. Fair Prices."
            description="Choose a plan that scales with your business. No hidden fees, cancel anytime."
            className="text-white"
          />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative group h-full">
              {plan.highlight && plan.badge && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-5 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2">
                    {plan.badge.icon}
                    {plan.badge.text}
                  </div>
                </div>
              )}

              <div
                className={`relative border rounded-3xl p-8 transition-all duration-500 h-full flex flex-col shadow-md hover:shadow-xl hover:scale-[1.01] ${
                  plan.highlight
                    ? "border-cyan-500 bg-black/80 backdrop-blur-md shadow-cyan-500/30"
                    : `${plan.borderColor} ${plan.shadow} backdrop-blur-md`
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 bg-gradient-to-r ${plan.gradientFrom} ${plan.gradientTo} rounded-xl shadow-lg`}
                  >
                    {plan.icon}
                  </div>
                  <div className="">
                    <h3 className="text-xl font-semibold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-5xl font-extrabold bg-gradient-to-l ${plan.gradientFrom} ${plan.gradientTo} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    {plan.name !== "Enterprise" && (
                      <span className="text-gray-400 text-lg">/month</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 ">
                      <div
                        className={`mt-1 p-1.5 rounded-full bg-gradient-to-r ${plan.gradientFrom} ${plan.gradientTo}`}
                      >
                        <FiCheck className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <ButtonWhiteText
                    name={plan.buttonText}
                    className={`w-full flex items-center justify-center px-4 py-3 text-black text-sm font-medium rounded-xl transition-all duration-300 ${
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
