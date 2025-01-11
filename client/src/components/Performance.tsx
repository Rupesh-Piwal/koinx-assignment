import Image from "next/image";
import Link from "next/link";
import React from "react";

const Performance = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-800 rounded-md gap-8">
        <div className="p-5 flex flex-col gap-8 w-full">
          <h1 className="font-semibold text-2xl">Performance</h1>
          <div className="w-full flex flex-col gap-10">
            <div className="flex justify-between items-center w-full gap-10">
              <div className="flex flex-col gap-2 text-[#44475B]">
                <p className="text-[13.78px] whitespace-nowrap">Today's Low</p>
                <p className="text-[#44475B] text-[15.63px] font-semibold">
                  46,932.22
                </p>
              </div>
              <div className="w-full">
                <div className="bg-gradient-to-r from-[#FF4949] via-[#FF4E11] via-[#FC870A] via-[#FFAF11] via-[#C2CB21] to-[#11EB68] h-[10px]"></div>
              </div>
              <div className="flex flex-col gap-2 text-[#44475B]">
                <p className="text-[13.78px] whitespace-nowrap">Today's High</p>
                <p className="text-[#44475B] text-[15.63px] font-semibold">
                  49,343.83
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full gap-10">
              <div className="flex flex-col gap-2 text-[#44475B]">
                <p className="text-[13.78px] whitespace-nowrap">52W Low</p>
                <p className="text-[#44475B] text-[15.63px] font-semibold">
                  16,930.22
                </p>
              </div>
              <div className="w-full">
                <div className="bg-gradient-to-r from-[#FF4949] via-[#FF4E11] via-[#FC870A] via-[#FFAF11] via-[#C2CB21] to-[#11EB68] h-[10px]"></div>
              </div>
              <div className="flex flex-col gap-2 text-[#44475B]">
                <p className="text-[13.78px] whitespace-nowrap">52W High</p>
                <p className="text-[#44475B] text-[15.63px] font-semibold">
                  49,743.83
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-8 w-full">
          <div className="flex gap-2">
            <h1 className="font-semibold text-lg text-[#44475B]">
              Fundamentals
            </h1>
          </div>
          <div className="flex justify-between">
            <div className="w-[45%] flex flex-col gap-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b-2 border-[#DEE2E6] pb-5"
                >
                  <p className="text-[#768396] text-[14px]">Bitcoin Prize</p>
                  <p className="font-medium text-[13px]">$16,815.46</p>
                </div>
              ))}
            </div>
            <div className="w-[45%] flex flex-col gap-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b-2 border-[#DEE2E6] pb-5"
                >
                  <p className="text-[#768396] text-[14px]">Bitcoin Prize</p>
                  <p className="font-medium text-[13px]">$16,815.46</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;
