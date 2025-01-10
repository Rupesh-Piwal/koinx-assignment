import About from "@/components/About";
import GetStarted from "@/components/GetStarted";
import BitcoinTracker from "@/components/PriceTracker";
import { TrendingCoins } from "@/components/TrendingCoins";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <section className="h-screen grid grid-cols-1 md:grid-cols-6 p-10 mx-auto gap-16">
        <div className=" col-span-4  flex flex-col">
          <BitcoinTracker />
          <About />
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
