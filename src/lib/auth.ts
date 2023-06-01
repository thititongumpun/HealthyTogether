import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

async function refreshAccessToken(token: string) {
  try {
    const tokenResponse = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'v1/accounts/refresh-token', {
      token: token
    });

    return {
      token,
      accessToken: tokenResponse.data.accessToken,
      accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
      refreshToken: tokenResponse.data.refreshToken
    }
  } catch (error) {
    return {
      token,
      error: "RefreshAccessTokenError",
    }
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/Accounts/authenticate`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()


        if (res.ok && user) {
          return user
        }

        throw new Error(user.message)
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session({ session, token }) {
      session.user = token.user;
      session.error = token.error
      return session;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
};