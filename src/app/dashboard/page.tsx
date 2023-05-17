"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const menus = [
  {
    name: "บันทึกกิจกรรม",
    subMenu: "(วิ่งเดิน/ดื่มน้ำ)",
    link: "",
  },
  {
    name: "สรุปผลกิจกรรม",
    subMenu: "(วิ่งเดิน/ดื่มน้ำ)",
    link: "",
  },
  {
    name: "กิจกรรม 5 หมวด",
    subMenu: "",
    link: "",
  },
  {
    name: "แนะนำ",
    subMenu: "",
    link: "/recommend",
  },
  {
    name: "คู่มือการใช้งาน",
    subMenu: "Healthy Together",
    link: "",
  },
];

export default function DashboardPage({}: Props) {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <main className="flex items-center justify-center px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="items-start justify-between space-y-2 sm:flex sm:flex-col">
          {menus.map((menu, idx) => (
            <div
              key={idx}
              className="mx-auto flex w-full flex-col items-center justify-between rounded-xl border"
            >
              <Link href={menu.link}>
                <div className="text-3xl">{menu.name}</div>
                <span className="text-sm text-gray-500">{menu.subMenu}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
