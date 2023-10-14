import Button from "@/components/Button";
import SettingInput from "@/components/SettingInput";
import MainLayout from "@/layout/main.layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  low: number;
  high: number;
  id: string | number;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  return {
    props: {
      low: 0,
      high: 0,
      id,
    },
  };
}

export default function SettingPH({ id }: Props) {
  const router = useRouter();
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);

  const handleBack = () => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <MainLayout title="Temperature Setting">
      <div className="w-full h-full flex flex-col justify-center ">
        <div className="w-full h-[75%] px-14 flex justify-between items-center bg-glass rounded-3xl">
          <div>
            <h1 className="font-medium text-5xl">Temperature Setting</h1>
            <Button className="mt-8 bg-[#585761] rounded-xl">Set Temperature</Button>
          </div>
          <div className="flex flex-col gap-10">
            <SettingInput label="Low" setValue={setLow} value={low} />
            <SettingInput label="High" setValue={setHigh} value={high} />
          </div>
        </div>
        <Button onClick={handleBack} className="w-[323px] rounded-xl mt-10">
          Back
        </Button>
      </div>
    </MainLayout>
  );
}
