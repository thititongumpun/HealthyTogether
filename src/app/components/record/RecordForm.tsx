"use client";

import React, { useEffect } from "react";
import { CreateRecord, DropDownList, createRecord } from "@/types/Record";
import Datepicker from "react-tailwindcss-datepicker";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
type Props = {
  dropDownList: DropDownList[];
};

export default function RecordForm({ dropDownList }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm<CreateRecord>({
    resolver: zodResolver(createRecord),
  });
  const onSubmit: SubmitHandler<CreateRecord> = (data) => console.log(data);

  let activityName = watch("activityName");
  const unit = dropDownList.find((item) => item.subject === activityName)?.unit;

  useEffect(() => {
    setValue("unit", unit, { shouldValidate: true });
  }, [unit, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        defaultValue={{
          startDate: new Date().toISOString().split("T")[0],
          endDate: new Date().toISOString().split("T")[0],
        }}
        render={({ field }) => (
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
            onChange={field.onChange}
            value={field.value as DateValueType}
          />
        )}
      />
      <div>
        <label className="font-medium">เลือกรายการกิจกรรม</label>
        <select
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
          className="absolute -right-1/4 bottom-1.5 rounded-lg bg-transparent px-4 py-2 text-sm font-medium"
        />
      </div>
      <span className="text-red-500">
        {errors["qty"] ? errors["qty"].message : ""}
      </span>
      <div className="mt-5 flex flex-col px-2 py-2">
        <button>Submit</button>
      </div>
    </form>
  );
}
