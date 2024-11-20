"use server";

import { users } from "../../../../drizzle/schema";
import { db } from "../../../../drizzle/drizzle";

// import { eq, not } from "drizzle-orm";
// import { revalidatePath } from "next/cache";
// import { db } from "@/db/drizzle";
// import { todo } from "@/db/schema";
export const getData = async () => {
  const data = await db.select().from(users);
  return data;
};