"use client";

import { useEffect } from "react";
import { usePriceStore } from "@/store/usePriceStore";
import { Badge } from "./ui/badge";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Image from "next/image";
import TradingViewWidget from "./TradingViewWidget";

const BitcoinTracker = () => {
  const { price, loading, error, fetchPrice } = usePriceStore();

  useEffect(() => {
    fetchPrice();
  }, [fetchPrice]);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-[#ffffff] mb-[20px]">
      <div className="grid gap-4 md:grid-cols-2">
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : price ? (
          <div className="w-full  p-4 rounded bg-[#ffffff] flex flex-col items-start gap-6">
            <div className="flex flex-row items-start gap-2">
              <Image
                src={price.image.thumb}
                alt="Bitcoin Icon"
                width={35}
                height={35}
              />
              <h2 className="text-[#0B1426] text-[24px] md:text-[24px] font-semibold">
                {price.name}
                <span className="text-[#5D667B] text-[14px] md:text-[16px] mx-1">
                  {price.symbol.toUpperCase()}
                </span>
              </h2>
            </div>
            <div className="flex flex-row items-start gap-8">
              <div>
                <p className="text-[28px] font-semibold text-[#0B1426]">
                  ${price.usd.toLocaleString()}
                </p>
                <p className="text-[16px] font-semibold text-[#0B1426]">
                  ₹{price.inr.toLocaleString()}
                </p>
              </div>
              <div>
                {price.usd_24h_change !== undefined ? (
                  price.usd_24h_change > 0 ? (
                    <Badge
                      className="text-green-600 font-medium text-[16px]"
                      variant="secondary"
                    >
                      <IoMdArrowDropup size={20} />
                      {price.usd_24h_change.toFixed(2)}%
                    </Badge>
                  ) : (
                    <Badge
                      className="text-red-600 font-medium text-[16px]"
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
              <div>(24)</div>
            </div>
          </div>
        ) : (
          <div>No price data available.</div>
        )}

        <div className="md:col-span-2 h-[600px] rounded-[20px]">
          <TradingViewWidget />
        </div>
      </div>
    </div>
  );
};

export default BitcoinTracker;
