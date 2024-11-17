import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/user-button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  console.log(session);
  return (
    <div>
      <Link href="/api/auth/signin">Login</Link>
      <UserButton />
      <Button>CLick me</Button>
    </div>
  );
}
