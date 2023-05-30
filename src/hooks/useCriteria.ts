import { Criteria } from "@/types/Criteria";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getCriteriaById = async (categoryId: string) => {
  const session = await getSession();
  const d = new Date();
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v2/criteria`, {
    date: d,
    categoryId: categoryId
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`
    }
  })

  const response: Criteria = data;
  return response;
}


export const useCriteria = (categoryId: string) => useQuery(['criterias'], () => getCriteriaById(categoryId));