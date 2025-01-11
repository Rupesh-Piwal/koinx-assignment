import { CoinListItem } from "../store/usePriceStore";
import CoinCard from "./CoinCard";
import ScrollButton from "./ScrollButton";

interface CoinScrollerProps {
  title: string;
  coins: CoinListItem[];
  scrollerId: string;
}

const CoinScroller: React.FC<CoinScrollerProps> = ({
  title,
  coins,
  scrollerId,
}) => {
  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById(scrollerId);
    if (container) {
      container.scrollLeft += direction === "left" ? -200 : 200;
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold text-2xl">{title}</h1>
      <div className="relative">
        <ScrollButton direction="left" onClick={() => handleScroll("left")} />
        <div
          id={scrollerId}
          className="flex w-[100%] gap-4 overflow-x-scroll overflow-y-hidden scroll-smooth px-1"
          style={{ scrollbarWidth: "none" }}
        >
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
        <ScrollButton direction="right" onClick={() => handleScroll("right")} />
      </div>
    </div>
  );
};

export default CoinScroller;
