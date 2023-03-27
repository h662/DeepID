import Image from "next/image";
import { FC } from "react";
import PartnersImg from "../public/images/partners.png";

const Partners: FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-center text-3xl md:text-6xl py-10 md:py-20 font-bold">
      <div>Collaboration partners</div>
      <Image
        className="mt-12 md:mt-24 px-4 md:w-3/4"
        src={PartnersImg}
        alt="Partners"
      />
    </div>
  );
};

export default Partners;
