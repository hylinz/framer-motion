"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { config } from "@/config/config";
import { Info } from "lucide-react";
import { updateGeneralSettings } from "@/actions/POST/ConfigUpdate";
import { useRouter } from "next/navigation";


const FormSchema = z.object({
  siteTitle: z.string().min(1, {
    message: "Site title must be atleast 1 characters.",
  }),
  siteDescription: z.string().min(1, {
    message: "Site description must be at least 1 characters.",
  }),
});



export function GeneralSettings() {
    const router = useRouter();

const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        siteTitle: config?.title || "",
        siteDescription: config?.description || "",
    },
});

async function onSubmit(data: z.infer<typeof FormSchema>) {
    const response = await updateGeneralSettings(data);
    if (response.success) {
        router.refresh();
    }
}

   


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="siteTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site title</FormLabel>
              <FormControl>
                <Input
                  placeholder={config?.title || "my cool site name"}
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex py-2 items-center">
                <Info className="h-4 w-4 mr-2" />
                This is the title of your site, visible by search engines and
                visitors
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="siteDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site description</FormLabel>
              <FormControl>
                <Input
                  placeholder={config?.description || "my cool description"}
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex py-2 items-center">
                <Info className="h-4 w-4 mr-2" />
                This is the descirption of your site, visible by search engines
                and visitors.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
