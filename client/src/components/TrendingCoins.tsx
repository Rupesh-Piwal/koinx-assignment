"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePriceStore } from "@/store/usePriceStore";

export const TrendingCoins = () => {
  const { trending, trendingLoading, error, fetchTrending } = usePriceStore();

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
            {trending.map((coin) => (
              <div key={coin.item.id} className="flex items-center space-x-4">
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{coin.item.name}</h3>
                </div>
                <div className="text-sm">
                  {coin.item.data?.price_change_percentage_24h.usd.toFixed(2)}%
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
