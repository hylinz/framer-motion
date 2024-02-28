"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralSettings } from "./general-settings";
import { useState } from "react";


export default function SettingContent() {  
  return (
    <section className="w-full">
      <Tabs defaultValue="general">
        <TabsList className="w-full bg-primary/10 rounded">
          <TabsTrigger value="general" className="w-full">
            General
          </TabsTrigger>
          <TabsTrigger value="site" className="w-full">
            Site
          </TabsTrigger>
          <TabsTrigger value="advanced" className="w-full">
            Advanced
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <GeneralSettings />
        </TabsContent>
        <TabsContent value="site">
          <p>hello</p>
        </TabsContent>
        <TabsContent value="advanced">
          <p>hello</p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
