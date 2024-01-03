import Image from "next/image";
export const FourthPart = () => {
  return (
    <div className="w-[1440px] h-[1140px] bg-gray-50 flex flex-col justify-center items-center ">
      <div className="w-[1280px] h-[948px] gap-[48px] flex flex-col items-center justify-between">
        <div className="w-[1216px] h-[72px] flex flex-col gap-[16px] items-center ">
          <div className="w-[115px] h-[28px] bg-gray-200 flex justify-center items-center rounded-xl">
            Experience
          </div>
          <div>Here is a quick summary of my most recent experiences:</div>
        </div>
        <div className="w-[896px] h-[288px] flex  justify-center items-center bg-white  rounded-xl drop-shadow-md ">
          <div className="w-[832px] h-[224px] flex  ">
            <div className="w-[268.8px] h-[224px] relative  ">
              <div className="w-[204px] h-[28px] absolute">
                <Image fill src="/Column.png" />
              </div>
            </div>
            <div className="w-[384px] h-[224px] flex flex-col justify-between ">
              <strong>Sr. Frontend Developer</strong>
              <div className="h-[180px]">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </div>
            </div>
            <div className="w-[179.2px] h-[224px]">
              <div className="w-[146px] h-[24px] flex justify-items-end">
                <p>Nov 2021 - Present </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[896px] h-[264px] flex items-center justify-center bg-white  rounded-xl drop-shadow-md">
          <div className="w-[832px] h-[200px] flex ">
            <div className="w-[268.8px] h-[200px] relative  ">
              <div className="w-[204px] h-[28px] absolute">
                <Image fill src="/Column.png" />
              </div>
            </div>
            <div className="w-[384px] h-[224px] flex flex-col justify-between ">
              <strong>Team Lead</strong>
              <div className="h-[180px]">
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </div>
            </div>
            <div className="w-[179.2px] h-[224px]">
              <div className="w-[146px] h-[24px] flex justify-items-end">
                <p>Jul 2017 - Oct 2021 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[896px] h-[180px] flex items-center justify-center bg-white  rounded-xl drop-shadow-md ">
          <div className="w-[832px] h-[116px] flex ">
            <div className="w-[268.8px] h-[116px] relative  ">
              <div className="w-[204px] h-[28px] absolute">
                <Image fill src="/Column.png" />
              </div>
            </div>
            <div className="w-[384px] h-[116px] flex flex-col justify-between ">
              <strong>Full Stack Developer</strong>
              <div className="h-[116px]">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </div>
            </div>
            <div className="w-[179.2px] h-[116px]">
              <div className="w-[161px] h-[24px] flex justify-items-end">
                <p>Dec 2015 - May 2017 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourthPart;
