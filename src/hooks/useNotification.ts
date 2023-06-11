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



export const getCountNotification = async (date?: string): Promise<number> => {
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

  let notification: Notification[] = data;

  return notification.map((x) => x.notCompleted.filter((x) => x.isTarget === true).length).reduce((a, b) => a + b, 0);
};

export const useCountNotification = (date?: string) => useQuery(["totalNotification", date], () => getCountNotification(date));
export const useNotification = (date?: string) => useQuery(["notification", date], () => getNotification(date));

