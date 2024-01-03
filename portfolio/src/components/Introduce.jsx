import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
export const Introduce = () => {
  return (
    <div className="w-[1440px] h-[552px] flex items-center justify-center flex-col-reverse md:flex-row">
      <div className=" w-[1280px] h-[360px] flex items-center gap-[48px] justify-around  ">
        <div className="text-3xl w-[768px] h-[360px] border-current ">
          <strong>Hi, I’m Sagar 👋</strong>
          <p className="text-sm  ">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <br />
          <div className="flex items-center">
            <CiLocationOn />
            <p className="text-sm">Ahmedabad,Inida</p>
          </div>
          <div className="flex items-center">
            <RxDotFilled />
            <p className="text-sm">Available for new projects</p>
          </div>
          <br />
          <div className="flex ">
            <FaGithub />
            <CiTwitter />
            <FaFigma />
          </div>
        </div>
        <div className="w-[400px] h-[360px] relative ">
          <div className="w-[280px] h-[320px] absolute z-10 left-5">
            <Image fill src={"/Pic.png"} />
          </div>
          <div className="w-[280px] h-[320px] bg-gray-200 absolute z-0 left-12 bottom-4 "></div>
        </div>
      </div>
    </div>
  );
};
export default Introduce;
