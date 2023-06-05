import { Me } from "@/types/Auth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getMe = async (): Promise<Me> => {
  const session = await getSession();
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/accounts/authenticate/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.jwtToken}`,
      },
    }
  );

  return data;
};

export const useGetMe = () => useQuery(["me"], getMe, { staleTime: Infinity });
