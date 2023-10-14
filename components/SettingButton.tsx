import { useRouter } from "next/router";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

type Props = {
  settingPage: string;
  isMobile?: boolean;
  className?: string;
};

export default function SettingButton({ settingPage, isMobile = false, className }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(router.asPath + `/${settingPage}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-full cursor-pointer hover:bg-white/10 transition-all ${className} ${isMobile ? "" : "p-2"} `}
    >
      <AiOutlineSetting className={` ${isMobile ? "text-xl" : "text-2xl"} text-white`} />
    </div>
  );
}
