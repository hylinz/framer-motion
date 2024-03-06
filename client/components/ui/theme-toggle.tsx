"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";


const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex">
      <SliderToggle theme={theme || "dark"} setTheme={setTheme} />
    </div>
  );
};

const SliderToggle = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "light" ? "text-secondary" : "text-primary"
        }`}
        onClick={() => {
          setTheme("light");
        }}
      >
                <FiSun className="relative z-10 text-lg md:text-sm text-white" />

        <span className="relative z-10 hidden md:inline-block">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "dark" ? "text-primary" : "text-primary"
        }`}
        onClick={() => {
          setTheme("dark");
        }}
      >

        <FiMoon className="relative z-10 text-lg md:text-sm text-secondary text-white" />

        <span className="relative z-10 hidden md:inline-block">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className={`h-full w-1/2 rounded-full ${theme === "dark" ? "bg-secondary" : "bg-primary"}`}
        />
      </div>
    </div>
  );
};

export default ModeToggle;