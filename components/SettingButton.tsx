import { useRouter } from "next/router";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

type Props = {
  settingPage: string;
};

export default function SettingButton({ settingPage }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(router.asPath + `/${settingPage}`);
  };

  return (
    <div onClick={handleClick} className="rounded-full cursor-pointer hover:bg-white/10 transition-all p-2">
      <AiOutlineSetting className="text-2xl text-white" />
    </div>
  );
}
