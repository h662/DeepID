import Image from "next/image";
import { FC } from "react";
import ExplanationImg from "../public/images/explanation.png";

const Explanation: FC = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center py-4 md:py-12 shadow-lg">
      <div className="w-1/2">
        <Image src={ExplanationImg} alt="Deep ID" />
      </div>
      <div className="py-8 md:w-1/2 px-8">
        <div className="mb-4 font-bold">Deep ID ?</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          earum, tempora dolore quis voluptatem, cumque consectetur nihil
          dolorem debitis, voluptates fuga corrupti possimus non iure! Nisi
          consequuntur ea veritatis fugiat!
        </div>
      </div>
    </div>
  );
};

export default Explanation;
