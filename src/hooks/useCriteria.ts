import { Criteria } from "@/types/Criteria";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { getSession } from "next-auth/react";

export const getCriteriaById = async (categoryId: number) => {
  console.log(categoryId)
  const d = new Date();
  const session = await getSession()
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v2/criteria`, {
    date: d,
    categoryId: categoryId
  },
    {
      headers: {
        Authorization: `Bearer ${session?.user.jwtToken}`,
      },
    })

  const response: Criteria = data;
  return response;
}


export const useCriteria = (categoryId: number) => useQuery(['criterias'], () => getCriteriaById(categoryId));