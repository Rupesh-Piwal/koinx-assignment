"use client";

import { useEffect } from "react";
import { usePriceStore } from "@/store/usePriceStore";
import { Badge } from "./ui/badge";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Image from "next/image";
import TradingViewWidget from "./TradingViewWidget";

const BitcoinTrackerSkeleton = () => {
  return (
    <div className="w-full p-4 rounded bg-white flex flex-col items-start gap-6 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <div className="h-8 w-32 bg-gray-200 rounded" />
        <div className="h-6 w-16 bg-gray-200 rounded-md" />
      </div>
      <div className="flex items-center gap-8">
        <div>
          <div className="h-8 w-32 bg-gray-200 rounded mb-2" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>
        <div className="mb-[14px]">
          <div className="h-8 w-24 bg-gray-200 rounded" />
        </div>
        <div className="h-4 w-8 bg-gray-200 rounded mb-[12px]" />
      </div>
    </div>
  );
};

const BitcoinTracker = () => {
  const { price, loading, error, fetchPrice } = usePriceStore();

  useEffect(() => {
    fetchPrice();
  }, [fetchPrice]);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white mb-5">
      <div className="grid gap-4 md:grid-cols-2">
        {loading ? (
          <BitcoinTrackerSkeleton />
        ) : price ? (
          <div className="w-full p-4 rounded bg-white flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <Image
                src={price.image.thumb}
                alt="Bitcoin Icon"
                width={35}
                height={35}
              />
              <h2 className="text-[#0B1426] text-[24px] font-semibold">
                {price.name}
                <span className="text-[#5D667B] text-[14px] mx-1">
                  {price.symbol.toUpperCase()}
                </span>
              </h2>
              <div className="text-[16px] font-medium text-white bg-[#768396] px-2 py-1 rounded-md">
                Rank #1
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[28px] font-semibold text-[#0B1426]">
                  ${price.usd.toLocaleString()}
                </p>
                <p className="text-[16px] font-semibold text-[#0B1426]">
                  ₹{price.inr.toLocaleString()}
                </p>
              </div>
              <div className="mb-[14px]">
                {price.usd_24h_change !== undefined ? (
                  price.usd_24h_change > 0 ? (
                    <Badge
                      className="text-green-600 font-medium text-[16px] bg-green-50"
                      variant="secondary"
                    >
                      <IoMdArrowDropup size={20} />
                      {price.usd_24h_change.toFixed(2)}%
                    </Badge>
                  ) : (
                    <Badge
                      className="text-red-600 font-medium text-[16px] bg-red-50"
                      variant="secondary"
                    >
                      <IoMdArrowDropdown size={20} />
                      {Math.abs(price.usd_24h_change).toFixed(2)}%
                    </Badge>
                  )
                ) : (
                  "Data not available"
                )}
              </div>
              <div className="text-[#768396] text-[14px] font-medium mb-[12px]">
                (24)
              </div>
            </div>
          </div>
        ) : (
          <div>No price data available.</div>
        )}

        <div className="md:col-span-2 h-[600px] rounded-lg overflow-hidden">
          <TradingViewWidget />
        </div>
      </div>
    </div>
  );
};

export default BitcoinTracker;
