"use client";

import React from "react";
import { useRecord } from "@/hooks/useRecord";
import dayjs from "dayjs";

type Props = {};

export default function RecordPage({}: Props) {
  const { data } = useRecord();
  console.log(data);
  let d = new Date()
    .toLocaleString("th-TH", { timeZone: "Asia/Bangkok" })
    .split(" ")[0];
  return (
    <main className="mx-auto w-full max-w-3xl px-4 md:px-8">
      <section className="flex-col items-start justify-between space-y-2 border-b py-4 md:flex">
        <div className="flex w-full items-center justify-between rounded-md border bg-purple-500 py-4">
          <div>
            <h3 className="text-2xl font-bold  text-white">
              รายงานการทำกิจกรรม
            </h3>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">เพิ่ม</h3>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="mt-6 md:mt-0">{d}</div>
          <h4 className="mt-6 rounded-lg border  bg-gray-200 px-1 py-1 text-sm md:mt-0">
            จำนวน {data?.length} รายการ
          </h4>
        </div>
      </section>
      {data?.map((record) => (
        <div key={record.id}>
          <p>{record.activityName}</p>
          <p>
            {record.qty} {record.unit}
          </p>
        </div>
      ))}
    </main>
  );
}
