import Button from "@/components/Button";
import SettingInput from "@/components/SettingInput";
import MainLayout from "@/layout/main.layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  doseTime: number;
  doseInterval: number;
  id: string | number;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  return {
    props: {
      doseTime: 0,
      doseInterval: 0,
      id,
    },
  };
}

export default function SettingWaterflow({ id }: Props) {
  const router = useRouter();
  const [doseTime, setDoseTime] = useState(0);
  const [doseInterval, setDoseInterval] = useState(0);

  const handleBack = () => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <MainLayout title="Peristaltic Pump Setting">
      <div className="w-full h-[90vh] flex flex-col justify-center">
        <div className="w-full h-[75%]  px-10 flex flex-col-reverse justify-center md:flex-row md:justify-between items-center bg-glass rounded-3xl">
          <div>
            <h1 className="font-medium md:block hidden text-2xl">Peristaltic Pump</h1>
            <Button className="mt-8 bg-[#585761] rounded-xl">Set Peristaltic Pump</Button>
          </div>
          <div className="flex flex-col gap-10">
            <SettingInput label="Dose Time" setValue={setDoseTime} value={doseTime} />
            <SettingInput label="High" setValue={setDoseInterval} value={doseInterval} />
          </div>
        </div>
        <Button onClick={handleBack} className="w-full md:w-[200px] rounded-xl mt-10">
          Back
        </Button>
      </div>
    </MainLayout>
  );
}
