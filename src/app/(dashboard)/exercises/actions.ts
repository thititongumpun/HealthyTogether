"use server"

import { auth } from "@/auth";
import { db } from "../../../../drizzle/drizzle";

export async function getExercises(date: Date | undefined) {
  const session = await auth();
  date?.setHours(0, 0, 0, 0)
  const data = await db.query.exercises.findMany({
    where: (exercise, { eq, and }) =>
      and(eq(exercise.userId, session?.user?.id as string),
        eq(exercise.date, date as Date)),
  })

  return data

}

