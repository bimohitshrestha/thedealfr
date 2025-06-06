import React, { ReactNode } from "react";

interface ButtonTextInterface {
  name: string;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  onClick?: () => void;
}

const ButtonText: React.FC<ButtonTextInterface> = ({
  name,
  onClick,
  type = "button",
  icon,
}) => {
  return (
    <button
      className="btn-gradient text-white px-4 py-2 md:px-4 md:py-2 overflow-hidden lg:px-6 lg:py-3 rounded-xl transition duration-300 cursor-pointer mt-4 sm:mt-0 sm:ml-6 flex items-center gap-2"
      onClick={onClick}
      type={type}
    >
      {icon && <span className="icon">{icon}</span>}
      <span>{name}</span>
    </button>
  );
};

export default ButtonText;
