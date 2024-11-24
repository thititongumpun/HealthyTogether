"use server"

import { auth } from "@/auth";
import { db } from "../../../drizzle/drizzle"
import { format } from "date-fns";

export default async function getTotalExerciseMinutes() {
  const session = await auth();

  const data = await db.query.exercises.findMany({
    columns: {
      qty: true,
      date: true
    },
    where: (exercises, { eq, and }) =>
      eq(exercises.userId, session?.user?.id as string),
  })

  const filteredData = data.filter(
    (row) => row.date && format(new Date(row.date), 'yyyy-MM-dd') === format(new Date(new Date().setHours(0, 0, 0, 0)), 'yyyy-MM-dd')
  );

  return filteredData.reduce((acc, curr) => acc + curr.qty, 0);
}