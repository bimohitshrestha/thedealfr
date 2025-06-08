import { ReactElement } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaPhone, FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export interface LinkItem {
  label: string;
  link: string;
}

export interface ContactItem {
  icon: ReactElement;
  label: string;
  link: string;
  bgColor: string;
  hoverColor: string;
}

export interface SocialItem {
  icon: ReactElement;
  link: string;
}

export const socialLinks: SocialItem[] = [
  { icon: <FaFacebook className="w-5 h-5" />, link: "#" },
  { icon: <BsTwitterX className="w-5 h-5" />, link: "#" },
  { icon: <FaInstagram className="w-5 h-5" />, link: "#" },
  { icon: <FaLinkedin className="w-5 h-5" />, link: "#" },
];

export const quickLinks: LinkItem[] = [
  { label: "Features", link: "#features" },
  { label: "For Stores", link: "#forstores" },
  { label: "Mobile App", link: "#mobile-app" },
  { label: "Pricing", link: "#pricing" },
];

export const supportLinks: LinkItem[] = [
  { label: "Help Center", link: "#" },
  { label: "Terms of Service", link: "#" },
  { label: "Privacy Policy", link: "#" },
  { label: "Cookie Policy", link: "#" },
];

export const contactInfo: ContactItem[] = [
  {
    icon: <MdOutlineMail className="w-4 h-4 group-hover:text-green-400" />,
    label: "hello@thedealsfr.com",
    link: "#",
    bgColor: "bg-gray-800/50",
    hoverColor: "group-hover:bg-green-600/20",
  },
  {
    icon: <FaPhone className="w-4 h-4 group-hover:text-blue-400" />,
    label: "+91 123 456 7890",
    link: "#",
    bgColor: "bg-gray-800/50",
    hoverColor: "group-hover:bg-blue-600/20",
  },
];
