import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="text-xs md:text-sm max-w-screen-lg mx-auto px-10 py-4 md:px-20 md:py-8  border-b-2 bg-main text-gray-300">
      <div>
        <div>HEAD OFFICE</div>
        <div className="md:mt-1">
          80-67, Gwahak-ro, Yuseong-gu, Daejeon, Republic of Korea
        </div>
      </div>
      <div className="mt-2 md:mt-4">
        <div>Fintech R&D Lab.</div>
        <div className="md:mt-1">
          #1123, 78, Mapo-Daero, Mapo-Ku, Republic of Korea
        </div>
      </div>
      <div className="mt-2 md:mt-4">
        <div>SEOUL BRANCH OFFICE</div>
        <div className="md:mt-1">
          76, Haneul-gil, Gangseo-gu, Seoul, Republic of Korea
        </div>
      </div>
    </div>
  );
};

export default Footer;
