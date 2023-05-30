import { ChartData } from "@/types/Chart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getChartData = async (dateFrom: string, dateTo: string, label: string) => {
  const session = await getSession();
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/chart`, {
    dateFrom: dateFrom,
    dateTo: dateTo,
    label: label,
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`,
    }
  });
  const response: ChartData = data;
  return response;
}

export const useChartData = (dateFrom: string, dateTo: string, label: string) => useQuery(['chartData', dateFrom, dateTo, label], () => getChartData(dateFrom, dateTo, label));