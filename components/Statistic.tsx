import React from "react";

type Props = {
  label: string;
  value: string | number | React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "5xl";
};

export default function Statistic({ label, value, size = "5xl" }: Props) {
  const textSize = "text-" + size;

  return (
    <div>
      <p className="text-lg mb-1">{label}</p>
      <p className={`${textSize} font-bold`}>{value}</p>
    </div>
  );
}
