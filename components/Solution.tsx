import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface SolutionProps {
  title: string;
  img: StaticImageData;
}

const Solution: FC<SolutionProps> = ({ title, img }) => {
  return (
    <div className="flex flex-col justify-center items-center text-main font-bold md:text-2xl mx-4 md:mx-8">
      <Image className="w-12 md:w-24 mb-2 md:mb-4" src={img} alt={title} />
      <div>{title}</div>
    </div>
  );
};

export default Solution;
