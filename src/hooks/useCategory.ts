
import { Category } from "@/types/Cateogory";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import axios from "axios";

export const getCategory = async () => {
  const session = await getSession();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/category`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`
    }
  })

  const response: Category[] = data;
  return response;
}


export const useCategory = () => useQuery(['advices'], () => getCategory());