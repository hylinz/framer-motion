import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ModeToggle from "./ui/theme-toggle";

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && open ? (
        <motion.div
          initial="initialState"
          animate={open ? "animateState" : "initialState"}
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              right: -1000,
              opacity: 0,
            },
            animateState: {
              left: 0,
              opacity: 1,
            },
            exitState: {
              right: -1000,
              opacity: 0,
            },
          }}
          className="p-4 md:p-8 w-full h-screen fixed top-0 z-20 bg-gradient-radial"
        >
          <X
            size="48"
            className="absolute top-12 right-12 transition-all duration-300 hover:cursor-pointer hover:rotate-180 hover:scale-50"
            onClick={() => setOpen(!open)}
          />
          <div className="absolute top-12 left-12">
            <ModeToggle />
          </div>
          <div className="mx-auto max-w-5xl">
            <Link
              heading="About"
              subheading="Learn what we do here"
              imgSrc="/mountain.jpg"
              href="#"
            />
            <Link
              heading="Clients"
              subheading="We work with great people"
              imgSrc="/mountain.jpg"
              href="#"
            />
            <Link
              heading="Portfolio"
              subheading="Our work speaks for itself"
              imgSrc="/mountain.jpg"
              href="#"
            />
            <Link
              heading="Careers"
              subheading="We want cool people"
              imgSrc="/mountain.jpg"
              href="#"
            />
            <Link
              heading="Fun"
              subheading="Incase you're bored"
              imgSrc="/mountain.jpg"
              href="#"
            />
          </div>
        </motion.div>
      ) : (
        <button
          onClick={() => setOpen(!open)}
          className=""
        >
          <Menu className="ml-2.5 hover:cursor-pointer" size="32" />
        </button>
      )}
    </>
  );
};

const Link = ({
  heading,
  imgSrc,
  subheading,
  href,
}: {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = ref?.current?.getBoundingClientRect();

    if (rect) {
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={() => handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-primary py-4 transition-colors duration-500 hover:border-primary-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary/70 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-primary transition-colors duration-500 group-hover:text-primary/70">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-primary" />
      </motion.div>
    </motion.a>
  );
};
