import Image from "next/image";
import { CoinListItem } from "../store/usePriceStore";

interface CoinCardProps {
  coin: CoinListItem;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => (
  <div className="border-2 border-[#E3E3E3] rounded-lg p-4 min-w-[252px]">
    <div className="w-[252px] h-[160px] flex gap-3 flex-col">
      <div className="flex items-center gap-2">
        <Image
          src={coin.thumb}
          alt={coin.symbol}
          width={30}
          height={30}
          style={{ borderRadius: "50%", width: "auto", height: "auto" }}
        />
        <p>{coin.symbol}</p>
        <p
          className={`p-1 pl-3 pr-3 ${
            Number(coin.price_change) > 0
              ? "bg-[#EBF9F4] text-[#32BE88]"
              : "bg-[#fef0ee] text-[#e96975]"
          } dark:bg-gray-700 rounded-md`}
        >
          {Number(coin.price_change) > 0
            ? `+${Number(coin.price_change).toFixed(2)}%`
            : `${Number(coin.price_change).toFixed(2)}%`}
        </p>
      </div>
      <p className="font-semibold text-xl">{coin.price}</p>
      {coin.sparkline && (
        <Image
          src={coin.sparkline}
          alt="sparkline"
          width={150}
          height={150}
          style={{ width: "225px", height: "225px" }}
        />
      )}
    </div>
  </div>
);

export default CoinCard;
