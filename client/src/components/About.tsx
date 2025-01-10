import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import profits from "@/public/profits.png";
import liability from "@/public/liability.png";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const About = () => {
  return (
    <div className="mx-[20px] space-y-7">
      <div className="flex flex-col items-start gap-2.5">
        <h2 className="text-[24px] font-semibold">About Bitcoin</h2>
        <h3 className="text-[18px] font-bold">What is Bitcoin?</h3>
        <p className="text-[16px] font-medium">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last <br /> 24 hours. It is
          currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40%
          from its 7-day all-time <br /> low of $16,394.75. BTC has a
          circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <Separator className="text-[#C9CFDD]/60" />
      <div>
        <h3 className="text-[18px] font-bold">Lorem ipsum dolor sit amet</h3>
        <p className="text-[16px] font-medium">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus <br /> urna et tellus aliquam
          dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque <br /> fermentum sapien morbi sodales odio sed rhoncus.
          Ultricies urna volutpat pendisse enim facilisi diam ut sed. <br />{" "}
          Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.{" "}
          <br />
          <br /> Diam praesent massa dapibus magna aliquam a dictumst volutpat.
          Egestas vitae pellentesque auctor amet. <br /> Nunc sagittis libero
          adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
          velit in senectus <br /> enim dui. Turpis tristique placerat interdum
          sed volutpat. Id imperdiet magna eget eros donec cursus nunc. <br />{" "}
          Mauris faucibus diam mi nunc praesent massa turpis a. Integer
          dignissim augue viverra nulla et quis lobortis <br /> phasellus.
          Integer pellentesque enim convallis ultricies at. <br /> <br />{" "}
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing <br /> semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames <br /> amet dui. Purus ultrices tincidunt volutpat
          in eget. Ullamcorper dui
        </p>
      </div>
      <Separator className="text-[#C9CFDD]/60" />
      <div>
        <h2 className="text-[24px] font-semibold mb-3">
          Already Holding Bitcoin?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-row items-center pl-4 gap-4 w-[388px] h-[151px] bg-gradient-to-tl from-[#79F1A4] to-[#0E5CAD] rounded-[6.65px]">
            <div>
              <Image src={profits} alt="calculate-profits" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-[20px] font-bold text-[#ffffff]">
                Calculate your <br /> Profits
              </p>
              <Button className="text-[#0F1629] bg-[#ffffff] w-[132px] h-[32px] hover:bg-white hover:text-[#000000]">
                Check Now
                <span>
                  <MoveRight />
                </span>
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center pl-4 gap-4 w-[388px] h-[151px] bg-gradient-to-tl from-[#FF9865] to-[#EF3031] rounded-[6.65px]">
            <div>
              <Image src={liability} alt="calculate-profits" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-[20px] font-bold text-[#ffffff]">
                Calculate your tax
                <br /> liability
              </p>
              <Button className="text-[#0F1629] bg-[#ffffff] w-[132px] h-[32px] hover:bg-white hover:text-[#000000]">
                Check Now
                <span>
                  <MoveRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Separator className="text-[#C9CFDD]/60" />
      <div>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing <br /> semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames <br /> amet dui. Purus ultrices tincidunt volutpat
          in eget. Ullamcorper dui
        </p>
      </div>
    </div>
  );
};

export default About;
