"use client";
import "../globals.css";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();
  console.log(session?.user);

  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Navbar
          onMenuButtonClick={() => setSidebarOpen((prev) => !prev)}
          isOpen={sidebarOpen}
        />
      </div>
      <div className="grid md:grid-cols-sidebar">
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          user={session?.user}
        />
        {children}
      </div>
    </div>
  );
}
