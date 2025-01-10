import { create } from "zustand";

interface BitcoinPrice {
  inr: number;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
}

interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    price_btc: number;
    score: number;
  };
}

interface PriceStore {
  price: BitcoinPrice | null;
  trending: TrendingCoin[];
  loading: boolean;
  trendingLoading: boolean;
  error: string | null;
  fetchPrice: () => Promise<void>;
  fetchTrending: () => Promise<void>;
}

export const usePriceStore = create<PriceStore>((set) => ({
  price: null,
  trending: [],
  loading: false,
  trendingLoading: false,
  error: null,
  fetchPrice: async () => {
    try {
      set({ loading: true, error: null });
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24h_change=true"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch price data");
      }

      const data = await response.json();
    //   console.log("Price Data:", data); 

      set({ price: data.bitcoin, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchTrending: async () => {
    try {
      set({ trendingLoading: true, error: null });
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch trending data");
      }

      const data = await response.json();
      set({ trending: data.coins.slice(0, 3), trendingLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, trendingLoading: false });
    }
  },
}));
