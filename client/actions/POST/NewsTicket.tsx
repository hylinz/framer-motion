"use server"
import { db } from "@/utils/prisma";


export const addNewsTicket = async (title: string, description: string) => {
  const response = {
    success: false,
    message: "",
  };

  console.log(
    {title, description}
  )

  if (!title || !description) {
    console.log("[WARN] - NEWSTICKET_POST: Missing title or description");
    response.message = "Missing title or description";
    return response;
  }
try {
    const newsTicket = await db.newsTicket.create({
        data: {
            title,
            description,
        },
    });
    return newsTicket;
} catch (error) {
    console.log("[ERROR] - NEWSTICKET_POST: ", error);
    response.message = 'Failed to create news ticket';
    return response;
}
};
