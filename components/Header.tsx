import { FC } from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white max-w-screen-lg mx-auto flex justify-between pt-4 pb-1 md:pb-2 items-end px-2 text-xs md:text-base shadow-lg">
      <div className="md:pl-4">Bring the value</div>
      <Image className="w-24 md:w-48" src={Logo} alt="Deep ID" />
      <div className="md:pr-4">Create the process</div>
    </header>
  );
};

export default Header;
