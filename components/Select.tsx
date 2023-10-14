import React, { useState, useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";

type Option = {
  label: string;
  value: string | number;
  status?: boolean;
};

type Props = {
  className?: string;
  options: Option[];
  defaultValue?: Option;
  onChange?: (value: Option) => void;
};

export default function Select({ className, options, defaultValue, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | undefined>(defaultValue);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (onChange && selected && !firstRender) {
      onChange(selected);
    } else {
      setFirstRender(false);
    }
  }, [selected]);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`px-4 lg:px-6 py-1 relative z-50 flex justify-between cursor-pointer bg-glass font-medium text-sm lg:text-lg rounded-md ${className}`}
    >
      <span>{selected?.label}</span>

      <div className="flex items-center gap-4 ">
        <span className="relative flex h-3 w-3">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              selected?.status ? "bg-[#00ff08e0]" : "hidden"
            }  opacity-75`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${selected?.status ? "bg-[#00FF0A]" : "bg-red-500"} `}
          ></span>
        </span>

        <BsChevronRight className={`transform transition-all ${open ? "rotate-90" : ""}`} />
      </div>
      {open && (
        <div className="absolute  w-full  top-14 left-0 z-50">
          <div className="bg-white text-black relative rounded-md">
            {options.map((option) =>
              selected?.value === option.value ? (
                ""
              ) : (
                <div
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  key={option.value}
                  className={`px-6 py-1 flex transition-all justify-between hover:bg-black/10 cursor-pointer ${
                    option.value === selected?.value ? "bg-white/10" : ""
                  }`}
                >
                  {option.label}
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-3 w-3">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                          option?.status ? "bg-[#00ff08e0]" : "hidden"
                        }  opacity-75`}
                      ></span>
                      <span
                        className={`relative inline-flex rounded-full h-3 w-3 ${
                          option?.status ? "bg-[#00FF0A]" : "bg-red-500"
                        } `}
                      ></span>
                    </span>

                    <BsChevronRight className={`transform transition-all opacity-0 ${open ? "rotate-90" : ""}`} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
