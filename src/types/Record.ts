import { coerce, number, object, string, z } from 'zod';

export interface Record {
  id: string;
  activityName: string;
  qty: number;
  unit: string;
  date: Date;
  isFix: boolean;
  createdDate: Date;
  updatedDate: null;
  accountId: number;
  email: string;
}

export interface DropDownList {
  subject: string;
  unit: string;
}

export const createRecord = object({
  date: z.object({
    startDate: z.string(),
    endDate: z.string()
  }),
  activityName: string(),
  qty: z.coerce.number().min(1, "กรุณากรอกมากกว่า 1"),
  unit: string(),
}).partial();

export type CreateRecord = z.infer<typeof createRecord>;
