import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSession } from "next-auth/react";
import { Notification } from "@/types/Notification";

export const getNotification = async (date?: string): Promise<Notification[]> => {
  const session = await getSession();
  date = new Date().toISOString().split("T")[0];
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/v2/notification`, { date },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.jwtToken}`,
      },
    }
  );

  return data;
};

export const useNotification = (date?: string) => useQuery(["me", date], () => getNotification(date));
