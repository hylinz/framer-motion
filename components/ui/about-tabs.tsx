"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { VscSymbolMisc } from "react-icons/vsc";
import { FaTools } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";


export default function AboutTabs() {

  const allContents = [
    { icon: <MdPerson />, label: "About", contentTitle: "", contentBody: "", contentFooter: "" },
    { icon: <IoLogoJavascript className="text-[#f7df1e]"/>, label: "JavaScript", contentTitle: "", contentBody: "", contentFooter: "" },
    { icon: <FaTools />, label: "IT/Infrastructure", contentTitle: "", contentBody: "", contentFooter: "" },
    { icon: <AiOutlineDotNet className="bg-[#512bd4] rounded-full" />, label: ".NET", contentTitle: "", contentBody: "", contentFooter: "" },
    { icon: <VscSymbolMisc />, label: "Misc", contentTitle: "", contentBody: "", contentFooter: "" },
  ];


  
  const [selectedTab, setSelectedTab] = useState(allContents[0]);

  return (
    <Tabs defaultValue={selectedTab.label} className="h-full">
      <TabsList className="w-full bg-primary/10">
        {allContents.map((item) => (
          <TabsTrigger
          
            key={item.label}
            value={item.label}
            className={item === selectedTab ? "selected  font-bold" : ""}
            onClick={() => setSelectedTab(item)}
          >
            <div className="gap-2.5 flex items-center">
            {item.icon} {item.label}
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      <AnimatePresence mode="wait">
        <TabsContent value={selectedTab.label} className="w-full h-full">
          <motion.div
          
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <h2>
              {selectedTab.contentTitle}
              </h2>
              <main>
                {selectedTab.contentBody}
              </main>
              <div>
                {selectedTab.contentFooter}
              </div>
            </div>
            
          </motion.div>
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
}
