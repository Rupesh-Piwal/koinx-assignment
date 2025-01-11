import Image, { StaticImageData } from "next/image";
import smith from "@/public/smith.png";
import elina from "@/public/elina.png";
import john from "@/public/john.png";

function TeamCard() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-4">
      <div>
        <h2 className="text-2xl text-[#0F1629] font-semibold">Team</h2>
        <p className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <div>
          <Card name="John Smith" des="Designation here" src={smith} />
          <Card name="Elina Williams" des="Designation here" src={elina} />
          <Card name="John Doe" des="Designation here" src={john} />
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  name: string;
  src?: string | StaticImageData;
  des: string;
}

function Card({ name, src, des }: CardProps) {
  return (
    <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
      <div className="flex flex-col items-center justify-center">
        {src ? (
          <Image
            className="rounded-xl w-44"
            src={src}
            alt={name}
            width={146}
            height={146}
          />
        ) : (
          <div className="rounded-xl w-44 lg:w-96 h-44 lg:h-96 bg-gray-300 flex items-center justify-center text-sm text-gray-500">
            No Image
          </div>
        )}
        <div className="text-[#0F1629] text-[15px] font-semibold py-1">
          {name}
        </div>
        <div className="text-[#788F9B] text-xs font-medium">{des}</div>
      </div>
      <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. <br /> Tellus sit ornare netus
        sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis
        laoreet <br /> nec neque sed pellentesque viverra. Consectetur proin
        amet ut id facilisi quis consectetur. Tellus <br /> gravida ultricies
        feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida
        praesent interdum.
      </div>
    </div>
  );
}

export default TeamCard;
