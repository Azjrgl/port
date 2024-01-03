import Image from "next/image";
export const AboutMe = () => {
  return (
    <div className="w-[1440px] h-[962px] flex flex-col justify-center gap-[48px] bg-gray-50 dark:bg-gray-600 ">
      <div className="w-[1280px] h-[770px] flex flex-col justify-center gap-[48px] ">
        <div className=" w-[1216px] h-[28px] flex justify-center">
          <p
            className="w-[105px] h-[28px] bg-gray-300 flex items-center justify-center rounded-md
        "
          >
            About me
          </p>
        </div>
        <div className=" relative w-[1216px] h-[694px] flex justify-around gap-[48px] ">
          <div className="w-[584px] h-[694px] ">
            <div className="absolute w-[400px] h-[480px] z-10 left-10 ">
              <Image fill src="/BigPic.png" />
            </div>
            <div className="absolute w-[400px] h-[480px] bg-gray-100 z-0 left-1 top-6 dark:bg-gray-200"></div>
          </div>
          <div className="w-[584px] h-[694px] ">
            <strong className="font-semibold text-lg">
              Curious about me? Here you have it:
            </strong>
            <p className="h-[120px] font-normal text-sm">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="h-[144px] font-normal text-sm">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="h-[48px] font-normal text-sm">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="h-[96px] font-normal text-sm">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="h-[58px]">Finally, some quick bits about me.</p>
            <div className="h-[58px] flex gap-[10px]">
              <div className="w-[287px]">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </div>
              <div className="w-[287px]">
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </div>
            </div>
            <p className="h-[48px]">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
