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
      <div className="w-full h-[70vh] lg:h-full flex flex-col justify-center ">
        <div className="w-full h-full lg:h-[75%] px-14 flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center bg-glass rounded-3xl">
          <div>
            <h1 className="font-medium lg:block hidden text-5xl">Humidity Setting</h1>
            <Button className="mt-8 w-full bg-[#585761] rounded-xl">Set Humidity</Button>
          </div>
          <SettingInput label="Value" setValue={setHumidity} value={humidity} />
        </div>
        <Button onClick={handleBack} className="w-full lg:w-[323px] rounded-xl mt-10">
          Back
        </Button>
      </div>
    </MainLayout>
  );
}
