"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function BackButton({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  const router = useRouter();
  return (
    <Button className={className} onClick={() => router.back()}>
      {children}
    </Button>
  );
}
