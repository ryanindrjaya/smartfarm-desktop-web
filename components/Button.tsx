import React from "react";

type Props = {
  children: React.ReactNode | string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, type = "button", className, onClick }: Props) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`text-xl border-2 border-white px-11 py-3 ${className}
      hover:bg-white/10  transition-all  
    `}
      type={type}
    >
      {children}
    </button>
  );
}
