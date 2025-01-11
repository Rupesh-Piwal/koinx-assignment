import { create } from "zustand";

interface BitcoinPrice {
  inr: number;
  inr_24h_change?: number;
  usd: number;
  usd_24h_change?: number;
  name: string;
  symbol: string;
  image: {
    thumb: string;
  };
}

interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data?: TrendingCoinData;
  };
}

interface TrendingCoinData {
  price_change_percentage_24h: {
    usd: number;
  };
  price: string;
  sparkline: string;
}

export interface CoinListItem {
  id: string;
  symbol: string;
  thumb: string;
  price_change: number;
  price: string;
  sparkline: string;
}

interface PriceStore {
  price: BitcoinPrice | null;
  trending: TrendingCoin[];
  trendingCoins: CoinListItem[];
  likeCoins: CoinListItem[];
  loading: boolean;
  trendingLoading: boolean;
  error: string | null;
  fetchPrice: () => Promise<void>;
  fetchTrending: () => Promise<void>;
  formatTrendingData: () => void;
}

export const usePriceStore = create<PriceStore>((set, get) => ({
  price: null,
  trending: [],
  trendingCoins: [],
  likeCoins: [],
  loading: false,
  trendingLoading: false,
  error: null,

  fetchPrice: async () => {
    try {
      set({ loading: true, error: null });
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key":
              process.env.NEXT_PUBLIC_COINGECKO_API_KEY || "",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch price data");
      }

      const data = await response.json();

      const inrPrice = data.market_data.current_price.inr;
      const usdPrice = data.market_data.current_price.usd;
      const inrChange =
        data.market_data.price_change_percentage_24h_in_currency.inr;
      const usdChange =
        data.market_data.price_change_percentage_24h_in_currency.usd;

      set({
        price: {
          inr: inrPrice,
          usd: usdPrice,
          inr_24h_change: inrChange,
          usd_24h_change: usdChange,
          name: data.name,
          symbol: data.symbol,
          image: data.image,
        },
        loading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  fetchTrending: async () => {
    try {
      set({ trendingLoading: true, error: null });
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending",
        {
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key":
              process.env.NEXT_PUBLIC_COINGECKO_API_KEY || "",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch trending data");
      }

      const data = await response.json();
      const trendingData: TrendingCoin[] = data.coins.slice(0, 12); 

      set({
        trending: trendingData,
        trendingLoading: false,
      });

      get().formatTrendingData();
    } catch (error) {
      set({ error: (error as Error).message, trendingLoading: false });
    }
  },

  formatTrendingData: () => {
    const { trending } = get();

    const formattedCoins: CoinListItem[] = trending.map((coin) => ({
      id: coin.item.id,
      symbol: coin.item.symbol.toUpperCase(),
      thumb: coin.item.thumb,
      price_change: coin.item.data?.price_change_percentage_24h.usd || 0,
      price: coin.item.data?.price || "0",
      sparkline: coin.item.data?.sparkline || "",
    }));

    set({
      trendingCoins: formattedCoins.slice(0, 3), 
      likeCoins: formattedCoins, 
    });
  },
}));
