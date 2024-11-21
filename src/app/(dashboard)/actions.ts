"use server"

import { auth } from "@/auth";
import { db } from "../../../drizzle/drizzle"

export default async function getTotalExerciseMinutes() {
  const currentDate = new Date()
  const session = await auth();
  currentDate.setHours(0, 0, 0, 0);
  const data = await db.query.exercises.findMany({
    columns: {
      qty: true,
    },
    where: (exercises, { eq, and }) =>
      and(eq(exercises.date, currentDate),
        eq(exercises.userId, session?.user?.id as string)),
  })

  return data.reduce((acc, curr) => acc + curr.qty, 0);
}