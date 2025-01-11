import { useEffect } from "react";
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
    <div className="border p-4 rounded-lg shadow-lg">
      <div className="text-[24px] font-semibold mb-4">Trending Coins (24h)</div>
      <div>
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
                        className="text-green-600 font-medium text-[16px] bg-green-50"
                        variant="secondary"
                      >
                        <IoMdArrowDropup size={20} />
                        {coin.price_change.toFixed(2)}%
                      </Badge>
                    ) : (
                      <Badge
                        className="text-red-600 font-medium text-[16px] bg-red-50"
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
      </div>
    </div>
  );
};
