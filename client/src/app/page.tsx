"use client";
import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import Performance from "@/components/Performance";
import BitcoinTracker from "@/components/PriceTracker";
import Sentiments from "@/components/Sentiments";
import Tab from "@/components/Tab";
import Team from "@/components/TeamCard";
import Tokenomics from "@/components/Tokenomics";
import { TrendingCoins } from "@/components/TrendingCoins";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("performance");

  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <section className="h-screen grid grid-cols-1 md:grid-cols-6 p-10 mx-auto gap-16">
        <div className=" col-span-4  flex flex-col">
          <BitcoinTracker />
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "performance" && <Performance />}
          {activeTab === "about" && <About />}
          {activeTab === "team" && <Team />}
          <Performance />
          <Sentiments
           
          />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="col-span-2 mx-auto">
          <GetStarted />
          <TrendingCoins />
        </div>
      </section>
      <div></div>
    </div>
  );
}
