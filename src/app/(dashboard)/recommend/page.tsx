import { Advice } from "@/types/Advice";
import React from "react";
import { getAuthSession } from "@/lib/session";
import Link from "next/link";

type Props = {};

async function getAdvices() {
  const session = await getAuthSession();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/Advice`, {
    headers: {
      Authorization: `Bearer ${session?.user.jwtToken}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RecommendPage({}: Props) {
  const data: Advice[] = await getAdvices();
  return (
    <>
      <ul className="mt-12 w-full space-y-3 divide-y">
        {data.map((advice) => (
          <li
            key={advice.id}
            className="bg-purple-500 px-4 py-2 text-white duration-150 hover:rounded-xl hover:border-white hover:shadow-md md:px-12"
          >
            <Link href={`/recommend/${advice.id.toString()}`}>
              <p className="text-lg">{advice.name}</p>
              <p className="text-sm">{advice.detail}</p>
              <button></button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
