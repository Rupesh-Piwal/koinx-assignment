import { useEffect } from "react";
import { usePriceStore } from "../store/usePriceStore";
import CoinScroller from "./CoinScroller";

const YouMayLike: React.FC = () => {
  const {likeCoins, trendingLoading, error, fetchTrending } = usePriceStore();

  useEffect(() => {
    fetchTrending();
  }, []);

  if (trendingLoading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="p-10 text-red-500">{error}</div>;

  return (
    <div className="bg-[#ffffff] p-10 pt-20 pb-20 w-full flex flex-col gap-8">
      <CoinScroller
        title="You May Also Like"
        coins={likeCoins}
        scrollerId="likeCoinsScroll"
      />
      <CoinScroller
        title="Trending Coins"
        coins={likeCoins}
        scrollerId="trendingCoinsScroll"
      />
    </div>
  );
};

export default YouMayLike;
