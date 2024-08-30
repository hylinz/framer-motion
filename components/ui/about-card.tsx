import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { ReactNode } from "react";

interface AboutCardInterface {
  title?: string;
  desc?: string;
  children?: ReactNode;
  footer?: string;
}

export default function AboutCard({
  title,
  desc,
  children,
  footer,
}: AboutCardInterface) {
  return (
    <Card className="group bg-gradient-to-br from-primary/20 via-primary/30 to-primary/40 shadow-lg border-transparent border-2 rounded-xl transform transition-transform ease-in-out duration-300 hover:scale-105 hover:shadow-2xl hover:border-secondary flex flex-col overflow-hidden">
      <CardHeader className="bg-primary/80 p-4 flex flex-col items-start">
        {title && (
          <CardTitle className="text-xl font-bold text-secondary">
            {title}
          </CardTitle>
        )}
        {desc && (
          <CardDescription className="mt-2 text-secondary/70">
            {desc}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="group-hover:bg-primary/30 flex-1 p-6 text-primary-dark">
        {children && children}
      </CardContent>
      {footer && (
        <CardFooter className="bg-primary/90 p-4 text-secondary text-right">
          <p>{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
}
