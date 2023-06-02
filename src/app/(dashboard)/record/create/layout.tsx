import React from "react";

type Props = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center px-4 space-y-5">
      {children}
    </main>
  );
}
