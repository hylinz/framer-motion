"use client";
import {
  motion,
  useMotionValue,
} from "framer-motion";
import { useState } from "react";
import HomePage from "./Home";
import AboutPage from "./About";
import ServicesPage from "./Services";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const DRAG_BUFFER = 50;
const pages = [
  {
    name: "Home",
    URL: "/",
    jsx: <HomePage />,
  },
  {
    name: "About",
    URL: "/about",
    jsx: <AboutPage />,
  },
  {
    name: "Services",
    URL: "/services",
    jsx: <ServicesPage />,
  },
];

export default function Hero() {
  const [pageIndex, setPageIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && pageIndex < pages.length - 1) {
      setPageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && pageIndex > 0) {
      setPageIndex((pv) => pv - 1);
    }
  };



  return (
    <div className="relative overflow-hidden ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${pageIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex relative cursor-grab active:cursor-grabbing"
      >
        <Pages pageIndex={pageIndex} />
      </motion.div>
    </div>
  );
}
const Pages = ({ pageIndex }: { pageIndex: number }) => {
  return (
    <>
      {pages.map((pages: {name: string, URL: string, jsx: JSX.Element}, i: number) => {
        return (
          <motion.div
            key={i}
            animate={{
              scale: pageIndex === i ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 h-screen"
          >
            {pages.jsx}
          </motion.div>
        );
      })}
    </>
  );
};


