"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export default function HomePage({}: Props) {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <main className="flex min-h-screen items-center justify-center text-center">
      <div className="flex flex-col space-y-4 ">
        <Image
          src="/logo.png"
          alt="logo"
          width={250}
          height={50}
          placeholder="blur"
          blurDataURL={"/logo.png"}
          className="h-auto w-full"
        />
        <p className="text-3xl font-bold">Healthy Together</p>
        <p className="text-md">Application</p>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          สมัครสมาชิก
        </button>
        <Link
          href="/login"
          className="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
        >
          เข้าสู่ระบบ
        </Link>
        <button onClick={() => signIn()}>GG</button>
      </div>
    </main>
  );
}
