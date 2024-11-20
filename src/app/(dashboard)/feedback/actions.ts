import { db } from "../../../../drizzle/drizzle";

export default async function getUsers() {
  const data = await db.query.users.findMany();
  return data;
}