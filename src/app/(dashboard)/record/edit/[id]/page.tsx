"use client";

import React from "react";
import Loading from "@/app/components/Loading";
import { useGetRecordById, useDropdownList } from "@/hooks/useRecord";
import UpdateRecordForm from "@/app/components/record/UpdateRecordForm";

type Props = {
  params: {
    id: string;
  };
};

export default function UpdatePage({ params }: Props) {
  console.log(params.id);
  const { data, isLoading } = useDropdownList();
  const {data: record} = useGetRecordById(params.id);
  console.log(record)
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-full max-w-sm space-y-5 text-gray-600">
      <UpdateRecordForm dropDownList={data!} record={record} />
    </section>
  );
}
