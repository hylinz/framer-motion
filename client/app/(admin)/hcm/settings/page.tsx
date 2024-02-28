import SettingContent from "@/components/hcm/settings/setting-content";
import SettingsSideMenu from "@/components/hcm/settings/side-menu";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Page() {
    return (
      <main className="flex-col h-screen">
        <nav className="flex w-full py-2.5 shadow-sm px-2.5">
          <div className="flex-1 w-full">
            <h2 className="font-mono text-xl font-bold tracking-wider">HCM</h2>
          </div>
          <div className="flex-1 w-full flex justify-end">
              {/* <ModeToggle /> */}
          </div>
        </nav>
        <div className="flex">
        <SettingsSideMenu />
        <SettingContent />
        </div>
      </main>
    );
  }
  