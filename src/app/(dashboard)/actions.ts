"use server"

import { auth } from "@/auth";
import { db } from "../../../drizzle/drizzle"

export default async function getTotalExerciseMinutes() {
  const session = await auth();
  const data = await db.query.exercises.findMany({
    columns: {
      qty: true,
    },
    where: (exercises, { eq, and }) =>
      and(eq(exercises.userId, session?.user?.id as string)),
    // eq(exercises.userId, session?.user?.id as string)),
  })

  return data.reduce((acc, curr) => acc + curr.qty, 0);
}