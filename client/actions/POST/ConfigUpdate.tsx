"use server";
import { db } from "@/utils/prisma";
import { createFile } from "@/config/CreateConfig";

interface GeneralSettings {
  siteTitle: string;
  siteDescription?: string;
}

export const updateGeneralSettings = async (data: GeneralSettings) => {
  const response = {
    success: false,
    message: "",
  };

  const { siteTitle, siteDescription } = data;
  if (!siteTitle || !siteDescription) {
    response.message = "Missing title or description";
    return response;
  }
  try {
    const currentSettings = await db.globalSiteConfiguration.findFirst();

    if (!currentSettings) {
        const newSettings = await db.globalSiteConfiguration.create({
            data: {
          title: siteTitle,
          description: siteDescription,
        },
      });

      if (newSettings) {
          response.success = true;
        }
        return response;
    }
    
    const updatedSettings = await db.globalSiteConfiguration.update({
        where: {
        id: currentSettings?.id,
      },
      data: {
        title: siteTitle,
        description: siteDescription,
      },
    });
    

      if (updatedSettings) {
        response.success = true;
        createFile(JSON.stringify(updatedSettings));
      }
    

    return response;
  } catch (error) {
    console.log("[ERROR] - Update General Settings Error: ", error);
    response.message = "Failed to update settings";
    return response;
  }
};
