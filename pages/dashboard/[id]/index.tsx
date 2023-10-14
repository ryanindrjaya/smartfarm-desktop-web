import PowerButton from "@/components/PowerButton";
import Select from "@/components/Select";
import SettingButton from "@/components/SettingButton";
import Statistic from "@/components/Statistic";
import MainLayout from "@/layout/main.layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

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
  const router = useRouter();
  const handleChange = (value: any) => {
    router.push(`/dashboard/${value.value}`);
  };

  return (
    <MainLayout title="Dashboard">
      <div className="mb-6 flex justify-between items-center">
        <Select onChange={handleChange} className="w-[304px]" options={mockOptions} defaultValue={value} />
        <PowerButton />
      </div>

      <div className="flex h-auto lg:h-[78vh] gap-4">
        <div className="w-full h-full flex flex-col gap-4 lg:w-[25%]">
          {/* TEMPERATURE */}
          <div className="h-auto lg:h-[50%] bg-glass rounded-lg p-4">
            <div className="flex mb-3 justify-between items-center">
              <h2 className="text-xl font-medium">Temperature</h2>
              <SettingButton settingPage="setting-temperature" />
            </div>

            <div className="flex flex-col gap-3">
              <Statistic label="Air (30.0 - 100.0)" value="28.5 &deg;C" />
              <Statistic label="Water" value="24 &deg;C" />
            </div>
          </div>
          {/* END TEMPERATURE */}

          {/* HUMIDITY */}
          <div className="h-auto lg:h-[30%] bg-glass rounded-lg p-4">
            <div className="flex mb-3 justify-between items-center">
              <h2 className="text-xl font-medium">Humidity</h2>
              <SettingButton settingPage="setting-humidity" />
            </div>

            <p className="text-5xl font-bold">24 &deg;C</p>
          </div>
          {/* END HUMIDITY */}

          {/* FAN & HEATER */}
          <div className="h-auto lg:h-[20%] bg-glass rounded-lg p-4">
            <div className="flex flex-col lg:flex-row gap-x-36 gap-y-6">
              <Statistic label="Fan" value="On" size="xl" />
              <Statistic label="Heater" value="Off" size="xl" />
            </div>
          </div>
          {/* FAN & HEATER */}
        </div>

        <div className="w-full h-full flex flex-col gap-4 lg:w-[75%]">
          {/* DAP */}
          <div className="h-auto flex flex-col items-center lg:flex-row gap-x-36 gap-y-6 lg:h-[35%] bg-glass rounded-lg p-4">
            <div className="flex flex-col gap-1 px-5">
              <h2 className="text-xl font-medium">Date Time</h2>
              <h2 className="text-5xl font-bold">26 July 2023</h2>
              <h2 className="text-ld ">12.48.30</h2>
            </div>
            <div className="flex flex-col gap-1 px-5">
              <h2 className="text-xl font-medium">DAP</h2>
              <h2 className="text-5xl font-bold">50 Days</h2>
              <h2 className="text-ld ">12.48.30</h2>
            </div>
          </div>
          {/* DAP */}

          <div className="h-auto lg:h-[65%] flex flex-col gap-4 lg:flex-row">
            {/* EC */}
            <div className="h-auto lg:h-full bg-glass flex-1 rounded-lg px-8 py-4">
              <div className="flex mb-3 justify-between items-center">
                <h2 className="text-xl font-medium">EC (2.56)</h2>
                <SettingButton settingPage="setting-ec" />
              </div>

              <p className="text-5xl font-bold mb-10">0.01</p>

              <div className="flex flex-col gap-8">
                <Statistic label="A Nutrition" value="On" size="xl" />
                <Statistic label="B Nutrition" value="On" size="xl" />
              </div>
            </div>
            {/* EC */}

            {/* PH */}
            <div className="h-auto lg:h-full bg-glass flex-1 rounded-lg px-8 py-4">
              <div className="flex mb-3 justify-between items-center">
                <h2 className="text-xl font-medium">pH (5.66 - 7.50)</h2>
                <SettingButton settingPage="setting-ph" />
              </div>

              <p className="text-5xl font-bold mb-10">6.20</p>

              <div className="flex flex-col gap-8">
                <Statistic label="pH Up" value="On" size="xl" />
                <Statistic label="pH Down" value="Off" size="xl" />
              </div>
            </div>
            {/* PH */}

            {/* WATERFLOW */}
            <div className="h-auto lg:h-full bg-glass flex-1 rounded-lg px-8 py-4">
              <div className="flex mb-3 justify-between items-center">
                <h2 className="text-xl font-medium">Waterflow</h2>
                <SettingButton settingPage="setting-waterflow" />
              </div>

              <p className="text-5xl font-bold mb-10">0.00</p>

              <div className="flex flex-col gap-8">
                <Statistic label="Pump 1" value="On" size="xl" />
                <Statistic label="Pump 2" value="Off" size="xl" />
              </div>
            </div>
            {/* WATERFLOW */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
