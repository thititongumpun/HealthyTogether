"use server";

import { criterias, categories } from "../../../../drizzle/schema";
import { db } from "../../../../drizzle/drizzle";
import { eq, sql, getTableColumns } from 'drizzle-orm';

export async function getCriteriasData(categoryId: string) {
  const data = await db.select({ ...getTableColumns(criterias) })
    .from(criterias)
    .leftJoin(categories, eq(categories.id, categoryId))
    .where(sql`${criterias.categoryId} = ${categoryId}`)
  return data;
};