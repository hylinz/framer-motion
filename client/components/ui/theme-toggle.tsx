"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {theme && theme === "light" ? (
              <Button variant="ghost" onClick={() => setTheme("dark")}>
                <Moon />
              </Button>
            ) : (
              <Button variant="ghost" onClick={() => setTheme("light")}>
                <Sun />
              </Button>
            )}
          </TooltipTrigger>
          <TooltipContent>
            {theme && theme === "light" ? (
              <p>Change to dark mode</p>
            ) : (
              <p>Change to light mode</p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
