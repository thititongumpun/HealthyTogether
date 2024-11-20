import { auth } from "@/auth";

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user) return <div>not logged in</div>;
  return (
    <div>
      <span>{session.user.email}</span>
    </div>
  );
}
