import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const data = {
    datasets: [
      {
        label: "Percentage",
        data: [80, 20], 
        backgroundColor: ["#0082FF", "#FAA002"],
        hoverBackgroundColor: ["#006AD1", "#D98800"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"doughnut">) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}%`; 
          },
        },
      },
    },
  };

  return (
    <section className="bg-white dark:bg-gray-800 rounded-md p-6 mt-3 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Tokenomics</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Initial Distribution</h2>
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div className="w-full md:w-1/2">
            <Doughnut data={data} options={options} height={100} width={100} />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <div className="flex gap-2 items-center">
              <span
                className="w-[10px] h-[10px] bg-[#0082FF]"
                style={{ borderRadius: "50%" }}
              ></span>
              <p>Crowdsale investors: 80%</p>
            </div>
            <div className="flex gap-2 items-center">
              <span
                className="w-[10px] h-[10px] bg-[#FAA002]"
                style={{ borderRadius: "50%" }}
              ></span>
              <p>Foundation: 20%</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[16px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aperiam!
        Ab id atque iure qui dolorem optio nemo labore et omnis temporibus fugit
        harum error impedit tempore neque unde in possimus, modi, cum doloribus
        illo voluptatibus ex. Fuga beatae modi dolores eius deserunt molestiae,
        quos reiciendis dignissimos dolorum dolor harum quibusdam nisi esse
        quis, ut consectetur eveniet aliquid accusamus velit!
      </p>
    </section>
  );
};

export default Tokenomics;
