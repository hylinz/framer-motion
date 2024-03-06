import ModeToggle from "@/components/ui/theme-toggle";
import Link from "next/link";


export default function Page() {
  return (

        <main className="flex min-h-screen ">
          Test
          <Link href="/">home</Link>
          <div className="p-2">
            <ModeToggle />
            
          </div>
        </main>

  );
}
