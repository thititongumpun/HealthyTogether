import { User } from "next-auth";
import "next-auth/jwt";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "Admin" | "User";
    username: string | null | undefined;
    error: string;
    accessToken: string;
    accessTokenExpiry: string;
    refreshToken: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      jwtToken: string;
    } & DefaultSession["user"];
    error: string;
  }
}

declare module "next-auth" {
  interface User {
    data: {
      accessToken: string;
      accessTokenExpiry: string;
      refreshToken;
    }
  }
}