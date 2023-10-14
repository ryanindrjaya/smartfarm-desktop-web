import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";

type Props = {
  onClick?: () => void;
};

export default function PowerButton({ onClick = () => {} }: Props) {
  return (
    <div
      onClick={onClick}
      className="rounded-full cursor-pointer hover:bg-white/10 transition-all p-2 border-2 border-white"
    >
      <AiOutlinePoweroff className="text-md lg:text-2xl text-white" />
    </div>
  );
}
