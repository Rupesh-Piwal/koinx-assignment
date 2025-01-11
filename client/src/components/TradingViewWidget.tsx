"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement | null>(null); // Correct typing of useRef

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;

    const widgetConfig = {
      symbols: [["BITSTAMP:BTCUSD|1D"]],
      chartOnly: true,
      width: "100%",
      height: "100%",
      locale: "en",
      colorTheme: "dark",
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "left",
      scaleMode: "Normal",
      fontFamily: "Arial, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      headerFontSize: "medium",
      fontColor: "rgba(11, 20, 38, 1)",
      backgroundColor: "rgba(234, 238, 244, 1)",
      lineWidth: 1,
      lineType: 0,
      dateRanges: ["5d|5", "1m|30", "3m|60", "6m|120", "12m|1D", "all|1M"],
      lineColor: "rgba(0, 82, 254, 1)",
      topColor: "rgba(16, 83, 210, 0.16)",
      bottomColor: "rgba(255, 255, 255, 1)",
    };

    script.innerHTML = JSON.stringify(widgetConfig);
    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
