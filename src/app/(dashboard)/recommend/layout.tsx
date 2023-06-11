"use client";

import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <>
      <section className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center md:w-[800px]">
        {children}
        <button
          className="mx-auto mt-10 flex items-center justify-center rounded-md border border-purple-500 bg-white p-2 text-purple-500"
          onClick={router.back}
        >
          ย้อนกลับ
        </button>
      </section>
    </>
  );
}
