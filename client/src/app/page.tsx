import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import logo from "@/public/get-started.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="h-screen grid grid-cols-1 md:grid-cols-6 p-10 mx-auto gap-16">
        <div className="bg-green-300 col-span-4 rounded-[8px]">
          left-section
        </div>
        <div className="bg-red-100 col-span-2 mx-auto">
          <div className=" relative text-center rounded-[16px] bg-[#0052FE] flex flex-col w-[300px] h-[384px]  md:w-[426px] md:h-[515px] items-center gap-6 md:py-8">
            <h2 className="text-[22px] md:text-[24px] text-[#ffffff]">
              Get Started with KoinX <br /> for FREE
            </h2>
            <p className="text-[14px] text-[#F2F2F2]">
              With our range of features that you can equip for <br /> free,
              KoinX allows you to be more educated <br /> and aware of your tax
              reports.
            </p>
            <Image
              src={logo}
              alt="get-started"
              className="w-[149px] h-[139px] md:w-[178px] md:h-[166px] mb-4 md:mb-0"
            />
            <Button className="text-[#0F1629] font-semibold text-[16px] bg-[#ffffff] rounded-[8px] hover:text-[#000000] hover:bg-[#ffffff] w-[237px] h-[48px]">
              Get Started for FREE
              <span>
                <MoveRight />
              </span>
            </Button>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
}
