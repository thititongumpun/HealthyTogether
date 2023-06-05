export interface Notification {
  name: string;
  completed: Completed[];
  notCompleted: Completed[];
  count: number;
}

export interface Completed {
  id: string;
  detail: string;
  color: string;
  date: Date;
  isFix: boolean;
  isTarget: boolean;
  categoryId: string;
}

export interface NotCompleted extends Completed { }