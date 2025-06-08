"use client";
import InputField from "@/components/field/InputField";
import SelectField from "@/components/field/SelectField";
import type React from "react";

interface FormFieldProps {
  formData: {
    storeName: string;
    email: string;
    phone: string;
    category: string;
    message: string;
    website: string;
    description: string;
    address: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const FormField: React.FC<FormFieldProps> = ({ formData, handleChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="storeName"
          onChange={handleChange}
          value={formData.storeName}
          label="Store Name *"
          className="w-full p-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-200"
          placeholder="Your Store Name"
          required
        />
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-200"
          placeholder="store@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-200"
          placeholder="+977 9801000000"
        />
        <SelectField
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          options={["Online", "Offline", "COD"]}
          required
        />
      </div>

      <InputField
        label="Store Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Kathmandu, Nepal"
      />
      <InputField
        label="Website (Optional)"
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="https://yourstore.com"
      />
      <InputField
        type="textarea"
        label="Short Description"
        name="description"
        value={formData.description}
        rows={2}
        onChange={handleChange}
        placeholder="Tell us about your store"
      />
    </>
  );
};

export default FormField;
