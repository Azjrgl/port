import Image from "next/image";

const LanguageList = (props) => {
  const { imgsrc, text } = props;
  return (
    <div className="flex h-[100px]  flex-col  items-center justify-between   ">
      <Image
        className="w-[64px] h-[64px] object-scale-down "
        src={imgsrc}
        width={64}
        height={64}
      />
      <p>{text}</p>
    </div>
  );
};
const Logos = [
  { imgsrc: "/js.png", text: "JavaScript" },
  { imgsrc: "/Type.png", text: "TypeScript" },
  { imgsrc: "/Tech.png", text: "React" },
  { imgsrc: "/nextjs.png", text: "Next.js" },
  { imgsrc: "/nodejs.png", text: "Node.js" },
  { imgsrc: "/express.png", text: "Express.js" },
  { imgsrc: "/Nestjs.png", text: "Node.js" },
  { imgsrc: "/Socket.io.png", text: "Socket.io" },

  { imgsrc: "/Postegre.png", text: "PostgreSQL" },
  { imgsrc: "/MongoDB.png", text: "MongoDB" },

  { imgsrc: "/Sass.png", text: "Sass/Scss" },
  { imgsrc: "/Tailwind.png", text: "Tailwindcss" },
  { imgsrc: "/Figma.png", text: "Figma" },
  { imgsrc: "/Cypress.png", text: "Cypress" },
  { imgsrc: "/Storybook.png", text: "Storybook" },
  { imgsrc: "/Git.png", text: "Git" },
];

export const Logo = () => {
  return (
    <div className="w-[1440px] h-[560px] px-[96px] py-[80px] bg-gray-default">
      <div className="w-[1280px] h-[368px] flex flex-col gap-[48px]">
        <div className="w-[1296px] h-[72px] flex flex-col items-center justify-between">
          <div className="w-[75px] h-[28px] bg-gray-200  flex items-center justify-center rounded-md">
            <p>Skills</p>
          </div>
          <div className="h-[28px] flex items-center ">
            <p>The skills, tools and technologies I am really good at:</p>
          </div>
        </div>
        <div className="flex  pl-[50px] md:pl-[0px]  w-[443px] md:w-[1216px] h-[664px] md:h-[248px] pb-[200px] md:pb-[200px] ">
          <div className="flex w-[100%]   gap-x-[60px] md:gap-x-[90px] gap-y-[40px] flex-wrap ">
            {Logos.map((el, i) => {
              return (
                <div>
                  <div>
                    <LanguageList key={i} imgsrc={el.imgsrc} text={el.text} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
