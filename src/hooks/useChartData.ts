import { ChartData } from "@/types/Chart";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { getSession } from "next-auth/react";

export const getChartData = async (label: string) => {
  const session = await getSession()
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/chart`, {
    dateFrom: "2023-05-13",
    dateTo: "2023-05-18",
    label: label,
  },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.user.jwtToken}`,
      },
    });
  const response: ChartData = data;
  return response;
}

export const useChartData = (label: string) => useQuery(['chartData', label], () => getChartData(label));