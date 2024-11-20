"use server"

import { auth, signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { db } from "../../drizzle/drizzle";
import { categories, exercises } from "../../drizzle/schema";
import { and, asc, desc, eq } from "drizzle-orm";

export async function Login(formData: FormData) {
  await signIn("resend", formData);
}

export async function Logout() {
  await signOut();
  revalidatePath('/', 'layout')
}

//filter out cat 0
export async function getCategoryData(predicate?: boolean) {
  let data = null;
  if (predicate) {
    data = await db.query.categories.findMany({
      where: (categories, { ne }) => ne(categories.categoryOrderId, 0),
      orderBy: asc(categories.categoryOrderId),
    });
    return data
  }

  data = await db.query.categories.findMany({
    orderBy: desc(categories.categoryOrderId),
  });
  return data;
};

//add exercise
export async function AddExercise({ name, date, qty }: { name: string, date: Date, qty: number }) {
  const session = await auth();
  try {

    const existingExercise = await db.query.exercises.findFirst({
      where: (exercise, { eq, and }) =>
        and(
          eq(exercise.userId, session?.user?.id as string),
          eq(exercise.subject, name), // Match subject with name
          eq(exercise.date, date)     // Match date
        ),
    });

    if (!existingExercise) {
      await db.insert(exercises).values({
        subject: name,
        qty: qty,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: session?.user?.id as string,
        date: date
      });

      revalidatePath('/exercises', 'page')
      return { success: true, message: `บันทึก ${name} สำเร็จ` }
    }

    await db
      .update(exercises)
      .set({
        qty: qty,
        updatedAt: new Date(),
      })
      .where(and(
        eq(exercises.subject, name),
        eq(exercises.date, date),
        eq(exercises.userId, session?.user?.id as string)));


    revalidatePath('/exercises', 'page')
    return { success: true, message: `อัพเดท ${name} สำเร็จ` }

  } catch (e) {
    console.log('error to created exercise', e)
  }
}

export async function deleteExercise({ id, name }: { id: string, name: string }) {
  const session = await auth();
  try {
    await db.delete(exercises).where(
      and(eq(exercises.userId, session?.user?.id as string),
        eq(exercises.id, id)));
    revalidatePath('/exercises')
    return { success: true, message: `ลบ ${name} สำเร็จ` }
  } catch (e) {
    console.log('error to delete exercise', e)
  }
}