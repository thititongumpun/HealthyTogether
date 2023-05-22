"use client";

import AdviceList from "@/app/components/Advice/CategoryList";
import Loading from "@/app/components/Loading";
import { useCategory } from "@/hooks/useCategory";
import React from "react";

type Props = {};

export default function ActiviyPage({}: Props) {
  const { data: categories, isLoading } = useCategory();
  console.log(categories);

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
          <AdviceList key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
