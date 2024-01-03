import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export const FifthPart = () => {
  const array = [
    "React",
    "Next.js",
    "Typescript",
    "Next.js",
    "PostgreSQL",
    "Tailwindcss",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];
  return (
    <div className="w-[1440px] h-[1848px] flex justify-center items-center">
      <div className="w-[1280px] h-[1656px] flex flex-col gap-[48px] ">
        <div className="w-[1216px] h-[72px] flex flex-col items-center justify-between">
          <div className="w-[75px] h-[28px] rounded-xl bg-gray-200 flex justify-center items-center">
            Work
          </div>
          <div>Some of the noteworthy projects I have built:</div>
        </div>
        <div className="w-[1152px] h-[480px] shadow-xl rounded-xl flex ">
          <div className="w-[576px] h-[480px] relative  flex justify-center items-center  bg-gray-100  ">
            <div className="w-[480px] h-[384px] absolute rounded-xl object-scale-down ">
              <Image fill src="/Picture.png" />
            </div>
          </div>
          <div className="w-[576px] flex flex-col justify-center items-center gap-[24px] ">
            <div className="w-[480px] h-[28px]">
              <strong>Fiskill</strong>
            </div>
            <div className="w-[480px] h-[96px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="w-[480px] h-[100px] gap-[8px] flex flex-wrap">
              {array.map((props) => (
                <div className="rounded-[12px] px-[20px] py-[4px] bg-gray-200">
                  {props}
                </div>
              ))}
            </div>
            <div className="w-[480px] h-[36px] flex items-center">
              <FaExternalLinkAlt className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
        <div className="w-[1152px] h-[480px] shadow-xl rounded-xl flex flex-row-reverse">
          <div className="w-[576px] h-[480px] relative  flex justify-center items-center  bg-gray-100  ">
            <div className="w-[480px] h-[384px] absolute rounded-xl object-scale-down ">
              <Image fill src="/Picture.png" />
            </div>
          </div>
          <div className="w-[576px] flex flex-col justify-center items-center gap-[24px] ">
            <div className="w-[480px] h-[28px]">
              <strong>Fiskill</strong>
            </div>
            <div className="w-[480px] h-[96px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="w-[480px] h-[100px] gap-[8px] flex flex-wrap">
              {array.map((props) => (
                <div className="rounded-[12px] px-[20px] py-[4px] bg-gray-200">
                  {props}
                </div>
              ))}
            </div>
            <div className="w-[480px] h-[36px] flex items-center">
              <FaExternalLinkAlt className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
        <div className="w-[1152px] h-[480px] shadow-xl rounded-xl flex ">
          <div className="w-[576px] h-[480px] relative  flex justify-center items-center  bg-gray-100  ">
            <div className="w-[480px] h-[384px] absolute rounded-xl object-scale-down ">
              <Image fill src="/Picture.png" />
            </div>
          </div>
          <div className="w-[576px] flex flex-col justify-center items-center gap-[24px] ">
            <div className="w-[480px] h-[28px]">
              <strong>Fiskill</strong>
            </div>
            <div className="w-[480px] h-[96px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="w-[480px] h-[100px] gap-[8px] flex flex-wrap">
              {array.map((props) => (
                <div className="rounded-[12px] px-[20px] py-[4px] bg-gray-200">
                  {props}
                </div>
              ))}
            </div>
            <div className="w-[480px] h-[36px] flex items-center">
              <FaExternalLinkAlt className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPart;
