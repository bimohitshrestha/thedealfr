import React, { ReactNode } from "react";

interface ButtonTextInterface {
  name: string;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
}

const ButtonText: React.FC<ButtonTextInterface> = ({
  name,
  onClick,
  type = "button",
  icon,
  href,
}) => {
  const classes =
    "btn-gradient flex items-center gap-3 px-4 py-2 cursor-pointer text-center rounded-xl text-primary   hover:text-[#00c851] mt-5 lg:mt-0 ";

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span className="icon">{icon}</span>}
        <span>{name}</span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {icon && <span className="icon">{icon}</span>}
      <span>{name}</span>
    </button>
  );
};

export default ButtonText;
