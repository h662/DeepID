import Image from "next/image";
import { FC } from "react";
import LogoImg from "../public/images/logo-white.png";
import Solution1Img from "../public/images/solution1.png";
import Solution2Img from "../public/images/solution2.png";
import Solution3Img from "../public/images/solution3.png";
import Solution4Img from "../public/images/solution4.png";
import Solution from "./Solution";
import Db1Img from "../public/images/db1.png";
import Db2Img from "../public/images/db2.png";
import BlockchainImg from "../public/images/blockchain.png";

const Process: FC = () => {
  return (
    <div className="shadow-lg  max-w-screen-lg mx-auto">
      <div className="bg-main text-white text-center text-xl md:text-4xl tracking-wider py-6 flex justify-center items-center">
        <Image
          className="w-36 md:w-60 mr-4 md:mr-8"
          src={LogoImg}
          alt="Deep ID"
        />
        <span>Operation Process</span>
      </div>
      <div className="border-8 border-main p-4">
        <div className="md:mt-4 flex justify-center">
          <Solution title="eKYC" img={Solution1Img} />
          <Solution title="Brand" img={Solution2Img} />
          <Solution title="Mobile" img={Solution3Img} />
          <Solution title="Desktop" img={Solution4Img} />
        </div>
        <div className="flex justify-center py-20 md:py-40">
          <Image
            className="w-36 md:w-60 mx-4 md:mx-8"
            src={Db1Img}
            alt="Database 1"
          />
          <Image
            className="w-36 md:w-60 mx-4 md:mx-8"
            src={Db2Img}
            alt="Database 2"
          />
        </div>
        <div className="flex justify-center pb-10 md:pb-20">
          <Image
            className="w-48 md:w-96"
            src={BlockchainImg}
            alt="Blockchain"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
