import Image from "next/image";
import { FC } from "react";
import ExplanationImg from "../public/images/explanation.gif";

const Explanation: FC = () => {
  return (
    <div
      id="explanation"
      className="flex flex-col md:flex-row-reverse justify-center items-center py-4 md:py-12 shadow-lg max-w-screen-lg mx-auto"
    >
      <div className="w-1/2 md:mx-4">
        <Image src={ExplanationImg} alt="Deep ID" />
      </div>
      <div className="py-8 md:w-1/2 px-8">
        <div className="mb-4 font-bold text-2xl md:text-4xl">Deep ID ?</div>
        <div>
          AI Vision & Blockchain technology integrated Anti-Counterfeiting
          Serviced Platform
        </div>
      </div>
    </div>
  );
};

export default Explanation;
