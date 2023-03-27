import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import LogoImg from "../public/images/logo-white.png";
import Solution1Img from "../public/images/solution1.png";
import Solution2Img from "../public/images/solution2.png";
import Solution3Img from "../public/images/solution3.png";
import Solution4Img from "../public/images/solution4.png";
import Solution from "./Solution";
import DbImg from "../public/images/db.png";
import BlockchainImg from "../public/images/blockchain.png";
import Process1Img from "../public/images/process1.png";
import Process2Img from "../public/images/process2.png";
import Process3Img from "../public/images/process3.png";
import AuthImg from "../public/images/auth.png";
import PlatformImg from "../public/images/platform.png";
import AnimatedImg from "./AnimatedImg";

const Process: FC = () => {
  const [isObserved, setIsObserved] = useState<boolean>(false);

  const dom = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const observe = () => {
    if (dom.current) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setIsObserved(true);
        else setIsObserved(false);
      });
      observer.current.observe(dom.current);

      return () => observer.current && observer.current.disconnect;
    }
  };

  useEffect(() => {
    observe();
  }, [dom]);

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
        <div className="mt-4 md:mt-8 flex justify-center">
          <Solution title="eKYC" img={Solution1Img} />
          <Solution title="Brand" img={Solution2Img} />
          <Solution title="Mobile" img={Solution3Img} />
          <Solution title="Desktop" img={Solution4Img} />
        </div>
        <AnimatedImg
          divStyle="flex justify-center py-10 md:py-20"
          imgStyle="w-32 md:w-60"
          img={Process1Img}
        />
        <div className="flex justify-center">
          <Image className="w-96 md:w-2/3" src={DbImg} alt="Image Process" />
        </div>
        <AnimatedImg
          divStyle="flex justify-center pt-10 md:pt-20"
          imgStyle="w-96 md:w-2/3"
          img={AuthImg}
        />
        <AnimatedImg
          divStyle="flex justify-center py-10 md:py-20"
          imgStyle="w-32 md:w-60"
          img={Process2Img}
        />
        <div className="flex justify-center">
          <Image
            className="w-48 md:w-96"
            src={BlockchainImg}
            alt="Blockchain"
          />
        </div>
        <AnimatedImg
          divStyle="flex justify-center py-10 md:py-20"
          imgStyle="w-24 md:w-40"
          img={Process3Img}
        />
        <div className="flex justify-center">
          <Image
            className="w-96 md:w-2/3 pb-10 md:pb-20"
            src={PlatformImg}
            alt="Service Platform"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
