"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useChartData } from "@/hooks/useChartData";
import type { ChartOptions } from "chart.js";
import Loading from "@/app/components/Loading";
import Datepicker from "react-tailwindcss-datepicker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let delayed = false;
const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "กราฟแสดงรายละเอียด",
    },
  },
  maintainAspectRatio: false,
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context: any) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
};

type Props = {};

export default function ReportPage({}: Props) {
  const menuItems = ["วิ่ง", "ดื่มน้ำ"];
  const [selected, setSelected] = useState(menuItems[0]);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
  });

  const { data, isLoading } = useChartData(
    value.startDate,
    value.endDate,
    selected
  );

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  const handleValueChange = (newValue: any | any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="w-full">
      <div className="mx-auto mt-12 flex flex-col space-y-5">
        <Datepicker
          value={value}
          onChange={handleValueChange}
          primaryColor={"blue"}
          separator={"~"}
          showFooter={true}
          readOnly={true}
          inputClassName="w-full rounded-md focus:ring-0 bg-white px-3 py-4 text-sm shadow-sm outline-none focus:border-indigo-600"
          toggleClassName={"hidden"}
          useRange={false}
        />
        <select
          value={selected}
          onChange={handleSelected}
          className="w-full appearance-none rounded-md border bg-white p-2.5 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
        >
          {menuItems.map((menu, idx) => (
            <option key={idx}>{menu}</option>
          ))}
        </select>
      </div>
      <div className={`relative h-[30vh] w-[90vw] md:h-auto md:w-[500px]`}>
        <Bar options={options} data={data!} />
      </div>
    </section>
  );
}
