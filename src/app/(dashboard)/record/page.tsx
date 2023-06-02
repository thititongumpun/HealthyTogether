"use client";

import React, { useState } from "react";
import { deleteRecord, useRecord } from "@/hooks/useRecord";
import {
  PencilIcon,
  TrashIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Loading from "@/app/components/Loading";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ConfirmDialog from "@/app/components/record/ConfirmDialog";
import Datepicker from "react-tailwindcss-datepicker";

type Props = {};

export default function RecordPage({}: Props) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const [value, setValue] = useState({
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  });

  const { data, isLoading } = useRecord(value.startDate);

  const handleValueChange = (newValue: any | any) => {
    setValue(newValue);
  };

  let d = new Date()
    .toLocaleString("th-TH", { timeZone: "Asia/Bangkok" })
    .split(" ")[0];

  const { mutate: removeRecord } = useMutation(
    (id: string) => deleteRecord(id),
    {
      onSuccess() {
        queryClient.invalidateQueries(["records"]);
        toast.success("ลบสำเร็จ");
      },
      onError(error: any) {
        if (Array.isArray((error as any).data.error)) {
          (error as any).data.error.forEach((el: any) =>
            toast.error(el.message, {
              position: "top-right",
            })
          );
        } else {
          toast.error((error as any).data.message, {
            position: "top-right",
          });
        }
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 md:px-8">
      <div className="m-3 mx-auto flex max-w-xl p-2 ">
        <Datepicker
          primaryColor={"blue"}
          separator={"~"}
          showFooter={true}
          readOnly={true}
          inputClassName="w-full rounded-md focus:ring-0 bg-white px-3 py-4 text-sm shadow-sm outline-none focus:border-indigo-600"
          toggleClassName={"hidden"}
          useRange={false}
          asSingle
          placeholder="กรุณาเลือกวัน"
          onChange={handleValueChange}
          value={value}
        />
      </div>
      <section className="flex-col items-start justify-between space-y-2 border-b md:flex">
        <div className="flex w-full items-center justify-between rounded-md border bg-purple-500 py-4">
          <div>
            <h3 className="text-2xl font-bold  text-white">
              รายงานการทำกิจกรรม
            </h3>
          </div>
          <Link href="/record/create">
            <PlusCircleIcon className="h-10 w-10 cursor-pointer overflow-auto rounded-full bg-white text-purple-500" />
          </Link>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="mt-6 md:mt-0">{d}</div>
          <h4 className="mt-6 rounded-lg border  bg-gray-200 px-1 py-1 text-sm md:mt-0">
            จำนวน {data?.length} รายการ
          </h4>
        </div>
      </section>

      <section className="mt-2 flex flex-col gap-2 px-2 py-2">
        {data?.map((record) => (
          <div key={record.id}>
            <div className="flex justify-between space-y-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <p>{record.activityName}</p>
                  <p>
                    {record.qty} {record.unit}
                  </p>
                </div>
              </div>
              <div className="flex cursor-pointer gap-5">
                <Link href={`/record/edit/${record.id}`}>
                  <PencilIcon className="h-7 w-6" />
                </Link>
                <TrashIcon
                  className="flex h-7 w-6 cursor-pointer"
                  onClick={() => setOpen(true)}
                />
                <ConfirmDialog
                  title="Are you sure ?"
                  open={open}
                  setOpen={() => setOpen(false)}
                  onConfirm={() => removeRecord(record.id)}
                >
                  คุณต้องการที่จะลบข้อมูลนี้ใช่หรือไม่
                </ConfirmDialog>
              </div>
            </div>
            <div className="relative flex items-center py-5">
              <div className="border-dark flex-grow border-t"></div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
