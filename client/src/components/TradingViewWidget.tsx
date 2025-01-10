"use client";
import { useEffect } from "react";

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof TradingView !== "undefined") {
        new TradingView.widget({
          width: "100%",
          height: "100%",
          symbol: "BITSTAMP:BTCUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tradingview_chart" className="h-full" />;
};

export default TradingViewWidget;
