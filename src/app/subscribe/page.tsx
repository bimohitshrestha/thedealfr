"use client";
import { useState } from "react";
import InputField from "@/components/field/InputField";
import { GiSparkles } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";

import ButtonText from "@/components/button/ButtonText";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="text-center mb-16  py-12 sm:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-blue-900/20 to-cyan-900/20"></div>

      <div className="absolute top-8 left-8 text-purple-400/30 hidden xs:block">
        <GiSparkles size={50} />
      </div>
      <div className="absolute bottom-8 left-8 text-rose-400/30 hidden xs:block">
        <IoSparklesSharp size={50} />
      </div>
      <div className="absolute bottom-8 right-8 text-blue-400/30 hidden xs:block">
        <GiSparkles size={50} />
      </div>
      <div className="absolute top-16 right-16 text-purple-300/20 hidden xs:block">
        <IoSparklesSharp size={50} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto">
          <IoMdMail className="text-black w-8 h-8" />
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent mb-4">
          {`Don't Miss Out`}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          Join our newsletter for the latest deals, features, and news from
          TheDealsFr.
        </p>

        {subscribed ? (
          <div className="text-green-400 text-base sm:text-lg font-semibold px-4">
            {`You're subscribed! Thanks!`}
          </div>
        ) : (
          <form
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex-1 w-full">
              <InputField
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={handleChange}
              />
            </div>

            <ButtonText name="Subscribe" type="submit" />
          </form>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400 px-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>No spam, ever. Unsubscribe anytime.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
