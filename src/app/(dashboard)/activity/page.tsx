"use client";

import React from "react";
import Loading from "@/app/components/Loading";
import { useCategory } from "@/hooks/useCategory";
import Link from "next/link";

type Props = {};

export default function ActiviyPage({}: Props) {
  const { data: categories, isLoading } = useCategory();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mx-auto mt-12 w-full px-4 leading-relaxed md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-lg text-lg text-gray-600">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-2xl">
        {categories?.map((category) => (
          <div
            className="mt-5 space-y-3 overflow-hidden bg-gray-200"
            key={category.id}
          >
            <Link href={`/activity/${category.categoryOrderId}`}>
              <h4 className="flex cursor-pointer items-center justify-center py-5 text-lg font-medium text-gray-700">
                {category.categoryName}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
