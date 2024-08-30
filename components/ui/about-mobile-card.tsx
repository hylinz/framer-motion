import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { ReactNode } from "react";

interface AboutCardInterface {
  trigger?: string;
  title?: string;
  children?: ReactNode;
}

export default function AboutCardMobile({
  trigger,
  title,
  children,
}: AboutCardInterface) {
  return (
    <Dialog>
      <DialogTrigger className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-primary transition-all bg-gradient-to-br from-primary/80 to-secondary/80 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:from-secondary hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary active:scale-95">
        <span className="absolute inset-0 transition-transform translate-x-full group-hover:-translate-x-0 bg-gradient-to-br from-secondary to-primary opacity-20"></span>
        <span className="relative z-10">{trigger}</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription asChild>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
