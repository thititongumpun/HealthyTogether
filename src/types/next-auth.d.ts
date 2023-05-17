import { User } from "next-auth";
import "next-auth/jwt";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "Admin";
    username: string | null | undefined;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      jwtToken: string;
    } & DefaultSession["user"];
  }
}