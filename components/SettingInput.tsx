import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

type Props = {
  setValue: Dispatch<SetStateAction<number>>;
  value: any;
  label: string;
};

export default function SettingInput({ setValue, value, label }: Props) {
  const intervalRef = useRef<any>();

  const handleMinus = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setValue((prev) => Number((prev - 0.01).toFixed(2)));
    }, 100);
  };

  const handlePlus = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setValue((prev) => Number((prev + 0.01).toFixed(2)));
    }, 100);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <label className=" text-sm lg:text-2xl font-medium">{label}</label>
      <div className="flex gap-1 lg:gap-5">
        <button
          disabled={value === 0}
          onMouseLeave={stop}
          onMouseUp={stop}
          onMouseDown={handleMinus}
          onClick={() => {
            setValue((prev) => Number((prev - 0.01).toFixed(2)));
          }}
          className="p-4 rounded-lg border-2 border-white hover:bg-white/10  text-sm lg:text-3xl"
        >
          -
        </button>
        <input
          onFocus={(e) => e.target.select()}
          onChange={(e) => setValue(Number(parseFloat(e.target.value).toFixed(2)))}
          type="number"
          step={0.01}
          className="border-2 bg-transparent  border-white rounded-2xl text-sm lg:text-3xl text-center focus:outline-none "
          value={value}
        />
        <button
          onMouseLeave={stop}
          onMouseUp={stop}
          onMouseDown={handlePlus}
          onClick={() => {
            setValue((prev) => Number((prev + 0.01).toFixed(2)));
          }}
          className="p-4 border-2 border-white rounded-lg hover:bg-white/10 text-sm lg:text-3xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
