"use client";
import ButtonText from "@/components/button/ButtonText";
import FormField from "@/components/form/FormField";
import HeaderText from "@/components/text/HeaderText";

import type React from "react";
import { useState } from "react";

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    website: "",
    description: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form submitted:", formData);

    setIsSubmitting(false);
  };

  return (
    <section
      className="mb-16 py-16 relative overflow-hidden"
      id="become-partner"
    >
      <div className="absolute inset-0 bg-blue-800/10 rounded-3xl blur-2xl transition-colors duration-300" />

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <HeaderText
            title="Ready to Elevate Your Business?"
            required={false}
            description="Join TheDealsFr today. Registration is simple, and our team is here to support your growth every step of the way."
            className="text-white"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Becoming a partner
              </h3>
              <p className="text-gray-400">
                Join TheDealsFr and grow your business.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField formData={formData} handleChange={handleChange} />

              <div className="pt-4 w-full flex items-center justify-center">
                <ButtonText
                  type="submit"
                  name={isSubmitting ? "Submitting..." : "Submit Registration"}
                />
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <p className="text-center text-sm text-gray-400">
                By registering, you agree to our{" "}
                <a href="#" className="text-gradient transition-colors">
                  Terms & Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
