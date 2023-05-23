import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSession } from "next-auth/react";
import { Record } from "@/types/Record";

export const getRecords = async () => {
  const d = new Date();
  const session = await getSession()
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/ActivityHistory/date`, {
    date: d,
    // categoryId: categoryId
  },
    {
      headers: {
        Authorization: `Bearer ${session?.user.jwtToken}`,
      },
    })

  const response: Record[] = data;
  return response;
}


export const useRecord = () => useQuery(['criterias'], () => getRecords());