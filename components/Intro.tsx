import Image from "next/image";
import { FC } from "react";
import IntroGif from "../public/images/intro.gif";
import IntroLoading from "../public/images/intro.jpg";
import { Link } from "react-scroll";

const Intro: FC = () => {
  return (
    <div className="relative flex justify-center items-end h-72 md:h-96 shadow-lg max-w-screen-lg mx-auto">
      <div className="absolute top-0 z-20">
        <Image
          className="w-screen max-w-5xl mx-auto h-72 md:h-96 object-cover"
          src={IntroGif}
          alt="Intro"
        />
      </div>
      <div className="absolute top-0 z-10">
        <Image
          className="w-screen max-w-5xl mx-auto h-72 md:h-96"
          src={IntroLoading}
          alt="IntroLoading"
        />
      </div>
      <button className="z-30 text-white font-black mb-4 text-4xl md:text-6xl animate__animated animate__heartBeat animate__infinite">
        <Link to="explanation" spy={true} smooth={true}>
          ⌵
        </Link>
      </button>
    </div>
  );
};

export default Intro;
