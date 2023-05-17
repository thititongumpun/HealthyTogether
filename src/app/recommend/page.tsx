import { Advice } from "@/types/Advice";
import React from "react";
import { getAuthSession } from "@/lib/session";

type Props = {};

async function getAdvices() {
  const session = await getAuthSession();
  const res = await fetch("https://apiprd.thiti.live/api/v1/Advice", {
    headers: {
      Authorization: `Bearer ${session?.user.jwtToken}`,
    },
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RecommendPage({}: Props) {
  const data: Advice[] = await getAdvices();
  return (
    <section className="">
      <div className="mx-auto flex w-full items-center space-x-2 rounded-md border p-2">
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
          className="w-full appearance-none bg-white text-gray-500 placeholder-gray-500 outline-none sm:w-auto"
          type="text"
          placeholder="Search"
        />
      </div>
      <ul className="mt-12 space-y-3 divide-y">
        {data.map((advice) => (
          <li
            key={advice.id}
            className="px-4 py-5 duration-150 hover:rounded-xl hover:border-white hover:bg-gray-50"
          >
            <p className="text-gray-600 sm:text-sm">{advice.name}</p>
            <div>{advice.detail}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
