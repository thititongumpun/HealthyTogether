
import { useQuery } from "@tanstack/react-query";
import { CreateRecord, DropDownList, Record, UpdateRecord } from "@/types/Record";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getRecords = async (date?: string): Promise<Record[]> => {
  const session = await getSession()
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/ActivityHistory/date`, {
    date
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`,
    }
  })

  return data;
}

export const getRecordById = async (id: string): Promise<Record> => {
  const session = await getSession()
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/ActivityHistory/${id}`, {
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

export const updateRecord = async (id: string, updateRecord: UpdateRecord): Promise<string> => {
  const session = await getSession()
  const { data } = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/v1/activityhistory/${id}`, updateRecord, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`,
    }
  })

  return data;
}

export const deleteRecord = async (id: string): Promise<string> => {
  const session = await getSession()
  const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/v1/activityhistory/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.user.jwtToken}`,
    }
  })

  return data;
}


export const useRecord = (date?: string) => useQuery(['records', date], () => getRecords(date));
export const useDropdownList = () => useQuery(['dropDowns'], () => getDropdownList());
export const useGetRecordById = (id: string) => useQuery(['record', id], () => getRecordById(id));