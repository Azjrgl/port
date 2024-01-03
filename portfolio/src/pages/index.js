import Introduces from "@/components/Introduce";
import AboutMe from "@/components/AboutMe";
import { Logo } from "@/components/Thirdpart";
import FourthPart from "@/components/FourthPart";
import FifthPart from "@/components/FifthPart";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="mx-auto max-w-screen-xl flex  flex-col items-center">
      <Introduces />
      <AboutMe />
      <Logo />
      <FourthPart />
      <FifthPart />
      <Footer />
    </div>
  );
}
export default Home;
