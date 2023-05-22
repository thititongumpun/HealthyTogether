"use client";
import "../globals.css";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";
import Sidebar, { NavItem } from "../components/Sidebar";
import { useSession } from "next-auth/react";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const navigation: NavItem[] = [
  { label: "แดชบอร์ด", href: "/", icon: <HomeIcon className="h-6 w-6" /> },
  {
    label: "บันทึกกิจกรรม",
    subMenu: "(วิ่งเดิน/ดื่มน้ำ)",
    href: "/",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    label: "สรุปผลกิจกรรม",
    subMenu: "(วิ่งเดิน/ดื่มน้ำ)",
    href: "/report",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    label: "กิจกรรม 5 หมวด",
    href: "/activity",
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    label: "แนะนำ",
    href: "/recommend",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    label: "คู่มือการใช้งาน",
    subMenu: "Healthy Together",
    href: "/manual",
    icon: <HomeIcon className="h-6 w-6" />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();
  console.log(session?.user);

  return (
    <main className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Navbar
          onMenuButtonClick={() => setSidebarOpen((prev) => !prev)}
          isOpen={sidebarOpen}
          navigation={navigation}
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
    </main>
  );
}
