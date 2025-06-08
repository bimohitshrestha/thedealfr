import { AiFillThunderbolt } from "react-icons/ai";
import { CiMobile2 } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePeople, MdOutlineVerifiedUser } from "react-icons/md";
import { PiStorefront } from "react-icons/pi";
import { VscPercentage } from "react-icons/vsc";

export const serviceData = [
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
