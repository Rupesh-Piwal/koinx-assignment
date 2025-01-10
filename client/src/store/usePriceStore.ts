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
      console.log("API Response:", data);

      const inrPrice = data.market_data.current_price.inr;
      const usdPrice = data.market_data.current_price.usd;
      const inrChange =
        data.market_data.price_change_percentage_24h_in_currency.inr;
      const usdChange =
        data.market_data.price_change_percentage_24h_in_currency.usd;

      console.log("Current INR Price:", inrPrice);
      console.log("Current USD Price:", usdPrice);
      console.log("INR 24h Change:", inrChange);
      console.log("USD 24h Change:", usdChange);

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
