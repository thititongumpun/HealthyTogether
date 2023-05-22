import { Category } from "@/types/Cateogory";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { getSession } from "next-auth/react";

export const getCategory = async () => {
  const session = await getSession()
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/category`, {
    headers: {
      Authorization: `Bearer ${session?.user.jwtToken}`,
    },
  })

  const response: Category[] = data;
  return response;
}


export const useCategory = () => useQuery(['advices'], () => getCategory());