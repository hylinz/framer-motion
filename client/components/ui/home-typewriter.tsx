"use client";
import Typewriter from "typewriter-effect";

export function HomeTypewriter() {
  
  return (
    <div className="py-2.5 px-10 w-full flex justify-start max-h-screen items-start ">
    <h3 className="text-lg md:text-2xl lg:text-5xl md:text text-primary/70 py-2-5">
      <Typewriter
        options={{
          delay: 75,
          deleteSpeed: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello Wolrd!")
            .pauseFor(500)
            .deleteChars(4)
            .typeString("rld!")
            .pauseFor(200)
            .typeString("<br />")
            .pauseFor(50)
            .typeString("<br />")
            .pauseFor(50)
            .typeString(
              `<span className="text-center whitespace-nowrap">Elevate your digital imprint with a modern, responsive and accessible website.</span>`
            )
            .pauseFor(50)
            .typeString("<br />")
            .pauseFor(50)
            .typeString("<br />")
            .typeString(`Or don't, whatever. I'm not your boss.`)
            .start();
        }}
      />
    </h3>
  </div>
  );
}
