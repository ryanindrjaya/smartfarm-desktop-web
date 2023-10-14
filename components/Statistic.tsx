import React from "react";

type Props = {
  label: string;
  value: string | number | React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "5xl";
  isMobile?: boolean;
};

export default function Statistic({ label, value, size = "5xl", isMobile = false }: Props) {
  const textSize = "text-" + size;

  return isMobile ? (
    <div>
      <p className="text-xs mb-1">{label}</p>
      <p className={`text-lg font-bold`}>{value}</p>
    </div>
  ) : (
    <div>
      <p className="text-lg mb-1">{label}</p>
      <p className={`${textSize} font-bold`}>{value}</p>
    </div>
  );
}
