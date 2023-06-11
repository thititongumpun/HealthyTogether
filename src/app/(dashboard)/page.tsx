"use client";
import React from "react";
import Link from "next/link";
import { navigation } from "../components/Sidebar";
import { useSession } from "next-auth/react";

type Props = {};

const nav = navigation.filter(
  (nav) => nav.label !== "แดชบอร์ด" && nav.label !== "แจ้งเตือน"
);

export default function DashboardPage({}: Props) {
  return (
    <main className="flex items-center justify-center px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="items-start justify-between space-y-12 sm:flex sm:flex-col ">
          {nav?.map((menu, idx) => (
            <Link
              key={idx}
              href={menu.href}
              className="mx-auto flex h-[80px] w-full flex-col items-center justify-center rounded-xl border bg-gray-200 text-center shadow-md"
            >
              <div className="text-3xl">{menu.label}</div>
              <span className="text-sm text-gray-500">{menu.subMenu}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
