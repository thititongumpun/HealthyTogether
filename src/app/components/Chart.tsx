
import React from "react";
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
import { getAuthSession } from "@/lib/session";
import { useSession } from "next-auth/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  maintainAspectRatio: false,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

async function GetChartData() {
  const session = await getAuthSession();
  const x = await useSession();
  const body = {
    "dateFrom": "2023-05-13",
    "dateTo": "2023-05-18",
    "label": "วิ่ง"
  }
  const res = await fetch(`${process.env.API_URL}/v1/chart`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Authorization": `Bearer ${session?.user.jwtToken}`,
      "Content-Type": "application/json; ver=1.0"
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 200, 300, 400, 5000],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [1200, 3200, 3300, 1400, 4000],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

type Props = {};

export default function Chart({}: Props) {
  // const data = await getChartData();
  // console.log(data);
  return (
    <div className="w-full md:w-[1080px]">
      <Bar options={options} data={data} />
    </div>
  );
}
