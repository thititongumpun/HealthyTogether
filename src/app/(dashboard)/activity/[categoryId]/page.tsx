"use client";

import React, { useState } from "react";
import { useCriteria } from "@/hooks/useCriteria";
import Loading from "@/app/components/Loading";
import Checkbox from "@/app/components/Checkbox";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    categoryId: string;
  };
};

export default function ActivityCategoryPage({ params }: Props) {
  const [checked, setChecked] = useState(false);
  const { data, isLoading } = useCriteria(params.categoryId);
  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <button
        className="mt-3 rounded-lg border border-purple-500 bg-purple-500 px-2 py-2 text-white"
        onClick={router.back}
      >
        back
      </button>
      <ul className="mt-4 w-full space-y-3 divide-y">
        {data?.items.map((item, idx) => (
          <li
            key={idx}
            className="text-dark flex items-center justify-between bg-gray-400 px-2 py-5 font-semibold duration-150 hover:border-white hover:shadow-md"
          >
            <h4 className="text-left text-sm">
              {item.subject} {item.qty} {item.unit}
            </h4>
            <div className="flex px-1 py-4">
              <Checkbox
                name="checkbox"
                checked={checked}
                onChange={setChecked}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
