"use client";

import React, { useEffect, useState } from "react";
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
  const { data, isLoading } = useCriteria(params.categoryId);
  const router = useRouter();

  const newState = data;

  const [isCompleted, setIsCompleted] = useState(new Array(data?.items?.length).fill(false));

  const handleOnChange = (position: number) => {
    const updatedCheckedState = isCompleted?.map((item, index) =>
      index === position ? !item : item
    );

    setIsCompleted(updatedCheckedState);
  };
  console.log("checkedItems: ", isCompleted);

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
      {data && (
        <ul className="mt-4 w-full space-y-3 divide-y">
          {data?.items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-gray-400 px-2 py-5 font-semibold duration-150 hover:border-white hover:shadow-md"
            >
              <h4 className="text-left text-sm">
                {item.subject} {item.qty} {item.unit}{" "}
                {item.isComplete ? "✅" : "❌"}
              </h4>
              <div className="flex px-1 py-4">
                <Checkbox
                  name={item.subject}
                  checked={isCompleted![idx]}
                  onChange={() => handleOnChange(idx)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
