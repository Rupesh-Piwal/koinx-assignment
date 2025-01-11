"use client";
import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import Performance from "@/components/Performance";
import BitcoinTracker from "@/components/PriceTracker";
import Sentiments from "@/components/Sentiments";
import Tab from "@/components/Tab";
import TeamCard from "@/components/TeamCard";
import Tokenomics from "@/components/Tokenomics";
import { TrendingCoins } from "@/components/TrendingCoins";
import YouMayLike from "@/components/you-may-like";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("performance");

  return (
    <div className="min-h-screen bg-[#EFF2F5] flex flex-col">
      <section className="grid grid-cols-1 md:grid-cols-6 p-4 sm:p-10 gap-8 sm:gap-16">
        <div className="col-span-1 sm:col-span-4 flex flex-col">
          <BitcoinTracker />
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "about" && <About />}
          {activeTab === "team" && <TeamCard />}
          <Performance />
          <Sentiments />
          <About />
          <Tokenomics />
          <TeamCard />
        </div>
        <div className="col-span-1 sm:col-span-2 mx-auto sm:ml-10 sm:mt-0 mt-8">
          <GetStarted />
          <TrendingCoins />
        </div>
      </section>
      <section className="w-full mt-auto">
        <YouMayLike />
      </section>
    </div>
  );
}
