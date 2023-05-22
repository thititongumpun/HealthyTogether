import React from "react";
import { Category } from "@/types/Cateogory";
import Link from "next/link";

type Props = {
  category: Category;
};

export default function CategoryList({ category }: Props) {
  return (
    <section
      className="mt-5 space-y-3 overflow-hidden bg-gray-200"
      key={category.id}
    >
      <Link href={`/activity/${category.categoryOrderId}`}>
        <h4 className="flex cursor-pointer items-center justify-center py-5 text-lg font-medium text-gray-700">
          {category.categoryName}
        </h4>
      </Link>
    </section>
  );
}
