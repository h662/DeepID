import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { useObserve } from "../hooks";

interface AnimatedImgProps {
  divStyle: string;
  imgStyle: string;
  img: StaticImageData;
}

const AnimatedImg: FC<AnimatedImgProps> = ({ img, imgStyle, divStyle }) => {
  const { dom, isObserved } = useObserve();

  return (
    <div
      ref={dom}
      className={`${divStyle} ${
        isObserved ? "animate__animated animate__fadeIn" : ""
      }`}
    >
      <Image className={imgStyle} src={img} alt="Deep ID" />
    </div>
  );
};

export default AnimatedImg;
