import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { LuCopy } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
const Footer = () => {
  const [copy, setCopy] = useState(false);
  const Oncopy = () => {
    setCopy((copy) => !copy);
  };
  let timeout;
  function setFunc() {
    timeout = setTimeout(backFunc, 2000);
  }
  function backFunc() {
    setCopy((copy) => !copy);
  }
  return (
    <div className="w-[1440px] h-[560px] flex justify-center items-center">
      <div className="w-[1280px] h-[368px] ">
        <div className="w-[1216px] h-[100px] flex flex-col justify-between gap-[48px] items-center">
          <div className="w-[122px] h-[28px] rounded-xl bg-gray-200 flex justify-center items-center">
            Get in touch
          </div>
          <div className="w-[576px] h-[56px] text-center text-[20px]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
          <div className="w-[596px] h-[104px] flex flex-col items-center">
            <div className="flex items-center text-[32px] gap-[20px] ">
              <CiMail className="w-[32px] h-[32px]" />
              <div>reachsagarshah@gmail.com </div>
              <CopyToClipboard text="reachsagarshah@gmail.com" onCopy={Oncopy}>
                <LuCopy
                  onClick={setFunc}
                  className="hover:scale-125 active:100 ease-in-out cursor-pointer"
                />
              </CopyToClipboard>
            </div>
            <div className="flex items-center text-[32px] gap-[20px]">
              <IoCallOutline className="w-[32px] h-[32px]" />
              +91 8980500565
              <CopyToClipboard text="+91 8980500565" onCopy={Oncopy}>
                <LuCopy
                  onClick={setFunc}
                  className="hover:scale-125 active:100 ease-in-out cursor-pointer"
                />
              </CopyToClipboard>
            </div>
          </div>
          <div className="w-[312px] h-[68px] flex flex-col justify-between gap-[8px]">
            You may also find me on these platforms!
            <div className="w-[312px] h-[36px] flex justify-center gap-[4px]  ">
              <FiGithub className="w-[36px] h-[36px]" />
              <FiTwitter className="w-[36px] h-[36px]" />
              <FaFigma className="w-[36px] h-[36px]" />
            </div>
          </div>
          <div>
            <AnimatePresence>
              {copy && (
                <motion.div
                  className="fixed bottom-[90px] right-[48%] px-[20px] py-[5px] bg-black text-white  dark:bg-white dark:text-black rounded-lg"
                  initial={{ scale: 0, }}
                  animate={{ scale: 1, transition: { duration: 1 } }}
                  exit={{ scale: 0, transition: { duration: 1 } }}
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
