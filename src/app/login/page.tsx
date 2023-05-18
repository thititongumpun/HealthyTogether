"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Link from "next/link";

type Props = {};

export default function LoginPage({}: Props) {
  const router = useRouter();
  const [isPasswordHidden, setPasswordHidden] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);

    await signIn("credentials", {
      ...data,
      redirect: false,
      callbackUrl: `${window.location.origin}/`,
    }).then((response) => {
      if (!response?.ok) {
        console.log(response?.error);
      } else {
        router.push("/dashboard");
      }
    });
  };
  return (
    <main className="flex min-h-screen items-center justify-center text-center">
      <div className="flex flex-col space-y-1">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={37}
          placeholder="blur"
          blurDataURL={"/logo.png"}
          className="h-auto w-full"
        />
        <p className="text-xl font-bold">Healthy Together</p>
        <p className="text-sm">Application</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 rounded bg-white px-8 pb-4 pt-6"
        >
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type={isPasswordHidden ? "password" : "text"}
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            เข้าสู่ระบบ
          </button>
        </form>
        <p>ลืมรหัสผ่าน</p>
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm">หรือ</span>
          </div>
        </div>
        <div className="flex justify-center space-x-2 py-4 px-2">
          <p>ไม่มีบัญชี?</p>
          <Link
            href="/register"
            className="font-bold text-blue-500 hover:cursor-pointer"
          >
            สมัครสมาชิก
          </Link>
        </div>
      </div>
    </main>
  );
}
