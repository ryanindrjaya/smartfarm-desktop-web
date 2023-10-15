import Button from "@/components/Button";
import SettingInput from "@/components/SettingInput";
import MainLayout from "@/layout/main.layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  lowPH: number;
  highPH: number;
  id: string | number;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  return {
    props: {
      lowPH: 0,
      highPH: 0,
      id,
    },
  };
}

export default function SettingPH({ id }: Props) {
  const router = useRouter();
  const [lowPH, setLowPH] = useState(0);
  const [highPH, setHighPH] = useState(0);

  const handleBack = () => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <MainLayout title="pH Setting">
      <div className="w-full h-[90vh] flex flex-col justify-center">
        <div className="w-full h-[75%]  px-10 flex flex-col-reverse justify-center md:flex-row md:justify-between items-center bg-glass rounded-3xl">
          <div>
            <h1 className="font-medium md:block hidden text-2xl">pH Setting</h1>
            <Button className="mt-8 bg-[#585761] rounded-xl">Set pH</Button>
          </div>
          <div className="flex flex-col gap-10">
            <SettingInput label="Low" setValue={setLowPH} value={lowPH} />
            <SettingInput label="High" setValue={setHighPH} value={highPH} />
          </div>
        </div>
        <Button onClick={handleBack} className="w-full md:w-[200px] rounded-xl mt-10">
          Back
        </Button>
      </div>
    </MainLayout>
  );
}
