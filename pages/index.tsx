import Button from "@/components/Button";
import ControllerList, { Controller } from "@/components/ControllerList";
import MainLayout from "@/layout/main.layout";
import Head from "next/head";

export default function Home() {
  const mockData: Controller[] = [
    {
      id: 1,
      name: "Controller 1",
      status: true,
      ec: "0.5",
      ph: "6.5",
      humidity: "60%",
      waterTemp: "25",
      airTemp: "28",
      pump1: "On",
      dap: 1,
    },
    {
      id: 2,
      name: "Controller 2",
      status: false,
      ec: "0.6",
      ph: "6.2",
      humidity: "65%",
      waterTemp: "26",
      airTemp: "29",
      pump1: "Off",
      dap: 4,
    },
    {
      id: 3,
      name: "Controller 3",
      status: true,
      ec: "0.7",
      ph: "6.8",
      humidity: "70%",
      waterTemp: "27",
      airTemp: "30",
      pump1: "On",
      dap: 15,
    },
    {
      id: 4,
      name: "Controller 4",
      status: false,
      ec: "0.8",
      ph: "6.4",
      humidity: "75%",
      waterTemp: "28",
      airTemp: "31",
      pump1: "Off",
      dap: 4,
    },
    {
      id: 5,
      name: "Controller 5",
      status: true,
      ec: "0.9",
      ph: "6.2",
      humidity: "80%",
      waterTemp: "29",
      airTemp: "32",
      pump1: "On",
      dap: 8,
    },
    {
      id: 6,
      name: "Controller 6",
      status: true,
      ec: "1.0",
      ph: "6.6",
      humidity: "85%",
      waterTemp: "30",
      airTemp: "33",
      pump1: "Off",
      dap: 2,
    },
    {
      id: 7,
      name: "Controller 7",
      status: false,
      ec: "1.1",
      ph: "6.8",
      humidity: "90%",
      waterTemp: "31",
      airTemp: "34",
      pump1: "On",
      dap: 24,
    },
    {
      id: 8,
      name: "Controller 8",
      status: true,
      ec: "1.2",
      ph: "6.5",
      humidity: "95%",
      waterTemp: "32",
      airTemp: "35",
      pump1: "Off",
      dap: 8,
    },
    {
      id: 9,
      name: "Controller 9",
      status: true,
      ec: "1.3",
      ph: "6.2",
      humidity: "100%",
      waterTemp: "33",
      airTemp: "36",
      pump1: "On",
      dap: 3,
    },
    {
      id: 10,
      name: "Controller 10",
      status: false,
      ec: "1.4",
      ph: "6.8",
      humidity: "90%",
      waterTemp: "34",
      airTemp: "37",
      pump1: "Off",
      dap: 10,
    },
  ];

  return (
    <MainLayout title="Controllers">
      <div className="w-full h-full flex items-center overflow-x-scroll">
        <ControllerList data={mockData} />
      </div>

      <Button className="lg:block hidden absolute bottom-1 left-1/2 transform -translate-x-1/2 rounded-full">
        Add New Controller
      </Button>
    </MainLayout>
  );
}
