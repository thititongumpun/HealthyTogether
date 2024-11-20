"use server";

import { advices, categories } from "../../../../drizzle/schema";
import { db } from "../../../../drizzle/drizzle";
import { eq, sql, getTableColumns } from 'drizzle-orm';

export const getAdviceData = async (categoryId: string) => {
  const data = await db.select({ ...getTableColumns(advices) })
    .from(advices)
    .leftJoin(categories, eq(categories.id, categoryId))
    .where(sql`${advices.categoryId} = ${categoryId}`)
  return data;
};