import React from "react";

const Tab = ({ activeTab, setActiveTab }: any) => {
  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "fundamentals", label: "Fundamentals" },
    { key: "news", label: "News Insights" },
    { key: "sentiments", label: "Sentiments" },
    { key: "team", label: "Team" },
    { key: "technicals", label: "Technicals" },
    { key: "tokenomics", label: "Tokenomics" },
  ];

  return (
    <div className="mt-8 mb-5">
      <div className="flex flex-wrap sm:flex-nowrap space-x-6 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-2 py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
              activeTab === tab.key
                ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
