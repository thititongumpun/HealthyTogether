import { redirect } from 'next/navigation';

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Auth } from "@/types/Auth";

export const getAuthSession = async () => {
  const session: Auth | null = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }
  
  return session;
}