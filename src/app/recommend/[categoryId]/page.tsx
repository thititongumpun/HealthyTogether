import React from "react";
import { getAuthSession } from "@/lib/session";
import { Advice } from "@/types/Advice";
import Link from "next/link";

type Props = {
  params: {
    categoryId: string;
  };
};

async function getAdviceByCategoryId(categoryId: string) {
  const session = await getAuthSession();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/Advice/${categoryId}`, {
    headers: {
      Authorization: `Bearer ${session?.user.jwtToken}`,
    },
    next: { revalidate: 3600 },
  });
  return res.json();
}

export default async function RecommendCategoryPage({ params }: Props) {
  const data: Advice[] = await getAdviceByCategoryId(params.categoryId);
  
  console.log(`${process.env.API_URL}`)
  console.log(data);
  return (
    <>
      <ul className="mt-12 w-full space-y-3 divide-y">
        {data.map((advice, idx) => (
          <li
            key={idx}
            className="bg-purple-500 px-4 py-5 text-white duration-150 hover:rounded-xl hover:border-white hover:shadow-md"
          >
            <Link
              href={advice.url}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-sm sm:text-lg">
                {advice.description}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
