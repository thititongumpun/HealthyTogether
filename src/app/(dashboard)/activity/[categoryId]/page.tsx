"use client";

import React from "react";
import Link from "next/link";
import { useCriteria } from "@/hooks/useCriteria";

type Props = {
  params: {
    categoryId: string;
  };
};

export default function ActivityCategoryPage({ params }: Props) {
  const { data } = useCriteria(+params.categoryId);
  return (
    <>
      <ul className="mt-12 w-full space-y-3 divide-y">
        {data?.items.map((item, idx) => (
          <li
            key={idx}
            className="bg-purple-500 px-4 py-5 text-white duration-150 hover:rounded-xl hover:border-white hover:shadow-md"
          >
            <Link
              href={item.categoryId}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-left text-sm">
                {item.subject} {item.qty} {item.unit}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
