"use client";
import React from "react";
import Link from "next/link";
import { navigation } from "../components/Sidebar";

type Props = {};

const nav = navigation.filter((nav) => nav.label !== "แดชบอร์ด");

export default function DashboardPage({}: Props) {
  return (
    <main className="flex items-center justify-center px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="items-start justify-between space-y-2 sm:flex sm:flex-col">
          {nav?.map((menu, idx) => (
            <div
              key={idx}
              className="mx-auto flex w-full flex-col items-center justify-between rounded-xl border text-center"
            >
              {menu.label !== "แดชบอร์ด" && (
                <Link href={menu.href}>
                  <div className="text-3xl">{menu.label}</div>
                  <span className="text-sm text-gray-500">{menu.subMenu}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
