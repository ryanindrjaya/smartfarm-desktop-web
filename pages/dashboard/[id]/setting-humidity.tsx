import Button from "@/components/Button";
import SettingInput from "@/components/SettingInput";
import MainLayout from "@/layout/main.layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  humidity: number;
  id: string | number;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  return {
    props: {
      humidity: 0,
      id,
    },
  };
}

export default function SettingHumidity({ id }: Props) {
  const router = useRouter();
  const [humidity, setHumidity] = useState(0);

  const handleBack = () => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <MainLayout title="Humidity Setting">
      <div className="w-full h-full flex flex-col justify-center ">
        <div className="w-full h-[75%] px-14 flex justify-between items-center bg-glass rounded-3xl">
          <div>
            <h1 className="font-medium text-5xl">Humidity Setting</h1>
            <Button className="mt-8 bg-[#585761] rounded-xl">Set Humidity</Button>
          </div>
          <div className="flex flex-col gap-10">
            <SettingInput label="Value" setValue={setHumidity} value={humidity} />
          </div>
        </div>
        <Button onClick={handleBack} className="w-[323px] rounded-xl mt-10">
          Back
        </Button>
      </div>
    </MainLayout>
  );
}
