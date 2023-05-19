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
import type { ChartData, ChartOptions } from "chart.js";
import Loading from "@/app/components/Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let delayed= false;
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
  const { data, isLoading, isFetching, error, refetch } =
    useChartData(selected);

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  if (isLoading) {
    return <Loading />
  }
  return (
    <section className="w-full md:w-[680px]">
      <div className="relative mx-auto mt-12 max-w-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-2.5 top-0 my-auto h-6 w-6 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        เลือกรายการกิจกรรม
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
      <div>
        <Bar options={options} data={data!} />
      </div>
    </section>
  );
}
