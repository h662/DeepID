import { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col px-10 md:px-20 shadow-inner text-sm md:text-2xl bg-main text-gray-300 border-t-2 pt-4 md:mt-8">
      <div className="flex  items-center">
        <div>ken@logichain.kr</div>
      </div>
      <div className="flex  items-center">
        <div>+82-(0)2-458-7321</div>
      </div>
    </div>
  );
};

export default Contact;
