"use client"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesPage = () => {
    return (
        <section className="flex h-screen justify-start items-center  relative lg-px-10 py-10">
        <div className="py-2.5 px-2.5 lg:px-10 flex-col w-full">
            <h1 className="uppercase text-md md:text-5xl lg:text-7xl font-mono font-bold align-self-start">
              User Experience
            </h1>
            <h2 className="md:customOutline uppercase text-md md:text-5xl lg:text-7xl font-mono font-bold">
              User Experience
            </h2>
            <div className="bg-[#efba2b] px-2.5 py-4 rounded -rotate-3 border-black border-2 flex justify-center w-full md:w-1/4">
              <h3 className="text-md md:text-xl font-bold font-mono text-accent">
                Under Construction - Services
              </h3>
            </div>
          </div>
          <div className="py-2.5 px-10 w-1/2 flex justify-end items-center">
            <Button className="bg-transparent flex">
              <ArrowRight size={48} className="" />
            </Button>
          </div>
        </section>
    )
}


export default ServicesPage;