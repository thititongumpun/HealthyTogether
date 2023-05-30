
import { useQuery } from "@tanstack/react-query";
import { DropDownList, Record } from "@/types/Record";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getRecords = async () => {
  const d = new Date();
  const session = await getSession()
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/ActivityHistory/date`, {
    d
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`,
    }
  })

  const response: Record[] = data;
  return response;
}

export const getDropdownList = async () => {
  const session = await getSession()
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/target/activity`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`,
    }
  })

  const response: DropDownList[] = data;
  return response;
}


export const useRecord = () => useQuery(['criterias'], () => getRecords());
export const useDropdownList = () => useQuery(['dropDowns'], () => getDropdownList());