import React from "react";

type Props = {
  label: string;
  value: string | number | React.ReactNode;
  isMobile?: boolean;
  small?: boolean;
};

export default function Statistic({ label, value, isMobile = false, small = false }: Props) {
  return isMobile ? (
    <div>
      <p className="text-xs mb-1">{label}</p>
      <p className={`text-lg font-bold`}>{value}</p>
    </div>
  ) : (
    <div>
      <p className="md:text-xs lg:text-lg mb-1">{label}</p>
      <p className={`md:text-2xl ${small ? "lg:text-xl" : "lg:text-5xl"}  font-bold`}>{value}</p>
    </div>
  );
}
