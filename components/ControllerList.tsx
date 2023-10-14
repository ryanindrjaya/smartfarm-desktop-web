import { useRouter } from "next/router";
import React from "react";
import ControllerCard from "./ControllerCard";

export type Controller = {
  id: string | number;
  name: string;
  status: boolean;
  ec: string;
  ph: string;
  humidity: string;
  waterTemp: string;
  airTemp: string;
  pump1: string;
  dap: number;
};

type Props = {
  data: Controller[];
};

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-content">{children}</div>
    </div>
  );
};

export default function ControllerList({ data }: Props) {
  return (
    <HorizontalScroll>
      {data.map((item, index) => (
        <ControllerCard data={item} key={index} />
      ))}
    </HorizontalScroll>
  );
}
