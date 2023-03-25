import { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-end p-20 text-2xl">
      <div></div>
      <div className="text-6xl mb-12">Contact Us</div>
      <div className="flex w-96 justify-end">
        <div>✉️</div>
        <div className="w-60 text-right">ken@deep-id.io</div>
      </div>
      <div className="flex">
        <div>📞</div>
        <div className="w-60 text-right">+82 10-8626-2622</div>
      </div>
    </div>
  );
};

export default Contact;
