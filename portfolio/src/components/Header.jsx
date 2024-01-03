import { useTheme } from "next-themes";
import { MdOutlineWbSunny, MdOutlineMenu } from "react-icons/md";

export const HeaderLayout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const routes = ["About", "Work", "Testimonials", "Contact"];

  return (
    <div className="mx-auto max-w-screen-xl ">
      <div className="px-20 py-4 flex justify-between">
        <h2>{"<SS />"}</h2>
        <div className="hidden md:flex-center divide-x-2">
          <div className="flex-center gap-6">
            {routes.map((route, index) => (
              <p key={index}>{route}</p>
            ))}
          </div>
          <div className="flex-center ms-8">
            <MdOutlineWbSunny
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <button className="rounded-xl bg-black text-white px-4 py-1.5 ">
              Download CV
            </button>
          </div>
        </div>
        <MdOutlineMenu size={24} className="block md:hidden" />
      </div>
      {children}
    </div>
  );
};
