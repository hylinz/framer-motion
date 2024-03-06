"use client"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HomePage = () => {
    return (
        <section className="flex h-screen justify-start items-center relative md:px-10 md:py-10">
        <div className="py-2.5 px-2.5 lg:px-10 flex flex-col w-full items-center md:items-start break-words  font-mono font-bold">
            <h1 className="uppercase text-5xl md:text-7xl md:text">
              User Experience
            </h1>
            <h2 className="customOutline uppercase text-5xl md:text-7xl">
              User Experience
            </h2>
            <div className="bg-[#efba2b] px-5 md:px-10 py-2 md:py-4 rounded-lg shadow -rotate-3 border-black border-2 flex justify-center self-start ml-5">
              <h3 className="text-xl text-accent">
                Under Construction
              </h3>
            </div>
          </div>
          <div className="py-2.5 px-10 w-1/2 hidden md:flex justify-end items-center">
            <Button className="bg-transparent flex">
              <ArrowRight size={48} className="" />
            </Button>
          </div>
        </section>
    )
}


export default HomePage;