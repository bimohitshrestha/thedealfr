import React, { ReactNode } from "react";

interface ButtonInterface {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

const ButtonWhiteText: React.FC<ButtonInterface> = ({
  name,
  onClick,
  className,
  icon,
  type = "button",
}) => {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-2 cursor-pointer text-center rounded-xl border-1 text-primary   hover:text-green-500 mt-5 lg:mt-0 ${className}`}
      onClick={onClick}
      type={type}
    >
      {icon && <span className="hover:text-green-500">{icon}</span>}
      <span>{name}</span>
    </button>
  );
};

export default ButtonWhiteText;
