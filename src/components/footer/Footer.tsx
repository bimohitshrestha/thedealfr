import React from "react";
import {
  contactInfo,
  quickLinks,
  socialLinks,
  supportLinks,
} from "./FooterConstant";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 py-8 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">TheDealsFr</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-level to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-sm">
              Discover local deals and help businesses thrive. We bridge
              shoppers and local stores in a smarter way.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="p-3 bg-gray-800 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-200 mr-0 group-hover:mr-3 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Support
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 transition-all duration-200 mr-0 group-hover:mr-3 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.link}
                    className="text-gray-400 hover:text-white transition-all duration-200 flex items-center gap-3 text-sm group p-2 -m-2 rounded-lg hover:bg-gray-800/30"
                  >
                    <span
                      className={`p-2 ${contact.bgColor} rounded-lg ${contact.hoverColor} transition-all duration-200`}
                    >
                      {contact.icon}
                    </span>
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700/50 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="text-center text-sm text-gray-500">
            <p className="flex items-center justify-center gap-2">
              <span>
                &copy; {new Date().getFullYear()} TheDealsFr. All rights
                reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
