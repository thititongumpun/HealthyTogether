"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";

type Props = {};

export default function LoginPage({}: Props) {
  const router = useRouter();
  const { status } = useSession();
  if (status === "authenticated") {
    redirect("/");
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data: any) => {
    await signIn("credentials", {
      ...data,
      redirect: true,
      callbackUrl: `${window.location.origin}/`,
    }).then((response) => {
      if (!response?.ok) {
      } else {
        router.push("/");
      }
    });
  };
  return (
    <main className="flex min-h-screen items-center justify-center text-center">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-center">
          <Image
            src="https://healthyapplication.vercel.app/logo.png"
            alt="logo"
            width={150}
            height={30}
            priority
            className="h-auto w-auto"
          />
        </div>
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
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="mb-2 inline-flex rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-bold  text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            {isSubmitting ? (
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "เข้าสู่ระบบ"
            )}
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
        <div className="flex justify-center space-x-2 px-2 py-4">
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
