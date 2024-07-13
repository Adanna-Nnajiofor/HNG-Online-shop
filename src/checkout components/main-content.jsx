import React from "react";
import { FaCheck } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className="w-full h-full  bg-white flex flex-col gap-6 lg:gap-12">
      <div className="w-full">
        <p className="text-lg font-bold text-blue-700">Step 01</p>
        <h1 className="text-4xl font-bold text-blue-900">Shipping</h1>
      </div>
      <div className="w-full flex flex-col gap-6">
        <InputField label="Full Name" placeholder="Chika Obi" />
        <SelectField label="Country" options={["Nigeria"]} />
        <InputField label="Address" placeholder="Address" />
        <InputField label="City" placeholder="City" />
        <InputField label="Postal Code" placeholder="Postal Code" />
        <InputField label="Phone Number" placeholder="+234" />
        <div className="flex items-center gap-2">
          <FaCheck size={24} />
          <p className="text-lg font-medium">Use as billing address</p>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, placeholder }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-xl font-semibold">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-400 p-3"
    />
  </div>
);

const SelectField = ({ label, options }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-xl font-semibold">{label}</label>
    <select className="w-full rounded-lg border border-gray-400 p-3">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default MainContent;
