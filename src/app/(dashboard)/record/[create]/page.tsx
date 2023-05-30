"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Datepicker from "react-tailwindcss-datepicker";
import { useDropdownList } from "@/hooks/useRecord";
import Loading from "@/app/components/Loading";
import RecordForm from "@/app/components/record/RecordForm";

type Props = {};

export default function CreateRecordPage({}: Props) {
  const router = useRouter();
  const menuItems = ["วิ่ง", "ดื่มน้ำ"];
  const [selected, setSelected] = useState(menuItems[0]);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const { data, isLoading } = useDropdownList();
  if (isLoading) {
    return <Loading />;
  }

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  const handleValueChange = (newValue: any | any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <>
      <button
        className="mt-3 rounded-lg border border-purple-500 bg-purple-500 px-2 py-2 text-white"
        onClick={router.back}
      >
        back
      </button>
      <section className="w-full max-w-sm space-y-5 text-gray-600">
        <RecordForm dropDownList={data!} />
      </section>
    </>
  );
}
