"use server"

import { auth } from "@/auth";
import { db } from "../../../../drizzle/drizzle";

export async function getExercises() {
  const session = await auth();
  const data = await db.query.exercises.findMany({
    where: (exercise, { eq, }) =>
      eq(exercise.userId, session?.user?.id as string)
  })

  return data
}

