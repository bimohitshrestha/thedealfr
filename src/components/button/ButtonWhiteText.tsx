import React, { ReactNode } from "react";

interface ButtonInterface {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: ReactNode;
}

const ButtonWhiteText: React.FC<ButtonInterface> = ({
  name,
  onClick,
  icon,
  type = "button",
}) => {
  return (
    <button
      className="flex items-center gap-3 px-4 py-2 rounded-xl border-1 text-primary border-white  hover:bg-white hover:text-black mt-5 lg:mt-0"
      onClick={onClick}
      type={type}
    >
      {icon && <span className="icon hover:text-black">{icon}</span>}
      <span>{name}</span>
    </button>
  );
};

export default ButtonWhiteText;
