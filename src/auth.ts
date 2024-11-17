import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "../drizzle/drizzle"
import { users, accounts, sessions, verificationTokens } from "./schema"
import Resend from "next-auth/providers/resend"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    Resend({
      from: "auth@wcydtt.co",
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt", maxAge: 30 * 24 * 60 * 60,
  },
})

