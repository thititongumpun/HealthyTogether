"use client";

import React, { useEffect } from "react";
import {
  DropDownList,
  Record,
  UpdateRecord,
  createRecord,
} from "@/types/Record";
import { updateRecord as update } from "../../../hooks/useRecord";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

type Props = {
  dropDownList: DropDownList[];
  record?: Record;
};

export default function RecordForm({ dropDownList, record }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<UpdateRecord>({
    resolver: zodResolver(createRecord),
  });

  let activityName = watch("activityName");
  const unit = dropDownList.find((item) => item.subject === activityName)?.unit;

  useEffect(() => {
    setValue("unit", unit, { shouldValidate: true });
  }, [unit, setValue]);

  const { mutate: updateData } = useMutation(
    (recordData: UpdateRecord) => update(record?.id!, recordData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["records"]);
        toast.success("บันทึกข้อมูลสําเร็จ");
        router.back();
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    }
  );

  const onSubmit: SubmitHandler<UpdateRecord> = (data) => {
    updateData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="font-medium">เลือกวันที่</label>
        <div>
          <label className="font-medium">เลือกรายการกิจกรรม</label>
          <select
            defaultValue={record?.activityName}
            {...register("activityName")}
            className="w-full appearance-none rounded-md border bg-white p-2.5 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
          >
            {dropDownList.map((item, idx) => (
              <option key={idx}>{item.subject}</option>
            ))}
          </select>
        </div>
        <label className="font-medium">จำนวน</label>
        <div className="relative">
          <input
            defaultValue={record?.qty}
            type="number"
            required
            className="mt-2 block w-full rounded-lg border p-2.5 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
            {...register("qty")}
          />
          <input
            type="text"
            defaultValue={unit}
            disabled
            readOnly
            className="absolute -right-1 bottom-1.5 w-28 rounded-lg bg-transparent px-4 py-2 text-sm font-medium"
          />
        </div>
        <span className="text-red-500">
          {errors["qty"] ? errors["qty"].message : ""}
        </span>

        <div className="mt-5 flex w-full items-center justify-center space-x-3 px-2 py-2">
          <button className="mt-3 w-full rounded-lg border border-purple-500 bg-purple-500 px-2 py-2 text-white">
            บันทึก
          </button>
        </div>
      </form>
      <button
        className="mx-auto flex items-center justify-center rounded-lg border border-purple-500 bg-white px-2 py-2  text-purple-500"
        onClick={() => router.back()}
      >
        ย้อนกลับ
      </button>
    </>
  );
}
