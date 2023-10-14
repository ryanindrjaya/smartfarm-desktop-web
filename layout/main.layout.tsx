import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { PiSpinnerGapLight } from "react-icons/pi";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  title: string;
};

const Loading = () => {
  return (
    <div className="w-full h-[90vh] lg:h-full flex justify-center items-center">
      <PiSpinnerGapLight className="animate-spin text-6xl" />
    </div>
  );
};

export default function MainLayout({ children, title }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={`px-5 lg:px-8 lg:max-h-screen min-h-screen max-h-none overflow-clip ${montserrat.className}`}>
        <header className=" flex pt-5 lg:h-[8vh] justify-between items-start">
          <h1 onClick={handleClick} className="text-white cursor-pointer text-md lg:text-4xl font-extrabold">
            OS SMART<span className={`text-[#00FF0A]`}>FARM</span>
          </h1>
          <h1 className="text-white text-sm lg:text-3xl font-semibold">{loading ? "Loading..." : title}</h1>
        </header>
        <main className="lg:h-[90vh] h-full  pt-3 text-white relative">{loading ? <Loading /> : children}</main>
      </main>
    </>
  );
}
