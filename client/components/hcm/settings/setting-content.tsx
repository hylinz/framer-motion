
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";


const GeneralSettings = () => {
  return (
    <div className="w-full h-full flex-col">
      <div className="flex-col">
        <h2 className="font-bold text-xl">General Settings</h2>
        <p className="font-light text-sm">Change your general settings here.</p>
      </div>
      <Label>Site title</Label>
      <Input name="title" />
      <Label>Site description</Label>
      <Textarea />
    </div>
  );
}


export default function SettingContent() {
  return (
    <section className="w-full">
      <Tabs defaultValue="general">
        <TabsList className="w-full bg-primary/10 rounded">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="site">Site</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <GeneralSettings />
        </TabsContent>
        <TabsContent value="site">

        </TabsContent>
      </Tabs>
    </section>
  );
}
