import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import { auth } from "@/auth";

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user) return <div>not logged in</div>;
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-3xl">
        <CardHeader className="flex flex-col items-center gap-8 sm:flex-row">
          <div className="relative h-32 w-32 overflow-hidden rounded-full">
            <Image
              src={session.user.image || "/default-profile.jpg"}
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl font-bold">
              {session.user.name}
            </CardTitle>
            <p className="text-gray-500">{session.user.email}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              Passionate about creating elegant solutions to complex problems.
              With 5 years of experience in web development, I specialize in
              React, Node.js, and cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </div>
            <div className="mt-4 border-t pt-4">
              <h3 className="mb-2 text-lg font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "AWS",
                  "Docker",
                  `${session.user.id}`,
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
