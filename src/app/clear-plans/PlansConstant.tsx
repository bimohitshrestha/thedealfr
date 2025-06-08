import { FiSettings, FiStar, FiTrendingUp, FiZap } from "react-icons/fi";

export const plans = [
  {
    name: "Starter",
    icon: <FiZap className="w-6 h-6 text-amber-400" />,
    description: "For new businesses.",
    price: "₹999",

    features: ["50 Deals/mo", "Basic Analytics", "Email Support"],
    buttonText: "Get Started",
    gradientFrom: "from-amber-700",
    borderColor: "border-orange-200",
    shadow: "shadow-orange-300/30",
    gradientTo: "to-orange-300",
    highlight: false,
  },
  {
    name: "Pro",
    icon: <FiTrendingUp className="w-6 h-6 text-white" />,
    description: "Growing Business",
    price: "₹2,499",

    features: [
      "Unlimited Deals",
      "Advanced Analytics",
      "Priority Support",
      "Custom Promotions",
    ],
    buttonText: "Choose Pro",
    gradientFrom: "from-cyan-200",
    borderColor: "border-cyan-500",
    gradientTo: "to-blue-800",
    highlight: true,
    buttonBg: "bg-gradient-to-r from-cyan-500 to-blue-500 text-black",
    badge: {
      text: "Most Popular",
      icon: <FiStar className="w-4 h-4" />,
    },
  },
  {
    name: "Enterprise",
    icon: <FiSettings className="w-6 h-6 text-white" />,
    description: "Large scale needs.",
    price: "Custom",
    originalPrice: null,
    features: [
      "All Pro Features",
      "Dedicated  Manager",
      "Api Access",
      "Custom Integration",
    ],
    buttonText: "Contact Us",
    shadow: "shadow-purple-300/30",

    borderColor: "border-purple-300",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    highlight: false,
  },
];
