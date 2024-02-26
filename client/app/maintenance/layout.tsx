import { config } from "@/config/config";
import { redirect } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className="flex items-center justify-center h-screen">
      {children};
    </main>
  );
}
