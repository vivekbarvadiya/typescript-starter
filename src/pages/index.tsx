import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import TypeScript from "@/components/TypeScript";
import TypeProp from "@/components/TypeProp";
import Fetch2 from "@/components/Fetch2";
// import FetchApis from "@/components/FetchApis";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      {/* <TypeScript />
      <TypeProp name="vivek b." age={5} /> */}

      {/* <FetchApis/> */}

        {/* fetch, usestate, useeffect */}
      <Fetch2 />
    </div>
  );
}
