
import { useQuery } from "@tanstack/react-query";
import { CreateRecord, DropDownList, Record } from "@/types/Record";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getRecords = async (): Promise<Record[]>  => {
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

  return data;
}

export const getDropdownList = async (): Promise<DropDownList[]> => {
  const session = await getSession()
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/target/activity`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`,
    }
  })

  return data;
}

export const createRecord = async (createRecord: CreateRecord) => {
  const session = await getSession()
  const record = {
    date: createRecord.date?.startDate,
    qty: createRecord.qty,
    unit: createRecord.unit,
    activityName: createRecord.activityName
  }
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/activityhistory`, record, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`,
    }
  })

  return data;
}


export const useRecord = () => useQuery(['records'], () => getRecords());
export const useDropdownList = () => useQuery(['dropDowns'], () => getDropdownList());