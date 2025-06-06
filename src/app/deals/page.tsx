"use client";
import ButtonText from "@/components/button/ButtonText";
import HeaderText from "@/components/text/HeaderText";
import { FaApple, FaPlay } from "react-icons/fa";

const data = [
  { name: "Real-time deal alerts" },
  { name: "Intuitive map view" },
  { name: "Personalized recommendations" },
  { name: "One-tap deal redemption" },
];

const Deals = () => {
  return (
    <div className="mb-16 sm:mb-24 lg:mb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20"></div>

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-[360px] sm:w-72 sm:h-[420px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] shadow-lg border border-gray-700 p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-[1.5rem] flex items-center justify-center">
                  <div className="text-center space-y-3 sm:space-y-4 px-2">
                    <p className="text-white font-bold text-2xl sm:text-3xl">
                      TheDealsFr.
                    </p>
                    <p className="text-white font-medium text-base sm:text-lg">
                      Your local deal finder.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
                      <p className="text-white text-xs sm:text-sm">
                        Find Stores Nearby
                      </p>
                      <p className="text-white text-xs sm:text-sm">
                        Exclusive Discounts
                      </p>
                      <p className="text-white text-xs sm:text-sm">
                        Instant Notifications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-6 sm:space-y-8 max-w-lg mx-auto lg:mx-0">
              <HeaderText
                title="Deals in Your Pocket. Always."
                description="Our sleek mobile app gives you instant access to the best local deals. Designed for modern shoppers seeking convenience and savings."
                className="text-white"
              />

              <div className="space-y-4 sm:space-y-6">
                {data.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-gray-300 group-hover:text-white transition-colors duration-300">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
                <ButtonText name="App Store" icon={<FaApple />} />
                <ButtonText name="Google Play" icon={<FaPlay />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
