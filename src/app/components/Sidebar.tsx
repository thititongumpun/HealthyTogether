"use client";

import React, { useRef } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useOnClickOutside } from "usehooks-ts";
import { signOut } from "next-auth/react";
import { User } from "@/types/Auth";

export type NavItem = {
  label: string;
  subMenu?: string;
  href: string;
  icon: React.ReactNode;
};

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
];

type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
  user: User;
};

export default function Sidebar({
  open,
  navItems = navigation,
  setOpen,
  user,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });

  const handleSignout = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-purple-500 text-zinc-50": true, // colors
        "fixed top-0 z-20 md:sticky md:top-16 md:z-0 md:w-full": true, // positioning
        "h-full w-[300px] md:h-[calc(100vh_-_64px)]": true, // for height and width
        ".3s transition-transform ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="top-0 md:sticky md:top-16">
        {/* nav items */}
        <ul className="flex flex-col gap-2 py-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    "text-indigo-100 hover:bg-indigo-900": true, //colors
                    "flex items-center gap-4 ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "mx-2 rounded-md p-2": true, //self style
                  })}
                  onClick={() => setOpen(false)}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
          <li
            className={classNames({
              "text-indigo-100 hover:bg-indigo-900": true, //colors
              "flex items-center gap-4 ": true, //layout
              "transition-colors duration-300": true, //animation
              "mx-2 rounded-md p-2": true, //self style
              "hover: cursor-pointer": true,
            })}
            onClick={handleSignout}
          >
            <ArrowLeftOnRectangleIcon className="h-6 w-6" /> ออกจากระบบ
          </li>
        </ul>
      </nav>
      {/* account  */}
      <div className="border-t border-t-indigo-800 p-4">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://res.cloudinary.com/defvbtczt/image/upload/v1680093886/HealthyTogether/1.jpg"
            }
            height={36}
            width={36}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex flex-col ">
            <span className="my-0 text-indigo-50">{user?.fullName}</span>
            <Link href="/" className="text-sm text-indigo-200">
              ตั้งค่า
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
