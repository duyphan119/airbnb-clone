"use client";

import { FC, MouseEvent } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? "bg-white" : "bg-rose-500"
      } ${outline ? "border-black" : "border-rose-500"} ${
        outline ? "text-black" : "text-white"
      } ${small ? "py-1" : "py-3"} ${small ? "text-sm" : "text-md"} ${
        small ? "font-light" : "font-semibold"
      } ${small ? "border-[1px]" : "border-2"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon ? <Icon className="absolute top-3 left-3" size={24} /> : null}
      {label}
    </button>
  );
};

export default Button;
