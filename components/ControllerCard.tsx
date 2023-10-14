import { useRouter } from "next/router";
import { Controller } from "./ControllerList";

const StatisticItem = ({ title, value }: { title: string; value: string | React.ReactNode | number }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

const ControllerCard = ({ data }: { data: Controller }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full lg:w-[427px] cursor-pointer text-white h-auto lg:h-[449px] px-6 py-10 bg-glass rounded-lg"
    >
      <div className="flex h-[72.8px] lg:h-auto justify-between pb-6 border-b border-white mb-8">
        <div>
          <h2 className="text-sm lg:text-2xl font-bold mb-2 leading-6">{data.name}</h2>
          <div className="flex items-center gap-2">
            <p className="text-xs lg:text-base ">Status : {data.status ? "Active" : "Inactive"}</p>
            <span className="relative flex h-3 w-3">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  data.status ? "bg-[#00ff08e0]" : "hidden"
                }  opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${data.status ? "bg-[#00FF0A]" : "bg-red-500"} `}
              ></span>
            </span>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <p className="text-sm text-right">DAP</p>
          <p className="text-sm font-bold text-right">{data.dap} Days</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-8 gap-x-8 lg:px-5">
        <StatisticItem title="EC (2.56)" value={data.ec} />
        <StatisticItem title="pH (5.6 - 7.5)" value={data.ph} />
        <StatisticItem title="Humidity" value={`${data.humidity}`} />
        <StatisticItem title="Water Temp" value={<span>{data.waterTemp} &deg;C</span>} />
        <StatisticItem title="Air Temp" value={<span>{data.airTemp} &deg;C</span>} />
        <StatisticItem
          title="Pump 1"
          value={<span className={`${data.pump1 === "On" ? "text-[#00FF0A]" : ""}`}>{data.pump1}</span>}
        />
      </div>
    </div>
  );
};

export default ControllerCard;
