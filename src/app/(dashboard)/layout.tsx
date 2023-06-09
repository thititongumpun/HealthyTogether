"use client";
import "../globals.css";
import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";
import Sidebar, { NavItem } from "../components/Sidebar";
import { signIn, useSession } from "next-auth/react";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useGetMe } from "@/hooks/useGetMe";
import Loading from "../components/Loading";
import Script from "next/script";

export const navigation: NavItem[] = [
  { label: "แดชบอร์ด", href: "/", icon: <HomeIcon className="h-6 w-6" /> },
  {
    label: "บันทึกกิจกรรม",
    subMenu: "(วิ่งเดิน/ดื่มน้ำ)",
    href: "/record",
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
  {
    label: "แจ้งเตือน",
    subMenu: "Healthy Together",
    href: "/notification",
    icon: <HomeIcon className="h-6 w-6" />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: me, isLoading } = useGetMe();
  const session = useSession();


  let tokenExpire = new Date(session.data?.expires!).getTime();
  let now = Date.now();

  useEffect(() => {
    if (now > tokenExpire) {
      signIn();
    }
  }, [now, session, tokenExpire])

  if (isLoading) {
    return <Loading />;
  }


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
          user={session?.data?.user}
          me={me!}
        />
        {children}
      </div>
      <Script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" />
      <Script type="text/javascript" src="/kofi.js" />
    </main>
  );
}
