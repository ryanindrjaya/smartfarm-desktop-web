import PowerButton from "@/components/PowerButton";
import Select from "@/components/Select";
import SettingButton from "@/components/SettingButton";
import Statistic from "@/components/Statistic";
import MainLayout from "@/layout/main.layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const mockOptions = [
  {
    label: "Controller 1",
    value: 1,
    status: true,
  },
  {
    label: "Controller 2",
    value: 2,
  },
  {
    label: "Controller 3",
    value: 3,
  },
  {
    label: "Controller 4",
    value: 4,
  },
  {
    label: "Controller 5",
    value: 5,
  },
];

type Props = {
  id: string;
  value: {
    label: string;
    value: number;
    status: boolean;
  };
};

export async function getServerSideProps(ctx: any) {
  const { id } = ctx.params;
  const value = mockOptions.find((item) => item.value === Number(id));

  return {
    props: {
      id,
      value,
    },
  };
}

export default function DetailController({ id, value }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window === undefined) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 426);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = useRouter();
  const handleChange = (value: any) => {
    router.push(`/dashboard/${value.value}`);
  };

  return (
    <MainLayout title="Dashboard">
      <div className="mb-4 flex justify-between items-center">
        <Select onChange={handleChange} className="w-[180px] lg:w-[304px]" options={mockOptions} defaultValue={value} />
        <PowerButton />
      </div>

      {!isMobile ? (
        <div className="flex h-[78vh] gap-4">
          <div className="h-full flex flex-col gap-4 w-[25%]">
            {/* TEMPERATURE */}
            <div className=" h-[50%] bg-glass rounded-lg p-4">
              <div className="flex mb-3 justify-between items-center">
                <h2 className="md:text-base lg:text-xl font-medium">Temperature</h2>
                <SettingButton settingPage="setting-temperature" />
              </div>

              <div className="flex flex-col gap-3">
                <Statistic label="Air (30.0 - 100.0)" value="28.5 &deg;C" />
                <Statistic label="Water" value="24 &deg;C" />
              </div>
            </div>
            {/* END TEMPERATURE */}

            {/* HUMIDITY */}
            <div className=" h-[30%] bg-glass rounded-lg p-4">
              <div className="flex mb-3 justify-between items-center">
                <h2 className="md:text-base lg:text-xl font-medium">Humidity</h2>
                <SettingButton settingPage="setting-humidity" />
              </div>

              <p className="md:text-2xl lg:text-5xl font-bold">24 &deg;C</p>
            </div>
            {/* END HUMIDITY */}

            {/* FAN & HEATER */}
            <div className=" h-[20%] bg-glass rounded-lg p-4">
              <div className="flex md:gap-14 lg:gap-36">
                <Statistic small label="Fan" value="On" />
                <Statistic small label="Heater" value="Off" />
              </div>
            </div>
            {/* FAN & HEATER */}
          </div>

          <div className=" h-full flex flex-col gap-4 w-[75%]">
            {/* DAP */}
            <div className=" flex  items-center flex-row gap-x-12 gap-y-6 h-[35%] bg-glass rounded-lg p-4">
              <div className="flex flex-col gap-1 px-5">
                <h2 className="md:text-base lg:text-xl font-medium">Date Time</h2>
                <h2 className="md:text-2xl lg:text-5xl font-bold">26 July 2023</h2>
                <h2 className="text-base ">12.48.30</h2>
              </div>
              <div className="flex flex-col gap-1 px-5">
                <h2 className="md:text-base lg:text-xl font-medium">DAP</h2>
                <h2 className="md:text-2xl lg:text-5xl font-bold">50 Days</h2>
                <h2 className="text-base ">12.48.30</h2>
              </div>
            </div>
            {/* DAP */}

            <div className=" h-[65%] flex gap-4 flex-row">
              {/* EC */}
              <div className=" h-full bg-glass flex-1 rounded-lg px-4 py-4">
                <div className="flex mb-3 justify-between items-center">
                  <h2 className="md:text-base lg:text-xl font-medium">EC (2.56)</h2>
                  <SettingButton settingPage="setting-ec" />
                </div>

                <p className="md:text-2xl lg:text-5xl font-bold mb-10">0.01</p>

                <div className="flex flex-col gap-8">
                  <Statistic small label="A Nutrition" value="On" />
                  <Statistic small label="B Nutrition" value="On" />
                </div>
              </div>
              {/* EC */}

              {/* PH */}
              <div className=" h-full bg-glass flex-1 rounded-lg px-4 py-4">
                <div className="flex mb-3 justify-between items-center">
                  <h2 className="md:text-base lg:text-xl font-medium">pH (5.66 - 7.50)</h2>
                  <SettingButton settingPage="setting-ph" />
                </div>

                <p className="md:text-2xl lg:text-5xl font-bold mb-10">6.20</p>

                <div className="flex flex-col gap-8">
                  <Statistic small label="pH Up" value="On" />
                  <Statistic small label="pH Down" value="Off" />
                </div>
              </div>
              {/* PH */}

              {/* WATERFLOW */}
              <div className=" h-full bg-glass flex-1 rounded-lg px-4 py-4">
                <div className="flex mb-3 justify-between items-center">
                  <h2 className="md:text-base lg:text-xl font-medium">Waterflow</h2>
                  <SettingButton settingPage="setting-waterflow" />
                </div>

                <p className="md:text-2xl lg:text-5xl font-bold mb-10">0.00</p>

                <div className="flex flex-col gap-8">
                  <Statistic small label="Pump 1" value="On" />
                  <Statistic small label="Pump 2" value="Off" />
                </div>
              </div>
              {/* WATERFLOW */}
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:hidden flex flex-col h-auto lg:h-[78vh] gap-4">
          {/* DAP */}
          <div className="h-auto flex justify-between items-center bg-glass rounded-lg p-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-xs uppercase font-medium">Date Time</h2>
              <h2 className="text-sm font-bold">26 Jun 2023</h2>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-xs font-medium">DAP</h2>
              <h2 className="text-sm font-bold">50 Days</h2>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-xs font-medium">TIME</h2>
              <h2 className="text-sm ">12.48.30</h2>
            </div>
          </div>
          {/* DAP */}
          <div className="w-full h-full flex gap-4">
            {/* TEMPERATURE */}
            <div className="h-auto w-[60%] bg-glass rounded-lg p-3">
              <div className="flex mb-3 justify-between items-center">
                <h2 className="text-xs font-medium">Temperature</h2>
                <SettingButton isMobile settingPage="setting-temperature" />
              </div>

              <div className="flex justify-between ">
                <Statistic isMobile label="Air" value="28.5 &deg;C" />
                <Statistic isMobile label="Water" value="24 &deg;C" />
              </div>
            </div>
            {/* END TEMPERATURE */}

            {/* HUMIDITY */}
            <div className="h-auto w-[40%] bg-glass rounded-lg p-3">
              <div className="flex mb-3 justify-between items-center">
                <h2 className="text-xs font-medium">Humidity</h2>
                <SettingButton isMobile settingPage="setting-humidity" />
              </div>

              <Statistic isMobile label="Value" value="50 &deg;C" />
            </div>
            {/* END HUMIDITY */}
          </div>
          {/* FAN & HEATER */}
          <div className="h-auto lg:h-[20%] bg-glass rounded-lg p-2">
            <div className="flex justify-center gap-10">
              <div className="flex gap-3">
                <img src="/heater.svg" />
                <p className={`text-base font-medium`}>On</p>
              </div>
              <div className="flex gap-3">
                <img src="/fan.svg" />
                <p className={`text-base font-medium`}>Off</p>
              </div>
            </div>
          </div>
          {/* FAN & HEATER */}

          <div className="w-full h-full flex flex-col gap-4 lg:w-[75%]">
            <div className="h-auto flex flex-col gap-4 lg:flex-row">
              {/* EC */}
              <div className="h-auto relative bg-glass flex gap-8 rounded-lg px-8 py-8">
                <div className="flex flex-col gap-5">
                  <h2 className="text-xs font-medium">EC (2.56)</h2>
                  <p className="text-5xl font-bold mb-10">0.01</p>
                </div>

                <SettingButton className="absolute right-3 top-3" settingPage="setting-ec" />

                <div className="flex flex-col gap-3">
                  <Statistic isMobile label="A Nutrition" value="On" />
                  <Statistic isMobile label="B Nutrition" value="On" />
                </div>
              </div>
              {/* EC */}

              {/* PH */}
              <div className="h-auto relative bg-glass flex gap-8 rounded-lg px-8 py-8">
                <div className="flex flex-col gap-5">
                  <h2 className="text-xs font-medium">pH (5.66 - 7.50)</h2>
                  <p className="text-5xl font-bold mb-10">6.20</p>
                </div>

                <SettingButton className="absolute right-3 top-3" settingPage="setting-ph" />

                <div className="flex flex-col gap-3">
                  <Statistic isMobile label="pH Up" value="On" />
                  <Statistic isMobile label="pH Down" value="Off" />
                </div>
              </div>
              {/* PH */}

              {/* WATERFLOW */}
              <div className="h-auto relative bg-glass flex gap-8 rounded-lg px-8 py-8 mb-5">
                <div className="flex flex-col gap-5">
                  <h2 className="text-xl font-medium">Waterflow</h2>
                  <p className="text-5xl font-bold mb-10">0.00</p>
                </div>
                <SettingButton className="absolute right-3 top-3" settingPage="setting-waterflow" />

                <div className="flex flex-col gap-3">
                  <Statistic isMobile label="Pump 1" value="On" />
                  <Statistic isMobile label="Pump 2" value="Off" />
                </div>
              </div>
              {/* WATERFLOW */}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
