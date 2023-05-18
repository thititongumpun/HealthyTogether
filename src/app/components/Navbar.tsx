"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Careers", path: "/" },
    { title: "Guides", path: "/" },
    { title: "Partners", path: "/" },
  ];

  return (
    <nav className="border-b bg-purple-500">
      <div className="mx-auto flex max-w-screen-xl items-center space-x-8 px-4 py-1 md:px-8">
        <div className="flex-none lg:flex-initial">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            placeholder="blur"
            blurDataURL={"/logo.png"}
            priority
            rel="preload"
          />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div
            className={`absolute left-0 top-16 z-20 w-full border-b bg-purple-500 p-4 lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-12 space-y-5 lg:mt-0 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-white hover:text-white">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            {/* <ProfileDropDown class="mt-5 border-t pt-5 lg:hidden" /> */}
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 rounded-md border p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="w-full appearance-none bg-purple-500 text-gray-500 placeholder-gray-500 outline-none sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>
            <button className="text-white" onClick={() => signOut()}>
              signOut
            </button>
            {/* <ProfileDropDown class="hidden lg:block" /> */}
            <button
              className="block text-gray-400 outline-none lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
