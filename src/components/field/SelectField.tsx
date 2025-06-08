import React from "react";

interface SelectFieldInterface {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}

const SelectField: React.FC<SelectFieldInterface> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-white mb-1">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-200"
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
