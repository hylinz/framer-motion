"use server";
import { db } from "@/utils/prisma";

export const getConfiguration = async () => {
  const response = {
    success: false,
    message: "",
    data: [],
  };
  try {
    const config = await db.globalSiteConfiguration.findFirst();
    if (!config) {
      response.message = "No configuration found";
      return response;
    }
    response.data = [config] as typeof response.data;
  } catch (error) {
    console.log("[ERROR] - GETCONFIG: ", error);
    response.message = "Failed to get configuration";
    return response;
  }
};
