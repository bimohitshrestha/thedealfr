"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { LuStore } from "react-icons/lu";

import HeroSection from "../herosection/HeroSection";
import ButtonText from "../button/ButtonText";
import ButtonWhiteText from "../button/ButtonWhiteText";
import { navigationItems } from "./NavbarItems";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  return (
    <>
      <section className="relative w-full min-h-screen mb-16 bg-black">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white bg-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-white font-bold text-lg sm:text-xl leading-tight">
                <p>The</p>
                <p>DealsFr.</p>
                <p className="text-xs sm:text-sm font-normal">Deals For Real</p>
              </div>
            </Link>

            <div className="hidden lg:flex space-x-6 items-center">
              {navigationItems.map(({ href, label }) => {
                const isActive = activeItem === href;
                return (
                  <Link key={href} href={href}>
                    <div
                      onClick={() => setActiveItem(href)}
                      className={`relative px-3 py-2 text-white hover:text-[#2bcd77] transition duration-200 ${
                        isActive ? "font-bold text-blue-500" : ""
                      }`}
                    >
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <ButtonWhiteText
                name="Download App"
                icon={<FaMobileAlt className=" w-4 h-4" />}
              />

              <ButtonText
                name="Register Store"
                href="/#become-partner"
                icon={
                  <LuStore className="text-white hover:text-black w-4 h-4" />
                }
              />
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                className="text-white p-1.5 sm:p-2 rounded-md focus:outline-none focus:ring-2 touch-manipulation"
              >
                {isMenuOpen ? (
                  <FiX size={20} className="sm:w-6 sm:h-6" />
                ) : (
                  <FiMenu size={20} className="sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed top-[65px] sm:top-[73px] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6"
            >
              <div className="flex flex-col space-y-2 sm:space-y-3">
                {navigationItems.map(({ href, label }) => (
                  <Link key={href} href={href}>
                    <div
                      onClick={() => {
                        setActiveItem(href);
                        setIsMenuOpen(false);
                      }}
                      className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-md text-white text-sm sm:text-base hover:bg-white/10 transition touch-manipulation ${
                        activeItem === href
                          ? "text-blue-500 font-semibold bg-white/5"
                          : ""
                      }`}
                    >
                      {label}
                    </div>
                  </Link>
                ))}

                <div className="pt-2 sm:pt-3 space-y-2 sm:space-y-3">
                  <div className="transform scale-95 sm:scale-100">
                    <ButtonWhiteText
                      name="Download App"
                      icon={
                        <FaMobileAlt className="text-green-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      }
                    />
                  </div>
                  <div className="transform scale-95 sm:scale-100">
                    <ButtonText
                      name="Register Store"
                      icon={
                        <LuStore className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      }
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-[65px] sm:pt-[73px] lg:pt-28">
          <HeroSection />
        </div>
      </section>
    </>
  );
}
