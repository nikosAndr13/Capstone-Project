import React from "react";
import { Welcome } from "./welcome";
import { Certifications } from "./certifications/certifications-slider";
import { LatestTech } from "./latestTech";
import { WhyTrust } from "./why-people-trust/WhyTrust";
import { NavBar } from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/hooks/useAuth";
import Link from "next/link";

export type specialization = {
  id: number;
  specialization: string;
};

export async function specializations() {
  const res = await fetch(`${process.env.BASE_URL}/api/specialization`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 ">
        <Toaster />
        <AuthProvider>
          <NavBar />
        </AuthProvider>
        <Welcome />
        <Certifications />
        <div className="background w-[100%]">
          <LatestTech />
        </div>
        <WhyTrust />
        <div className="flex flex-col justify-evenly items-center mt-20 h-[150px] ">
          <h2 className="text-3xl font-semibold max-[450px]:text-xl">
            Make the first step for your health
          </h2>
          <button
            className="p-3 rounded-md bg-sky-700 text-white hover:bg-sky-600 w-48
          transition duration-170 ease-in-out hover:ease-in-out shadow-2xl shadow-[#1B5FC1] hover:shadow-[#A1C1C1]"
          >
            <Link href={"/Search"}>Look for a doctor</Link>
          </button>
        </div>
        <hr />
        <footer className="text-center text-sm">
          Copyright © 2023 Diagnostics Lab | Powered by Diagnostics Lab
        </footer>
      </main>
    </>
  );
}
