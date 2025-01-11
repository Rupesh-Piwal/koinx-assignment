"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePriceStore } from "@/store/usePriceStore";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Badge } from "./ui/badge";

export const TrendingCoins = () => {
  const { trendingCoins, trendingLoading, error, fetchTrending } =
    usePriceStore();

  useEffect(() => {
    fetchTrending();
  }, [fetchTrending]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[24px] font-semibold">
          Trending Coins (24h)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {trendingLoading ? (
          <div className="text-center py-4">Loading...</div>
        ) : error ? (
          <div className="text-red-500 py-2">{error}</div>
        ) : (
          <div className="space-y-5">
            {trendingCoins.map((coin) => (
              <div key={coin.id} className="flex items-center space-x-4">
                <img
                  src={coin.thumb}
                  alt={coin.symbol}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{coin.symbol}</h3>
                </div>
                <div className="text-sm">
                  {coin.price_change !== undefined ? (
                    coin.price_change > 0 ? (
                      <Badge
                        className="text-green-600 font-medium text-[16px]"
                        variant="secondary"
                      >
                        <IoMdArrowDropup size={20} />
                        {coin.price_change.toFixed(2)}%
                      </Badge>
                    ) : (
                      <Badge
                        className="text-red-600 font-medium text-[16px]"
                        variant="secondary"
                      >
                        <IoMdArrowDropdown size={20} />
                        {Math.abs(coin.price_change).toFixed(2)}%
                      </Badge>
                    )
                  ) : (
                    "Data not available"
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
