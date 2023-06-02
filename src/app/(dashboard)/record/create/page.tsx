"use client";

import React from "react";
import { useDropdownList } from "@/hooks/useRecord";
import Loading from "@/app/components/Loading";
import RecordForm from "@/app/components/record/RecordForm";

type Props = {};

export default function CreateRecordPage({}: Props) {
  const { data, isLoading } = useDropdownList();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="w-full max-w-sm space-y-5 text-gray-600">
        <RecordForm dropDownList={data!} />
      </section>
    </>
  );
}
