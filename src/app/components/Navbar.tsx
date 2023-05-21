"use client";

import React from "react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  onMenuButtonClick(): void;
  isOpen: boolean;
};

export default function Navbar({ onMenuButtonClick, isOpen }: Props) {
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "fixed z-10 h-16 w-full px-4 shadow-sm": true, //positioning & styling
        "!bg-purple-500": true,
      })}
    >
      <Image src="/logo.png" alt="logo" width={40} height={40} priority />
      <div className="flex-grow"></div>
      <div className="flex flex-1 items-center justify-end">
        <BellIcon className="h-6 w-6" />
      </div>
      <button className="md:hidden" onClick={onMenuButtonClick}>
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
    </nav>
  );
}
