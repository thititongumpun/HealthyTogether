import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "../drizzle/drizzle"
import { users, accounts, sessions, verificationTokens } from "../drizzle/schema"
import Resend from "next-auth/providers/resend"
import GitHub from "next-auth/providers/github"

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
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      allowDangerousEmailAccountLinking: true,
    })
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "database", maxAge: 30 * 24 * 60 * 60,
  },
})

