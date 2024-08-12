import { useTheme } from "next-themes";
import { HomeTypewriter } from "@/components/ui/home-typewriter";

export const HomePage = () => {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col md:flex-row h-screen  justify-center md:justify-start items-center relative md:px-10 md:py-10">
      <div className="py-2-5 mb-2.5 px-2.5 lg:px-10 flex-col md:w-full items-center md:items-start break-words font-mono font-bold ">
        <h1 className="uppercase text-3xl md:text-7xl md:text">
          User Experience
        </h1>

        <h2 className={`${theme && theme === 'dark' ? 'customOutlineDark' ?? 'customOutlineLight' : 'customOutlineLight' } uppercase text-3xl md:text-7xl`}>
          User Experience
        </h2>
        <div className="bg-[#efba2b] w-1/2 px-5 md:px-10 py-2 md:py-4 rounded-lg shadow -rotate-3 border-black border-2 flex justify-center self-start ml-5">
          <h3 className="text-xl text-accent">Under Construction</h3>
        </div>
      </div>
      <HomeTypewriter />
    </section>
  );
};

export default HomePage;
